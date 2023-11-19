import React, { useState } from "react";
import styles from "./form.module.css";
export default function Form({ todo, setTodo }) {
  let [input, setInput] = useState({ name: "", status: false });

  let handleAdd = (e) => {
    if (input.name === "") {
      alert("Please Enter an Item to Add");
      e.preventDefault();
    } else {
      e.preventDefault();
      setTodo([...todo, input]);
      setInput({ name: "", status: false });
    }
  };
  return (
    <>
      <form className={styles.formbg} onSubmit={handleAdd}>
        <input
          placeholder="Enter an Item..."
          className={styles.input}
          onChange={(e) => {
            setInput({ name: e.target.value, status: false });
          }}
          type="text"
          value={input.name}
        />{" "}
        &nbsp;
        <button className={styles.btn} type="submit">
          Add
        </button>
      </form>
    </>
  );
}
