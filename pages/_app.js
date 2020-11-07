import App from "next/app";
import { ApolloProvider } from "@apollo/client";
import withApolloClient from "../apollo/client";
import Page from "../components/Page";
import * as Sentry from "@sentry/browser";
import { MenuContextProvider } from "../contexts/menu";

Sentry.init({
  enabled: process.env.NODE_ENV === "production",
  environment: process.NODE_ENV,
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  release: process.env.SENTRY_RELEASE,
});

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    // this exposes the query to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }

  render() {
    const { Component, apollo, pageProps, err } = this.props;

    return (
      <ApolloProvider client={apollo}>
        <MenuContextProvider>
          <Page>
            <Component {...pageProps} err={err} />
          </Page>
        </MenuContextProvider>
      </ApolloProvider>
    );
  }
}

export default withApolloClient(MyApp);
