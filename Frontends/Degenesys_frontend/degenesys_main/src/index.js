import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./utils/ContextProvider";
import { ToastContainer } from "react-toastify";
import App from "./app/App";
import 'react-toastify/dist/ReactToastify.css';

import bannerBg from "./assets/images/nft/v2_banner_bG.webp";

import stylesheet from './common/layout/stylesheet.css';

const preloadLink = document.createElement("link");
preloadLink.href = bannerBg;
preloadLink.rel = "preload";
preloadLink.as = "image";
document.head.appendChild(preloadLink);


function preloadStylesheet(stylesheetPath) {
  const preloadLink = document.createElement("link");
  preloadLink.href = stylesheetPath;
  preloadLink.rel = "preload";
  preloadLink.as = "style";
  document.head.appendChild(preloadLink);
}

preloadStylesheet(stylesheet);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <BrowserRouter>
      <App />
      <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />
    </BrowserRouter>
  </ContextProvider>
);
