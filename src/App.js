import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MoviesCatalog from "./components/MoviesCatalog";
import MovieInfo from "./components/movieInfo/MovieInfo";
import Root from "./Root";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
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
