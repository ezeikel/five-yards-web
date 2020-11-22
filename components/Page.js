import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
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
  faTimes,
  faReceipt,
  faCalendarCheck,
  faCommentAlt,
  faAddressCard,
  faKey,
  faCreditCard,
  faShoppingBag,
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
  faTimes,
  faReceipt,
  faCalendarCheck,
  faCommentAlt,
  faAddressCard,
  faKey,
  faCreditCard,
  faShoppingBag,
);

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
`;

const Page = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Meta />
        <Header />
        <Inner>{children}</Inner>
        <Footer />
      </Wrapper>
    </ThemeProvider>
  </>
);

Page.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Page;
