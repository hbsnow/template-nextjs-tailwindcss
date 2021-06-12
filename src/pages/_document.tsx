import React from "react";

import Document, {
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class BaseDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): JSX.Element {
    return (
      <Html lang="ja">
        <body>
          <Head />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default BaseDocument;
