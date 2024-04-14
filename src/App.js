import styled from "styled-components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MoviesCatalog from "./MoviesCatalog";
import MovieInfo from "./movieInfo/MovieInfo";
import Root from "./Root";

const WebTitle = styled.div`
  display: flex;
  justify-content: center;
  font-family: sans-serif;
  font-size: 30px;
  font-weight: bold;
  font-style: italic;
  margin: 10px 0;
`;

const Eden = styled.div`
  display: flex;
  flex-direction: row;
`;
const Eden2 = styled.div`
  display: flex;
  flex-direction: column;
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <MoviesCatalog />,
      },
      {
        path: "/home",
        element: <MoviesCatalog />,
      },
      {
        path: "/upcoming",
        element: <MoviesCatalog />,
      },
      {
        path: "/favorite",
        element: <MoviesCatalog />,
      },
      {
        path: "/movie/:movieId",
        element: <MovieInfo />,
      },
      {
        path: "/genre/:genre",
        element: <MoviesCatalog />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
