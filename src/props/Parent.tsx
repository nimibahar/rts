import React from "react";
import { ChildAsFC } from "./Child";

export const Parent = () => {
  return (
    <ChildAsFC color="red" onClick={() => console.log("button clicked")}>
      sidjlij
    </ChildAsFC>
  );
};
