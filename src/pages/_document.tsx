import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ]
      }
    } finally {
      sheet.seal()
    }
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/assets/images/favicon.ico" />
          <meta name="theme-color" content="#c13584" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/apple-icon-192.png" />

          <link
            rel="preload"
            href="/assets/fonts/Cairo-ExtraLight.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />

          <link
            rel="preload"
            href="/assets/fonts/Cairo-Medium.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />

          <link
            rel="preload"
            href="/assets/fonts/Cairo-Regular.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />

          <link
            rel="preload"
            href="/assets/fonts/Cairo-SemiBold.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />

          <link
            rel="preload"
            href="/assets/fonts/Roboto-Regular.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />

          <link
            rel="preload"
            href="/assets/fonts/Roboto.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
