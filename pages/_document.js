import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />),
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  setGoogleAnalyticsTags() {
    return {
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-PKC9SQ34MW');
      `,
    };
  }

  setCypressReactDevTools() {
    return {
      __html: `
      if (window && window.Cypress) {
        window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = window.parent.__REACT_DEVTOOLS_GLOBAL_HOOK__
      }
      `,
    };
  }

  render() {
    return (
      <html>
        <Head>
          {this.props.styleTags}
          {/* Global site tag (gtag.js) - Google Analytics */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-PKC9SQ34MW"
          ></script>
          <script dangerouslySetInnerHTML={this.setGoogleAnalyticsTags()} />
          <script dangerouslySetInnerHTML={this.setCypressReactDevTools()} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
