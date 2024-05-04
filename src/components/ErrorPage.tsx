import { useNavigate, useRouteError } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { TbMoodSadDizzy } from "react-icons/tb";
import styled from "styled-components";
import { Button } from "@mui/material";

const ErrorPageLayot = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
const ErrorPageText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: monospace;
`;
const LinkToHomePage = styled(Button)`
  display: flex;
  align-items: center;
  gap: 6px !important;
`;

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  const navigate = useNavigate();
  function handleClick() {
    navigate("/home");
  }

  return (
    <ErrorPageLayot>
      <ErrorPageText id="error-page">
        <h1>Oops!</h1>
        <p>We can't seem to find the page you're looking for.</p>
        <p>
          Error code :<i>{error.statusText || error.message}</i>
        </p>
        <LinkToHomePage color="inherit" onClick={handleClick}>
          Click here to back to the home page
          <IoMdHome size={22} />
        </LinkToHomePage>
      </ErrorPageText>
      <TbMoodSadDizzy size={200} />
    </ErrorPageLayot>
  );
}
