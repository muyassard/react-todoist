import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";
import React from "react";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import global_en from "./translation/en/global.json";
import global_uz from "./translation/uz/global.json";

i18next.init({
  resources: {
    en: {
      global_en
    },
    uz: {
      global_uz
    }
  },
  lng: "en",
  fallbackLng: "en"
});

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
