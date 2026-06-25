import React from "react";
import "../css/app.css";
import { Box, Button, Stack, Container, Typography } from "@mui/material";
import { Link, Route, Switch } from "react-router-dom";
import { HomePage } from "./MaterialTheme/screens/homePage";
import { ProductsPage } from "./MaterialTheme/screens/productsPage";
import { OrdersPage } from "./MaterialTheme/screens/ordersPage";
import { UserPage } from "./MaterialTheme/screens/userPage";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">HomePage</Link>
        </li>
        <li>
          <Link to="/products">ProductsPage</Link>
        </li>
        <li>
          <Link to="/orders">OrdersPage</Link>
        </li>
        <li>
          <Link to="/member-page">UserPage</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/products">
          <ProductsPage />
        </Route>
        <Route path="/orders">
          <OrdersPage />
        </Route>
        <Route path="/member-page">
          <UserPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
