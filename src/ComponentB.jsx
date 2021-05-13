import React, { useContext } from "react";
import ComponentC from "./ComponentC";
import { userContext, channelContext } from "./App";

const ComponentB = () => {
  const user = useContext(userContext);
  const channel = useContext(channelContext);
  return (
    <div>
      User Context-{user} Channel context- {channel}
      <ComponentC />
    </div>
  );
};

export default ComponentB;
