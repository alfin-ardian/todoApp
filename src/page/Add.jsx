import React from "react";
import EmptyImage from "../assets/todo-empty-state.svg";

function Add() {
  return (
    <div className="flex justify-center mt-10">
      <img src={EmptyImage} alt="My Image" />
    </div>
  );
}

export default Add;
