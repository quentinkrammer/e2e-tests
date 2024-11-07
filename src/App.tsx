import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const disabled = useDelayedDisable();

  return (
    <>
      <div
        style={{
          width: "100vw",
          display: "grid",
          placeItems: "center",
        }}
      >
        <h1>Hello :)</h1>
        <input
          disabled={false}
          type="text"
          className="e2e-input"
          style={{ border: disabled ? "2px solid red" : "2px solid grey" }}
        ></input>
      </div>
    </>
  );
}

function useDelayedDisable() {
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisabled(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return disabled;
}

export default App;
