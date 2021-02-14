import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { LocationContainer } from "./components/locationContainer/LocationContainer";

function App() {
  return (
    <div>
      <div>
        <LocationContainer />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
