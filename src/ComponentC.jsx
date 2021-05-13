import React from "react";
import { userContext, channelContext } from "../src/App";
const ComponentC = () => {
  return (
    <div>
      <h1>Hello Entered in Comp C</h1>
      <userContext.Consumer>
        {(user) => {
          return (
            <channelContext.Consumer>
              {(channel) => {
                return (
                  <div>
                    User Context value is {user} Channel is{channel}
                  </div>
                );
              }}
            </channelContext.Consumer>
          );
        }}
      </userContext.Consumer>
    </div>
  );
};

export default ComponentC;
