import React from "react";
import { renderToString } from "react-dom/server";
import Html from "../components/html.js"

export default function(req, res) {
  const markup = renderToString(<Html />);

  res.send(`<!DOCTYPE html>${markup}`);
}
