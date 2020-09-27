import PropTypes from "prop-types";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faShoppingCart } from "@fortawesome/pro-regular-svg-icons";
import {
  faCut,
  faSearch,
  faLayerGroup,
  faTimesCircle,
  faUser,
  faBriefcase,
} from "@fortawesome/pro-light-svg-icons";
import Meta from "./Meta";
import Header from "./Header";
import Footer from "./Footer";

library.add(
  faFacebookF,
  faTwitter,
  faInstagram,
  faShoppingCart,
  faCut,
  faSearch,
  faLayerGroup,
  faTimesCircle,
  faUser,
  faBriefcase,
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Inner = styled.main`
  flex: 1 0 auto;
  /* display: grid;
  grid-template-columns: 36px 1fr 36px;
  justify-items: center;

  > * {
    grid-column: 2 / -2;
  }

  > .full {
    grid-column: 1 / -1;
  } */
`;

const Page = ({ children }) => (
  <Wrapper>
    <Meta />
    <GlobalStyle />
    <Header />
    <Inner>{children}</Inner>
    <Footer />
  </Wrapper>
);

Page.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Page;
