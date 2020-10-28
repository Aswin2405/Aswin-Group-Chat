import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./styles.css";

export default function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
      </div>
    </div>
  );
}
