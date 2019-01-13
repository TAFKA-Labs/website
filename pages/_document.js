import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()

    const originalRenderPage = ctx.renderPage
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
      })

    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
      styles: [...initialProps.styles, ...sheet.getStyleElement()],
    }
  }

  render() {
    return (
      <html>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${
              process.env.GA_TRACKING_ID
            }`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GA_TRACKING_ID}');
          `,
            }}
          />
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
