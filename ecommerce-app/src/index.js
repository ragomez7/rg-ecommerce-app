import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./store/store";
import { Provider } from "react-redux";
import App from "./components/App";
import Admin from "./components/admin/Admin";
import ManageProducts from "./components/products/ManageProducts";
import ProductInfoPage from "./components/products/ProductInfoPage";
import ProductSalesPage from "./components/products/ProductSalesPage";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <Routes>
          <Route exact path="/" element={<App />}></Route>
          <Route exact path="/admin" element={<Admin />}></Route>
          <Route
            exact
            path="/admin/manage-products"
            element={<ManageProducts />}
          />
          <Route
            exact
            path="/admin/manage-products/:productId"
            element={<ProductInfoPage />}
          />
          <Route
            exact
            path="/admin/manage-products/sales/:productId"
            element={<ProductSalesPage />}
          />
        </Routes>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
