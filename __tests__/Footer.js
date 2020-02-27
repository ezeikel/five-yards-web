import { render } from "@testing-library/react";
import Footer from "../components/Footer";

test("should render", () => {
  const { container } = render(<Footer />);

  expect(container).toMatchSnapshot();
});
