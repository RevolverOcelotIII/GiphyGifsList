import React from "react";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import GifGrid from "../Components/GifGrid";
import "@testing-library/jest-dom";

afterEach(() => cleanup());
// test if the api data is being rendered in the grid by verifying the results count that is displayed by Kendo UI framework
test("check if gif list is rendering correctly from the api", async () => {
  render(<GifGrid />);
  await waitFor(() => {
    const full_result_number = screen.getByText(/items/i);
    expect(full_result_number.textContent).toBe("1 - 10 of 50 items");
  });
});
// test if the data filtering is working by verifying there are any changes in the results count displayed by Kendo UI
test("check if gif title is filtering correctly", async () => {
  render(<GifGrid />);
  await waitFor(() => {
    const full_result_number = screen.getByText(/items/i);
    expect(full_result_number.textContent).toBe("1 - 10 of 50 items");
  });
  const input_filter = screen
    .getAllByLabelText("Filter")
    .filter((element) => element.tagName.toLowerCase() === "input");
  await fireEvent.change(input_filter[0], { target: { value: "ab" } });
  await waitFor(() => {
    const search_result_number = screen.getByText(/items/i);
    expect(search_result_number.textContent).not.toBe("1 - 10 of 50 items");
  });
});
