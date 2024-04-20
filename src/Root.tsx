import styled from "styled-components";
import HomeMenu from "./HomeMenu";
import { Outlet, useLocation } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import SignInModal from "./SignInModal";

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

const Root = () => {
  let location = useLocation();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const shouldSowMenu = !location.pathname.includes("/movie");
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    const checkForUserName = localStorage.getItem("userName");
    if (checkForUserName) {
      setUserName(JSON.parse(checkForUserName));
    }
  }, []);

  const eden = () => {
    setIsOpen(true);
  };

  // use effect that do get from the local storaget to get the user name if not return guest

  return (
    <Layout>
      <MenuLayout>{shouldSowMenu && <HomeMenu />}</MenuLayout>
      <Content>
        <Header>
          <WebTitle>Best movie place</WebTitle>
          <UserIcon onClick={eden}>
            <FaUserCircle size={22} />
            Hello {userName}
          </UserIcon>
          <SignInModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </Header>
        <Outlet />
      </Content>
    </Layout>
  );
};

export default Root;
