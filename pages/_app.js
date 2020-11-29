import { ApolloProvider } from "@apollo/client";
import PropTypes from "prop-types";
import mixpanel from "mixpanel-browser";
import * as Sentry from "@sentry/browser";
import { useApollo } from "../apollo/client";
import { MenuContextProvider } from "../contexts/menu";
import Page from "../components/Page";

Sentry.init({
  enabled: process.env.NODE_ENV === "production",
  environment: process.NODE_ENV,
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  release: process.env.SENTRY_RELEASE,
});

mixpanel.init(
  process.env.NEXT_PUBLIC_MIXPANEL_TOKEN,
  { api_host: "https://api-eu.mixpanel.com" },
  "",
);

const MyApp = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <MenuContextProvider>
        <Page>
          <Component {...pageProps} />
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

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
