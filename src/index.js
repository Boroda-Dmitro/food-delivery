import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
// import { store, persistor } from "./Redux/Store";
import { store } from "./Redux/Store";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
// import { Global, ThemeProvider } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";
// import { PersistGate } from "redux-persist/integration/react";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
       {/* <PersistGate loading={null} persistor={persistor}> */}
      {/* <ThemeProvider > */}
      <BrowserRouter basename="/food-delivery">
        {/* <Global /> */}
        <App />
      </BrowserRouter>
        {/* </ThemeProvider> */}
        {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
