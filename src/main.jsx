import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";


function setEmojiFavicon(emoji) {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext("2d");
  ctx.font = "64px serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(emoji, 32, 32);

  const link =
    document.querySelector("link[rel='icon']") || document.createElement("link");
  link.rel = "icon";
  link.href = canvas.toDataURL();
  document.head.appendChild(link);
}

setEmojiFavicon("🎬");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
