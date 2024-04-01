import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

  return (
    <Html lang="en">
      <Head />
      <body className={`overflow-y-auto md:overflow-y-hidden`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
