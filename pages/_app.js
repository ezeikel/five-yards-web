import App from "next/app";
import { ApolloProvider } from "@apollo/react-hooks";
import withApolloClient from "../apollo/client";
import Page from "../components/Page";
import * as Sentry from "@sentry/browser";

Sentry.init({
  environment: process.NODE_ENV,
  dsn: process.env.SENTRY_DSN,
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
    const { Component, apollo, pageProps } = this.props;

    return (
      <ApolloProvider client={apollo}>
        <Page>
          <Component {...pageProps} />
        </Page>
      </ApolloProvider>
    );
  }
}

export default withApolloClient(MyApp);
