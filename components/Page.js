import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import GlobalStyle from "../GlobalStyle";
import Meta from "./Meta";
import Header from "./Header";
import Footer from "./Footer";

const theme = {
  red: "#FF0000",
  black: "#393939",
  grey: "#3A3A3A",
  lightgrey: "#E1E1E1",
  offWhite: "#EDEDED",
  maxWidth: "1000px",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)",
  default: {
    textColor: "var(--color-black)",
    white: "var(--color-white)",
    maxWidth: "1000px",
    bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)",
  },
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Inner = styled.main`
  flex: 1 0 auto;
  display: flex;
  > div {
    flex: 1 0 100%;
  }
`;

const StyledToastContainer = styled(ToastContainer).attrs({
  className: "toast-container",
  toastClassName: "toast",
  bodyClassName: "body",
  progressClassName: "progress",
})`
  /* .toast-container */
  bottom: 0;
  left: 0;
  padding: 0;
  margin: 0;
  width: 100%;
  .toast {
    background-color: var(--color-black);
    margin: 0;
    cursor: auto;
  }
  button[aria-label="close"] {
    display: none;
  }
  .toast {
    background-color: var(--color-black);
  }
  .body {
    background-color: var(--color-black);
    color: var(--color-white);
    font-family: var(--font-family-primary);
    margin: 0;
    display: flex;
    place-items: center;
    font-size: 1.6rem;
    padding: var(--spacing-medium);
  }
`;

const Page = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Meta />
      <Header />
      <Wrapper>
        <Inner>{children}</Inner>
        <Footer />
        <StyledToastContainer
          position="bottom-center"
          draggable
          hideProgressBar
          pauseOnHover
          autoClose={3000}
          closeOnClick={false}
        />
      </Wrapper>
    </ThemeProvider>
  </>
);

Page.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Page;
