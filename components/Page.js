import PropTypes from "prop-types";
import styled from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faGoogle,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faShoppingCart } from "@fortawesome/pro-regular-svg-icons";
import {
  faCut,
  faSearch,
  faLayerGroup,
  faTimesCircle,
  faUser,
  faBriefcase,
  faAngleDown,
  faDizzy,
} from "@fortawesome/pro-light-svg-icons";
import GlobalStyle from "../GlobalStyle";
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
  faAngleDown,
  faDizzy,
  faGoogle,
  faFacebookSquare,
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Inner = styled.main`
  flex: 1 0 auto;
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
