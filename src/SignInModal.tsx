import { Button } from "@mui/base";
import { Box, Modal, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import styled from "styled-components";
import MoviesApi from "./MoviesApi";
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
    <StyledModal
      open={isOpen}
      onClose={handleOnClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Sign-in
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Hi you :)
          <br />
          We need you insert an user name here and let's continiue !!!
        </Typography>
        <TextField
          id="outlined-basic"
          label="Insert user name"
          variant="outlined"
          size="small"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <footer>
          <Button
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Discard
          </Button>
          <Button onClick={handleSave}>Save</Button>
        </footer>
      </Box>
    </StyledModal>
  );
};

export default SignInModal;
