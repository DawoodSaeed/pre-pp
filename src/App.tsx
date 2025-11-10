import { useState } from "react";
import "./App.css";
import AutoCounter from "./components/AutoCcounter";

function App() {
  const [showCounter, setShowCounter] = useState(true);
  return (
    <>
      {showCounter && <AutoCounter />}
      <p
        onClick={() => {
          setShowCounter(!showCounter);
        }}
      >
        show counter
      </p>
    </>
  );
}

export default App;
