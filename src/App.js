import "./styles.css";
import { useState } from "react";
import { Sidebar, Header, FilterAge } from "./components/index";
import { Patient } from "./pages/index";

export default function App() {
  return (
    <div className="App">
      <div className="">
        <Sidebar />
        <>
          <Header />
          <Patient title="Patient List" />
        </>
      </div>
    </div>
  );
}
