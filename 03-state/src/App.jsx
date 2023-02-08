import React from "react";
import ButtonGroup from "./components/ButtonGroup/ButtonGroup";
import TodoApp from "./components/TodoApp/TodoApp";
import TodoForm from "./components/TodoForm/TodoForm";
import db from "./db/db.json";

const App = () => {
  // const db2 = [
  //   { id: 11, alt: "11" },
  //   { id: 22, alt: "22" },
  //   { id: 33, alt: "33" },
  // ];
  // document.getElementById("root").style.padding = "40px";
  return (
    <>
      <h1>Todos Application</h1>
      <TodoApp array={db} />
      <ButtonGroup />
      <TodoForm />
      {/* <TodoApp /> */}
      {/* <TodoApp array={db2} /> */}
    </>
  );
};

export default App;
