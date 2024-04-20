import { Button } from "@mui/base";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useContext, useState } from "react";
import MoviesApi from "./MoviesApi";

import {
  CurrentUserContext,
  CurrentUserContextType,
} from "./currentUserContext";

interface LoginModalProps {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
}

const SignInModal: React.FC<LoginModalProps> = ({ isOpen, setIsOpen }) => {
  const [userName, setUserName] = useState<string>("");
  const { setCurrentUser } =
    useContext<CurrentUserContextType>(CurrentUserContext);

  const handleOnClose = () => {
    setIsOpen(false);
  };

  const handleSave = async () => {
    const createUserResponse = await new MoviesApi().cresteNewUser(userName);
    if (createUserResponse === "duplicate") {
      alert("409!!");
    } else if (createUserResponse === "error") {
      alert("500!!");
    } else {
      setCurrentUser(userName);
      setIsOpen(false);
      setUserName("");
    }
  };

  return (
    <Dialog open={isOpen} onClose={handleOnClose}>
      <DialogTitle>Welcome to the best movies place</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please create new usey by inserting a user name
        </DialogContentText>
        <TextField
          required
          margin="dense"
          label="User name"
          fullWidth
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleOnClose}>Cancel</Button>
        <Button onClick={handleSave} type="submit">
          Create user
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SignInModal;
