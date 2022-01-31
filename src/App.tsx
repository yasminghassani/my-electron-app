import React, { FC } from "react";
import { HashRouter, Link, Route, Routes } from "react-router-dom";

import HomeContainer from "./containers/HomeContainer";
import AboutContainer from "./containers/AboutContainer";

import { Button } from "antd";
import "./App.css";

const App: FC = () => {
  return (
    <HashRouter>
      <div className="App">
        <div className="menu">
          <Link to="/">
            <Button type="primary">Home</Button>
          </Link>
          <Link to="/about">
            <h2>About</h2>
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/about" element={<AboutContainer />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;
