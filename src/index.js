import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Home,
  Footer,
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);
