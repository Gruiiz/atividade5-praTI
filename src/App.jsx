import React from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesConfig from "./routes";
import Header from "./components/Header";
import './index.css';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <RoutesConfig />
    </BrowserRouter>
  );
}
