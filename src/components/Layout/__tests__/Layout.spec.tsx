import { render, screen } from "@testing-library/react";
import Layout from "../Layout";

describe("Layout", () => {
  it("renders its children within the page landmarks", () => {
    render(
      <Layout>
        <p>Page content</p>
      </Layout>,
    );

    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("main")).toContainElement(screen.getByText("Page content"));
    expect(screen.getByRole("contentinfo")).toHaveTextContent(/leboncoin/);
    expect(screen.getByRole("img", { name: "Leboncoin Frontend Team" })).toBeInTheDocument();
  });
});
