import React from "react";
import "./App.css";
import College from "./College";
import { colleges } from "./colleges";

function App() {
  return (
    <>
      <div style={{ padding: "2% 0 0 2%" }}>Colleges in North India</div>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {colleges.map((college) => {
          return <College college={college} />;
        })}
      </div>
    </>
  );
}

export default App;
