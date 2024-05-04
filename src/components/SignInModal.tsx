import { Button } from "@mui/base";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import MoviesApi from "../apis/MoviesApi";

import {
  CurrentUserContext,
  CurrentUserContextType,
} from "../contexts/currentUserContext";

interface LoginModalProps {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
}

const SignInModal: React.FC<LoginModalProps> = ({ isOpen, setIsOpen }) => {
  const [userName, setUserName] = useState<string>("");
  const [error, setError] = useState<string>("");
  const { setCurrentUser } =
    useContext<CurrentUserContextType>(CurrentUserContext);

  const handleOnClose = () => {
    setUserName("");
    setError("");
    setIsOpen(false);
  };

  const handleOnSave = async () => {
    const createUserResponse = await new MoviesApi().cresteNewUser(userName);
    if (createUserResponse === "duplicate") {
      setError("This user name is already exist");
    } else if (createUserResponse === "error") {
      setError("Somting went worng. please try again");
    } else {
      setCurrentUser(userName);
      setIsOpen(false);
      setUserName("");
      setError("");
    }
  };

  return (
    <Dialog open={isOpen} onClose={handleOnClose}>
      <form method="dialog">
        <DialogTitle>Welcome to the best movies place</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please create a new user by inserting a user name
          </DialogContentText>
          <TextField
            required
            margin="dense"
            label="User name"
            fullWidth
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />

          <Typography variant="body1" color="error">
            {error}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOnClose}>Cancel</Button>
          <Button disabled={!userName} onClick={handleOnSave} type="submit">
            Create user
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default SignInModal;
