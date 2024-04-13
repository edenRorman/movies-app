import * as React from "react";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import MoviesApi from "./MoviesApi";
import { useEffect, useState } from "react";
import { BiCameraMovie } from "react-icons/bi";
import { FaThLarge } from "react-icons/fa";

const StyledMenu = styled.div`
  border-right: 1px solid rgba(0, 0, 0, 0.12);
  height: 100%;
`;
const MenuImg = styled.div`
  display: flex;
  justify-content: center;
`;

const HomeMenu = () => {
  const [allGenres, setAllGenres] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleGenreOnClick = (genre: string) => {
    navigate(`/genre/${genre}`);
  };

  useEffect(() => {
    const callGetGeners = async () => {
      const allGenres = await new MoviesApi().getAllGenres();
      setAllGenres(allGenres);
    };
    callGetGeners();
  }, [setAllGenres]);

  return (
    <StyledMenu>
      <MenuImg>
        <BiCameraMovie size={70} />
      </MenuImg>
      <Divider />
      <List>
        {["Home", "Upcomimg"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {allGenres.map((genre) => (
          <ListItem
            key={genre}
            disablePadding
            onClick={() => handleGenreOnClick(genre)}
          >
            <ListItemButton>
              <ListItemText primary={genre} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </StyledMenu>
  );
};

export default HomeMenu;
