import React, { useState, useEffect } from "react";
import styles from "./items.module.css";

export default function Items({ todo, setTodo }) {
  let [img, setImg] = useState(false);
  let completed = todo.filter((completed) => completed.status).length;

  let pending = todo.length - completed;

  let handleDelete = (val) => {
    let ans = prompt("Why do you delete this task??", "wrong");

    if (ans === "wrong") {
      setTodo(todo.filter((item) => item !== val));
    } else if (ans === "") {
      alert("Please give a valid reason to delete");
    }
  };

  let handleComplete = (name, index) => {
    let task = prompt(
      "Have you completed the task? Yes or No?",
      "Yes"
    ).toLowerCase();
    if (task === "yes") {
      let newItem = todo.map((value) =>
        value.name === name ? { ...value, status: !value.status } : value
      );
      setTodo(newItem);
    } else {
      alert("Please Complete the Task first");
    }
  };

  useEffect(() => {
    if (completed !== 0 && completed === todo.length) {
      setImg(true);
      const timer = setTimeout(() => {
        setImg(false);
        alert(
          `Yayyy!!! You've done everything you wanted to....I appreciate you`
        );
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [completed, todo.length]);

  return (
    <>
      <div className={styles.status}>
        <h2>Completed:{completed}</h2>
        <h2>Pending:{pending}</h2>
      </div>
      {todo.map((val, index) => (
        <div className={styles.textbg}>
          <h3
            id="item"
            onClick={() => {
              handleComplete(val.name, index);
            }}
            className={`${styles.text} ${val.status ? styles.completed : ""}`}
            key={index}
          >
            {val.name}
          </h3>
          <button onClick={() => handleDelete(val)} className={styles.btn}>
            Delete
          </button>
        </div>
      ))}
      {img && <img className={styles.img} />}
    </>
  );
}
