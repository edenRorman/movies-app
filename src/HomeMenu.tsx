import * as React from "react";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const StyledMenu = styled.div`
  border-right: 3px solid black;
`;

const HomeMenu = () => {
  let location = useLocation();

  if (location.pathname.includes("/movie")) return null;
  return (
    <StyledMenu>
      <Toolbar />
      <Divider />
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </StyledMenu>
  );
};

export default HomeMenu;
