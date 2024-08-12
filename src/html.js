import React from "react";

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {props.headComponents}
        <link rel="stylesheet" href="/styles/global.css" />
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.preBodyHtml }}
        />
        {props.bodyComponents}
        <script src="/js/script.js"></script>
      </body>
    </html>
  );
}
