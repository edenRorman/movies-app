import styled from "styled-components";
import HomeMenu from "./HomeMenu";
import { Outlet, useLocation } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import SignInModal from "./SignInModal";
import LogOutModal from "./LogOutModal";
import { CurrentUserContext } from "./currentUserContext";
import { Button } from "@mui/material";

const Layout = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;
const WebTitle = styled.h1`
  display: flex;
  justify-content: center;
  font-family: sans-serif;
  font-size: 30px;
  font-weight: bold;
  font-style: italic;
  margin: 10px 0;
  margin-left: auto;
  margin-right: auto;
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Root = () => {
  let location = useLocation();
  const [isSignInOpen, setIsSignInOpen] = useState<boolean>(false);
  const [isLogOutOpen, setIsLogOutOpen] = useState<boolean>(false);
  const shouldSowMenu = !location.pathname.includes("/movie");

  const [currentUser, setCurrentUser] = useState<string | null>(() => {
    const userFromStorage = localStorage.getItem("userName");
    if (userFromStorage) return JSON.parse(userFromStorage);
    return null;
  });

  const openRelevantModal = () => {
    if (currentUser) {
      setIsLogOutOpen(true);
    } else {
      setIsSignInOpen(true);
    }
  };

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
      }}
    >
      <Layout>
        {shouldSowMenu && <HomeMenu />}
        <Content>
          <Header>
            <WebTitle>Best movie place</WebTitle>
            <Button
              color="inherit"
              startIcon={<FaUserCircle size={22} />}
              onClick={openRelevantModal}
            >
              Hello {currentUser || "guest"}
            </Button>
            <SignInModal isOpen={isSignInOpen} setIsOpen={setIsSignInOpen} />
            <LogOutModal isOpen={isLogOutOpen} setIsOpen={setIsLogOutOpen} />
          </Header>
          <Outlet />
        </Content>
      </Layout>
    </CurrentUserContext.Provider>
  );
};

export default Root;
