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

interface LogOutModalProps {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
}

const LogOutModal: React.FC<LogOutModalProps> = ({ isOpen, setIsOpen }) => {
  const { setCurrentUser } =
    useContext<CurrentUserContextType>(CurrentUserContext);

  const handleOnClose = () => {
    setIsOpen(false);
  };

  const handleOnLogout = () => {
    localStorage.removeItem("userName");
    setCurrentUser(null);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onClose={handleOnClose}>
      <DialogTitle>LOG OUT</DialogTitle>
      <DialogContent>
        <DialogContentText>Are you sure you want to log out?</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleOnClose}>Cancel</Button>
        <Button onClick={handleOnLogout} type="submit">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LogOutModal;
