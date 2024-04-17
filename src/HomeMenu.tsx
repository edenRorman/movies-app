import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import styled from "styled-components";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import MoviesApi from "./MoviesApi";
import { useEffect, useState } from "react";
import MovieTabIcon from "./images/movieTabIcon.png";

const StyledMenu = styled.div`
  border-right: 1px solid rgba(0, 0, 0, 0.12);
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const MenuIcon = styled.img`
  display: flex;
  justify-content: center;
  width: 50%;
  height: 20%;
  padding: 5px;
`;

const HomeMenu = () => {
  const [allGenres, setAllGenres] = useState<string[]>([]);
  const navigate = useNavigate();
  const { genre: selectedGenre } = useParams();
  let location = useLocation();

  const handleGenreOnClick = (genre: string) => {
    navigate(`/genre/${genre}`);
  };

  const handleGeneralOnClick = (text: string) => {
    navigate(`/${text}`);
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
      <MenuIcon src={MovieTabIcon} />
      <Divider />
      <List>
        {["Home", "Upcoming", "Favorite"].map((text) => (
          <ListItem
            key={text}
            disablePadding
            onClick={() => handleGeneralOnClick(text.toLowerCase())}
          >
            <ListItemButton
              selected={location.pathname.includes(text.toLowerCase())}
            >
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
            <ListItemButton selected={genre === selectedGenre}>
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
