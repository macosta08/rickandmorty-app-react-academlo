import React from "react";
import { LocationContainer } from "./components/locationContainer/LocationContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <LocationContainer />
      <ToastContainer />
    </div>
  );
}

export default App;
