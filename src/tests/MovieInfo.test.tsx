import { act, prettyDOM, render, screen } from "@testing-library/react";
import specificId from "../mocks/specificId";
import MovieInfo from "../movieInfo/MovieInfo";
import MoviesApi from "../MoviesApi";
import { waitFor } from "@testing-library/react";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Movie view page tests", () => {
  const getSpecificMovieMock = jest
    .spyOn(MoviesApi.prototype, "getSpecificMovie")
    .mockImplementation((movieId: string) => {
      console.log(`Mocking get movie of ${movieId}`);
      return Promise.resolve(specificId);
    });

  test("simple test", async () => {
    await act(async () => {
      await render(<MovieInfo />);
    });
    const loadingIndication = screen.getByText("Loading page");
    expect(loadingIndication).toBeInTheDocument();
    expect(getSpecificMovieMock).toHaveBeenCalled();

    await waitFor(() => {
      const movieTitle = screen.getByText("The Batman");
      expect(movieTitle).toBeInTheDocument();
    });
  });
});
