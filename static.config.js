import path from 'path'
import React, { Component } from 'react'
export default {
  plugins: ['react-static-plugin-typescript'],
  entry: path.join(__dirname, 'src', 'index.tsx'),
  getSiteData: () => ({
    title: 'React Static'
  }),
  paths: {
    public: 'public', // The public directory (files copied to dist during build)
  },
  Document: class CustomHtml extends Component {
    render() {
      const { Html, Head, Body, children, renderMeta } = this.props

      return (
        <Html itemScope itemType="http://schema.org/Article">
          <Head>
            <title>MYDAX</title>
            <meta charSet="UTF-8" />
            <link rel="icon" href="/favicon.png" />
            <link
              href="https://fonts.googleapis.com/css?family=Roboto"
              rel="stylesheet"
            />
            {renderMeta.styleTags}
            {renderMeta.helmet && renderMeta.helmet.title.toComponent()}
            {renderMeta.helmet && renderMeta.helmet.meta.toComponent()}
            <link rel="manifest" href="manifest.json" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <meta httpEquiv="content-language" content="en" />
            <meta itemProp="name" content="MyBit DAX" />
            <meta itemProp="description" content="Decentralized Trading" />
            <meta name="robots" content="index,follow" />
            <meta name="theme-color" content="#1890ff" />
            <meta
              name="Description"
              content="Decentralised exchanges are difficult to use. MYDAX makes it simple by focusing on user-friendliness without sacrificing the security benefits of decentralisation."
            />
          </Head>
          <Body>{children}</Body>
        </Html>
      )
    }
  }
}
