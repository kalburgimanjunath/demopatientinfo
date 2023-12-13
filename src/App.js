import "./styles.css";
import { useState } from "react";
import { Sidebar, Header, FilterAge } from "./components/index";
import { Patient } from "./pages/index";

export default function App() {
  const [startAge, setStartAge] = useState(60);
  const [endAge, setEndAge] = useState(100);

  return (
    <div className="App">
      <div className="">
        <Sidebar />
        <>
          <Header />
          <Patient title="Patient List" startAge={startAge} endAge={endAge} />
        </>
      </div>
    </div>
  );
}
