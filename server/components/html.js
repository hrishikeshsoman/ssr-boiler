import React, { Component } from "react";
import App from '../../client/app.js';

export default class Html extends Component {

  render() {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <title>React SSR!</title>
          <script src="assets/client.bundle.js" />
        </head>
        <body>
          <div id="app">
            <App />
          </div>
        </body>
      </html>
    );
  }
}
