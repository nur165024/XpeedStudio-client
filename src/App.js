/**
 * Title: ALl route handle
 * description: all route handle
 * name: Nure Alam
 * date: 15/2/2022
 */

import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./User/Home";
import UserForm from "./User/UserForm";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<UserForm />} />
      </Routes>
    </>
  );
}

export default App;
