import React from "react";
import styled from "styled-components";
import HomeMenu from "./HomeMenu";
import { Outlet, useLocation } from "react-router-dom";

const Layout = styled.div`
  display: flex;
  height: 100%;
`;
const WebTitle = styled.div`
  display: flex;
  justify-content: center;
  font-family: sans-serif;
  font-size: 30px;
  font-weight: bold;
  font-style: italic;
  margin: 10px 0;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
const MenuLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Root = () => {
  let location = useLocation();

  const shouldSowMenu = !location.pathname.includes("/movie");
  return (
    <Layout>
      <MenuLayout>{shouldSowMenu && <HomeMenu />}</MenuLayout>
      <Content>
        <WebTitle>Best movie place</WebTitle>
        <Outlet />
      </Content>
    </Layout>
  );
};

export default Root;
