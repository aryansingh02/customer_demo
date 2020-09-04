import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {Provider} from "react-redux";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import {CookiesProvider} from "react-cookie";
import {PersistGate} from "redux-persist/lib/integration/react";
import {persistor, store} from "./store";
import Loading from "./components/Loading";
import "./fonts/National-Bold.otf";
import "./fonts/National-Book.otf";
import "./fonts/National-Extrabold.otf";
import "./fonts/National-Medium.otf";
import "./fonts/National-Regular.otf";
import "./fonts/platform-bold-webfont.ttf";
import "./fonts/platform-regular-webfont.ttf";
import * as Sentry from "@sentry/react";
import config from "./config";

Sentry.init({dsn: config.sentryConfigDsn});

require("typeface-roboto");

ReactDOM.render(
  <Provider store={store}>
    <CookiesProvider>
      <PersistGate persistor={persistor} loading={<Loading />}>
        <App />
      </PersistGate>
    </CookiesProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
