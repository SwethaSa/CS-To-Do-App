import React, { useState } from "react";
import Items from "./Items";
import Header from "./Header";
import Form from "./Form";

export default function Input() {
  let [todo, setTodo] = useState([]);
  return (
    <>
      <Header />
      <Form todo={todo} setTodo={setTodo} />
      <Items items={todo} />
    </>
  );
}
