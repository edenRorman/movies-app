import React from "react";
import { render, screen } from "@testing-library/react";
describe("first test", () => {
  test("simple test", () => {
    render(<div>hello</div>);

    const div = screen.getByText("hello");

    expect(div).toBeInTheDocument();
  });
});
