import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
// import { SocketProvider } from "./Context/SocketProvider.jsx";
import { Provider } from "react-redux";
import store from "./store/store.jsx";
import SocketProvider from "./store/Provider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <Provider store={store}>
        <SocketProvider>
          <App />
        </SocketProvider>
      </Provider>
    </BrowserRouter>
  </>
);
