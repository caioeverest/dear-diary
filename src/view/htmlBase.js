const Html = ({ preloadedBoards, body, styles, title }) => `
  <!DOCTYPE html>
  <html>
  <meta charset="UTF-8">
    <head>
    <link rel="apple-touch-icon" sizes="180x180" href="https://static.olx.com.br/cd/vi/images/icons/apple-touch-icon.png"/>
    <link rel="icon" type="image/png" sizes="32x32" href="https://static.olx.com.br/cd/vi/images/icons/favicon-32x32.png"/>
    <link rel="icon" type="image/png" sizes="192x192" href="https://static.olx.com.br/cd/vi/images/icons/android-chrome-192x192.png"/>
    <link rel="icon" type="image/png" sizes="16x16" href="https://static.olx.com.br/cd/vi/images/icons/favicon-16x16.png"/>
    <link rel="manifest" href="https://static.olx.com.br/cd/vi/images/icons/site.webmanifest"/>
    <link rel="mask-icon" href="https://static.olx.com.br/cd/vi/images/icons/safari-pinned-tab.svg" color="#6e0ad6"/>

    <link
      href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,600,700&display=swap"
      rel="stylesheet"
    />

    <script data-main="public/app-bundle.js" src="public/require.js"></script>
    <script type="text/javascript" src="public/app-bundle.js"></script>
    <script>window.preloadedBoards= ${preloadedBoards};</script>

    <style>
      body {
        margin: 0px;
        text-rendering: geometricPrecision;
        background-color: #f9f9f9;
        width: 100%;
      }
    </style>
      <title>${title}</title>
      ${styles}
    </head>
    <body style="margin:0">
      <div id="app">${body}</div>
    </body>
  </html>
`;

export default Html;
