import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faGoogle,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faShoppingBag, faBars } from "@fortawesome/pro-regular-svg-icons";
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
  faCheck,
  faEnvelope,
  faRuler,
  faPhoneAlt,
  faVenusMars,
  faLock,
  faUnlock,
  faQuestionCircle,
  faMapMarkerAlt,
  faGlobe,
  faCalendar,
  faEye,
  faEyeSlash,
} from "@fortawesome/pro-light-svg-icons";
import mixpanel from "mixpanel-browser";
import { useApollo } from "../apollo/client";
import { MenuContextProvider } from "../contexts/menu";
import Page from "../components/Page";

mixpanel.init(
  process.env.NEXT_PUBLIC_MIXPANEL_TOKEN,
  { api_host: "https://api-eu.mixpanel.com" },
  "",
);

config.autoAddCss = false; /* eslint-disable import/first */

library.add(
  faFacebookF,
  faTwitter,
  faInstagram,
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
  faCheck,
  faEnvelope,
  faRuler,
  faPhoneAlt,
  faVenusMars,
  faLock,
  faUnlock,
  faQuestionCircle,
  faMapMarkerAlt,
  faGlobe,
  faCalendar,
  faEye,
  faEyeSlash,
  faShoppingBag,
  faBars,
);

const MyApp = ({ Component, pageProps, err }: AppProps & { err: any }) => {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <MenuContextProvider>
        <Page>
          {/* Workaround for https://github.com/vercel/next.js/issues/8592 */}
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Component {...pageProps} err={err} />
        </Page>
      </MenuContextProvider>
    </ApolloProvider>
  );
};

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
