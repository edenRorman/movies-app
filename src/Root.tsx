import styled from "styled-components";
import HomeMenu from "./HomeMenu";
import { Outlet, useLocation } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { Dispatch, SetStateAction, createContext, useState } from "react";
import SignInModal from "./SignInModal";
import LogOutModal from "./LogOutModal";

const Layout = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;
const WebTitle = styled.div`
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
const UserIcon = styled.div`
  display: flex;
  font-family: sans-serif;
  font-style: italic;
  align-items: center;
  gap: 8px;
  margin-right: 4px;
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
const MenuLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export type CurrentUserContextType = {
  currentUser: string | null;
  setCurrentUser: Dispatch<SetStateAction<string | null>>;
};
const currentUserContextDefaultValue: CurrentUserContextType = {
  currentUser: null,
  setCurrentUser: () => {},
};
export const CurrentUserContext = createContext<CurrentUserContextType>(
  currentUserContextDefaultValue
);

const Root = () => {
  let location = useLocation();
  const [isSignInOpen, setIsSignInOpen] = useState<boolean>(false);
  const [isLogOutOpen, setIsLogOutOpen] = useState<boolean>(false);
  const shouldSowMenu = !location.pathname.includes("/movie");

  const [currentUser, setCurrentUser] = useState<string | null>(null);

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
        <MenuLayout>{shouldSowMenu && <HomeMenu />}</MenuLayout>
        <Content>
          <Header>
            <WebTitle>Best movie place</WebTitle>
            <UserIcon onClick={openRelevantModal}>
              <FaUserCircle size={22} />
              Hello {currentUser || "guest"}
            </UserIcon>
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
