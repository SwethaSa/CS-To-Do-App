import React, { useState } from "react";
import Items from "./Items";
import Header from "./Header";
import Form from "./Form";

export default function Input() {
  let [todo, setTodo] = useState([]);
  let sortedItem = todo
    .slice()
    .sort((a, b) => Number(a.status) - Number(b.status));

  return (
    <>
      <Header />
      <Form todo={todo} setTodo={setTodo} />
      <Items todo={sortedItem} setTodo={setTodo} />
    </>
  );
}
