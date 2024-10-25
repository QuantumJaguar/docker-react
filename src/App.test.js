import { render, screen } from "@testing-library/react";
import App from "./App";
import { createRoot } from "react-dom";
test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
it("renders without crashing", () => {
  const div = document.createElement("div");
  const root = createRoot(div);
  root.render(<App />);
  root.unmount();
});
