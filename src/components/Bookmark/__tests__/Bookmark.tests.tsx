import { render, screen } from "@testing-library/react";
import { Bookmark } from "../Bookmark";

describe("Bookmark Component", () => {
  it("renders without crashing", () => {
    render(<Bookmark text="Test bookmark" />);
    expect(screen.getByText("Test bookmark")).toBeInTheDocument();
  });

  it("renders link when provided", () => {
    render(
      <Bookmark text="Test bookmark with link" link="https://www.example.com" />
    );
    const linkElement = screen.getByRole("link", { name: "View details" });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "https://www.example.com");
  });

  it("renders tag when provided", () => {
    render(<Bookmark text="Test bookmark with tag" tag="Test tag" />);
    expect(screen.getByText("Test tag")).toBeInTheDocument();
  });

  it("renders link and tag when provided", () => {
    render(
      <Bookmark
        text="Test bookmark with tag"
        link="https://www.example.com"
        tag="Test tag"
      />
    );

    const linkElement = screen.getByRole("link", { name: "View details" });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "https://www.example.com");

    expect(screen.getByText("Test tag")).toBeInTheDocument();
  });

  it("doesn't render link or tag when not provided", () => {
    render(<Bookmark text="Test bookmark with tag" />);

    expect(screen.queryByRole("link")).not.toBeInTheDocument();
    expect(screen.queryByRole("badge")).not.toBeInTheDocument();
  });
});
