import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";


import App from "./App";
import "./styles/global.css";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 900,
  once: true,
  easing: "ease-in-out",
});

ReactDOM.createRoot(document.getElementById("root")).render(

  <HelmetProvider>

    <App />

  </HelmetProvider>

);