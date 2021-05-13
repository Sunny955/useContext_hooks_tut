import React from "react";
import ComponentB from "./ComponentB";

const ComponentA = () => {
  return (
    <div>
      <h1>Hello Entered in Comp A</h1>
      <ComponentB />
    </div>
  );
};

export default ComponentA;
