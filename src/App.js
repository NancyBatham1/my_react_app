import Header from "./components/Header";
import { AddTodo } from "./components/AddTodo";
import Footer from "./components/Footer";
import Todos from "./components/Todos";
import React, { useState, useEffect } from "react";

function App() {
  let initTodo;

  if (localStorage.getItem("todolist") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todolist"));
  }

  const onDelete = (mytodo) => {
    setTodos(
      todolist.filter((e) => {
        return e !== mytodo;
      })
    );
  };

  const addTodo = (title, desc) => {
    let sno ;
//console.log(todolist.length);
    if (todolist.length === 0) {
    //  console.log('i m 0');
      sno = 1;
    } else {
    //  console.log('i m not 0');
      //console.log(todolist);
      sno = todolist[todolist.length - 1].sno + 1;
    }

    const mytodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    //console.log(mytodo);
    setTodos([...todolist, mytodo]);
    alert("Todo added successfully");
    localStorage.setItem("todolist", JSON.stringify(todolist));
  
  };

  let [todolist, setTodos] = useState(initTodo);

  // useEffect(() => {
  //   localStorage.setItem("todolist", JSON.stringify(todolist));
  // }, [todolist]);
  return (
    <>
      <Header logo="MyReact" />
      <AddTodo addTodo={addTodo} />
      <Todos todo={todolist} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
