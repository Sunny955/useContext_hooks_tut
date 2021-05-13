import React from "react";
import "./styles.css";
import ComponentA from "./ComponentA";

export const userContext = React.createContext();
export const channelContext = React.createContext();

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <userContext.Provider value={"Amiya"}>
        <channelContext.Provider value={"Coding Addict"}>
          <ComponentA />
        </channelContext.Provider>
      </userContext.Provider>
    </div>
  );
}
