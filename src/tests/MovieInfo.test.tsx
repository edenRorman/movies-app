import { act, render } from "@testing-library/react";
import MovieInfo from "../components/movieInfo/MovieInfo";
import MoviesApi from "../apis/MoviesApi";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

// jest.mock("../MoviesApi");

// const getSpecificMovieMock = jest.spyOn(
//   MoviesApi.prototype,
//   "getSpecificMovie"
// );
// getSpecificMovieMock.mockImplementation(async (movieId: string) => {
//   console.log(`Mocking get movie of ${movieId}`);
//   return Promise.resolve("ds");
// });

describe("Movie view page tests", () => {
  test("simple test", async () => {
    let component: any;
    await act(() => {
      component = render(<MovieInfo />);
    });
    const element = await component.findByText(/Loading/i);
    expect(element).toBeInTheDocument();
  });
});
