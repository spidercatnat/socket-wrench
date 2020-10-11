import React from "react";
import { Subscriber } from "./Subscriber";

export const subscribe = (Comp, topic) => {
  return (
    <Subscriber topic={topic}>
      <Comp />
    </Subscriber>
  );
};
