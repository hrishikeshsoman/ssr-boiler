import React from "react";
import { hydrate } from 'react-dom';
import App from "./app.js";

hydrate(<App />, document.querySelector("#app"));
