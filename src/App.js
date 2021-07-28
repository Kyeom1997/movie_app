import React from "react";
import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import Search from "./components/Search";
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";
import "antd/dist/antd.css";

function App() {
  return (
    <HashRouter>
      <Search />
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Detail} />
    </HashRouter>
  );
}

export default App;
