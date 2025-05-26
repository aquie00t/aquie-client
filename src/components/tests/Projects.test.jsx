import { render, screen } from "@testing-library/react";
import Projects from "../Projects";

describe("Projects component", () => {
  test("renders the section heading", () => {
    render(<Projects />);
    const heading = screen.getByRole("heading", { name: /projects/i });
    expect(heading).toBeInTheDocument();
  });

  test("renders project title and description", () => {
    render(<Projects />);
    expect(screen.getByText("Aquie")).toBeInTheDocument();
    expect(
      screen.getByText(
        "My personal website built with React, Tailwind CSS, and Vite.",
      ),
    ).toBeInTheDocument();
  });

  test("renders project link with correct href", () => {
    render(<Projects />);
    const link = screen.getByRole("link", { name: /view project/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute(
      "href",
      "https://github.com/aquie00t/aquie-client",
    );
  });
});
