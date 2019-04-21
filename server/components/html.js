import React, { Component } from "react";

export default class Html extends Component {

  render() {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <title>React SSR!</title>
        </head>
        <body>
          <div id="app">
            <h1>Rendered in server!</h1>
          </div>
        </body>
      </html>
    );
  }
}
