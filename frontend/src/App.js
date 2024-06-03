import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Layout from "./components/layout";
import FormCard from "./components/form";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Layout />} />
        <Route exact path="/register" element={<FormCard />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
