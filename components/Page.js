import { Fragment } from "react";
import { withRouter } from "next/router";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import GlobalStyle from "../GlobalStyle";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckCircle } from "@fortawesome/pro-solid-svg-icons";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Meta from "./Meta";
import Footer from "./Footer";

library.add(fab, faCheckCircle);

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
    font-family: var(--default-font-family);
    margin: 0;
    display: grid;
    align-items: center;
  }
`;

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

// const StyledPage = styled.div`
//   display: grid;
//   grid-template-rows: ${({ pathname }) => pathname === '/' || pathname === '/signin' ? `1fr` : `80px 1fr`};
//   min-height: 100vh;
//   background-color: ${({ theme }) => theme.default.white};
//   color: ${({ theme }) => theme.default.textColor};
// `;

const Wrapper = styled.div`
  min-height: 100vh;
  min-width: 100vw;
`;

const Page = ({ children }) => (
  <Fragment>
    <Meta />
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Wrapper>
        {/* <Header /> TODO: */}
        {children}
        <Footer />
      </Wrapper>
      <StyledToastContainer
        position="bottom-center"
        hideProgressBar
        pauseOnHover
        autoClose={3000}
        draggable={false}
        closeOnClick={false}
      />
    </ThemeProvider>
  </Fragment>
);

Page.propTypes = {
  children: PropTypes.object.isRequired,
};

export default withRouter(Page);
