import { Button } from "@mui/base";
import { Box, Modal, Typography } from "@mui/material";
import styled from "styled-components";
import { useContext } from "react";
import {
  CurrentUserContext,
  CurrentUserContextType,
} from "./currentUserContext";

const StyledModal = styled(Modal)`
  display: flex;
  alignitems: center;
  justifycontent: center;
  flex-direction: column;
`;
const style = {
  display: "flex",
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

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
    <StyledModal
      open={isOpen}
      onClose={handleOnClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Log-out
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Are you sure that you want to logOut from movies app?
        </Typography>
        <footer>
          <Button
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Discard
          </Button>
          <Button onClick={handleSave}>Confirm</Button>
        </footer>
      </Box>
    </StyledModal>
  );
};

export default LogOutModal;
