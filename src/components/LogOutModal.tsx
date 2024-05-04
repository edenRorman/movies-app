import { Button } from "@mui/base";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useContext } from "react";
import {
  CurrentUserContext,
  CurrentUserContextType,
} from "../contexts/currentUserContext";

interface LoginModalProps {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
}

const LogOutModal: React.FC<LoginModalProps> = ({ isOpen, setIsOpen }) => {
  const { setCurrentUser } =
    useContext<CurrentUserContextType>(CurrentUserContext);

  const handleOnClose = () => {
    setIsOpen(false);
  };

  const handleSave = async () => {
    localStorage.removeItem("userName");
    setCurrentUser(null);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onClose={handleOnClose}>
      <DialogTitle>LOG OUT</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure that you wanna log out?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleOnClose}>Cancel</Button>
        <Button onClick={handleSave} type="submit">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LogOutModal;
