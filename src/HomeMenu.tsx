import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import styled from "styled-components";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import MoviesApi from "./MoviesApi";
import { useContext, useEffect, useState } from "react";
import MovieTabIcon from "./images/movieTabIcon.png";
import {
  CurrentUserContext,
  CurrentUserContextType,
} from "./currentUserContext";
import { Skeleton } from "@mui/material";

const StyledMenu = styled.div`
  border-right: 1px solid rgba(0, 0, 0, 0.12);
  height: 100%;
  width: 150px
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 0;
  overflow: auto; 
`;
const MenuIcon = styled.img`
  display: flex;
  justify-content: center;
  max-width: 50%;
  max-height: 20%;
  padding: 5px;
`;
const HomeMenu = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [allGenres, setAllGenres] = useState<string[]>([]);
  const navigate = useNavigate();
  const { genre: selectedGenre } = useParams();
  let location = useLocation();

  const { currentUser } =
    useContext<CurrentUserContextType>(CurrentUserContext);

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
      setIsLoading(false);
    };
    callGetGeners();
  }, [setAllGenres, setIsLoading]);

  return (
    <StyledMenu>
      <MenuIcon src={MovieTabIcon} />
      <Divider />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          flexShrink: 1,
          height: 0,
        }}
      >
        <List>
          {["Home", "Upcoming", currentUser ? "Favorite" : null].map(
            (text) =>
              text !== null && (
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
              )
          )}
        </List>
        <Divider />
        {isLoading ? (
          <div style={{ paddingRight: 6 }}>
            {Array.from({ length: 15 }).map((_, index) => (
              <Skeleton key={index} animation="wave" height={50} width={140} />
            ))}
          </div>
        ) : (
          <>
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
          </>
        )}
      </div>
      <Divider />
    </StyledMenu>
  );
};

export default HomeMenu;
