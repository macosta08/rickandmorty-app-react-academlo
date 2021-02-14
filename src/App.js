import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { LocationContainer } from "./components/locationContainer/LocationContainer";

function App() {
  return (
    <div>
      <LocationContainer />

      <ToastContainer />
    </div>
  );
}

export default App;
