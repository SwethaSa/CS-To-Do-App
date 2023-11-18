import React, { useState } from "react";
import styles from "./form.module.css";
export default function Form({ todo, setTodo }) {
  let [input, setInput] = useState("");

  let handleAdd = (e) => {
    if (input === "") {
      alert("Please Enter an Item to Add");
      e.preventDefault();
    } else {
      e.preventDefault();
      setTodo([...todo, input]);
      setInput("");
    }
  };
  return (
    <>
      <form className={styles.formbg} onSubmit={handleAdd}>
        <input
          placeholder="Enter an Item..."
          className={styles.input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          type="text"
          value={input}
        />{" "}
        &nbsp;
        {console.log(todo)}
        <button className={styles.btn} type="submit">
          Add
        </button>
      </form>
    </>
  );
}
