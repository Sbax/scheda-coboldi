import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Switch } from "wouter";
import "./index.scss";
import Home from "./pages/home/home";
import Sheet from "./pages/sheet/sheet";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Switch>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/sheet">
        <Sheet />
      </Route>
      <Route path="/sheet/:id">
        <Sheet />
      </Route>
    </Switch>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
