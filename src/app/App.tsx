import React from "react";
import "../css/app.css";
import { Box, Button, Stack, Container, Typography } from "@mui/material";
import { Link, Route, Switch } from "react-router-dom";
import { Users } from "./MaterialTheme/screens/Users";
import { About } from "./MaterialTheme/screens/About";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

function Home() {
  return <Container>Home</Container>;
}

export default App;
