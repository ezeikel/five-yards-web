import { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckCircle } from "@fortawesome/pro-solid-svg-icons";
import "react-toastify/dist/ReactToastify.min.css";
import Meta from "./Meta";
import Footer from "./Footer";

library.add(fab, faCheckCircle);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Inner = styled.main`
  flex: 1 0 auto;
  display: grid;
  grid-template-columns: 36px 1fr 36px;
  justify-items: center;

  > * {
    grid-column: 2 / -2;
  }

  > .full {
    grid-column: 1 / -1;
  }
`;

const Page = ({ children }) => (
  <Wrapper>
    <Meta />
    <GlobalStyle />
    <Inner>{children}</Inner>
    <Footer />
  </Wrapper>
);

Page.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Page;
