/**
 * Title: ALl route handle
 * description: all route handle
 * name: Nure Alam
 * date: 15/2/2022
 */

import React from "react";
import { Route, Routes } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Home from "./User/Home";
import UserForm from "./User/UserForm";

function App() {
  // toaster message setting
  const handleNotify = () => {
    toast.success("User File Uploaded successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      {/* toaster message */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/create"
          element={<UserForm handleNotify={handleNotify} />}
        />
      </Routes>
    </>
  );
}

export default App;
