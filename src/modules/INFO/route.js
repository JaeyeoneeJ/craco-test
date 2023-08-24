import React from "react";
import { Route, Routes } from "react-router-dom";
import INFO_Main from "@INFO/INFO_Main";

const INFO = () => {
  console.log("INFO ROUTE");
  return (
    <Routes>
      <Route exact path="/info" Component={INFO_Main} />
    </Routes>
  );
};

export default INFO;
