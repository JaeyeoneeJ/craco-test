import React from "react";
import { Route, Routes } from "react-router-dom";
import HOME_Main from "@HOME/HOME_Main";

const HOME = () => {
  console.log("HOME ROUTE");
  return (
    <Routes>
      <Route exact path="/" Component={HOME_Main} />
    </Routes>
  );
};

export default HOME;
