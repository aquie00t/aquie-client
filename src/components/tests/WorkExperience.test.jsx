import { render, screen } from "@testing-library/react";
import WorkExperience from "../WorkExperience";

describe("WorkExperience component", () => {
  test("renders section heading", () => {
    render(<WorkExperience />);
    const heading = screen.getByRole("heading", { name: /work experience/i });
    expect(heading).toBeInTheDocument();
  });

  test("renders all experience titles", () => {
    render(<WorkExperience />);
    expect(screen.getByText("Game Developer - Grift Game")).toBeInTheDocument();
    expect(
      screen.getByText("Backend Developer - Emlak24 (Germany)"),
    ).toBeInTheDocument();
    expect(screen.getByText("Freelance Web Developer")).toBeInTheDocument();
  });

  test("renders all experience years", () => {
    render(<WorkExperience />);
    expect(screen.getByText("2022")).toBeInTheDocument();
    expect(screen.getByText("2024")).toBeInTheDocument();
    expect(screen.getByText("Various")).toBeInTheDocument();
  });

  test("renders all descriptions", () => {
    render(<WorkExperience />);
    expect(
      screen.getByText(/collaborated with a small startup-like indie team/i),
    ).toBeInTheDocument();

    expect(
      screen.getByText(/developed a data integration bot/i),
    ).toBeInTheDocument();

    expect(
      screen.getByText(/worked as a freelance developer on multiple/i),
    ).toBeInTheDocument();
  });
});
