import App from "next/app";
import { ApolloProvider } from "react-apollo";
import withApolloClient from "../apollo/client";
import Page from "../components/Page";
import * as Sentry from "@sentry/browser";

Sentry.init({
  dsn: "https://e81718b0ada441fbb06f4120a70662bc@sentry.io/3075904",
  enabled: process.env.NODE_ENV === "production",
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
