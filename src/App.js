import styled from "styled-components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./HomePage";
import MovieInfo from "./MovieInfo";

const WebTitle = styled.div`
  display: flex;
  justify-content: center;
  font-family: sans-serif;
  font-size: 30px;
  font-weight: bold;
  font-style: italic;
  margin: 10px 0;
`;
const router = createBrowserRouter([
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/movie/:id",
    element: <MovieInfo />,
  },
]);

const App = () => {
  return (
    <div>
      <WebTitle>Best movie place</WebTitle>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
