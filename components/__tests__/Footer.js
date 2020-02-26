import { render } from "@testing-library-react";
import Footer from "../Footer";

test("should render", () => {
  const { container } = render(<Footer />);

  expect(container).toMatchInlineSnapshot();
});
