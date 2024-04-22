import Header from './components/Header';
//import {TodoItem} from './components/TodoItem';
import Footer from './components/Footer';
import Todos from './components/Todos';
import React,{useState} from 'react';

function App() {
  const onDelete=(mytodo)=>{
    setTodos(todolist.filter((e)=>{
     return e!==mytodo
    }))
  }
  let [todolist, setTodos]=useState([
    {
      sno:1,
      title:'title1',
      desc:'desc1',

    },
    {
      sno:2,
      title:'title2',
      desc:'desc2',

    }, 
    {
      sno:3,
      title:'title3',
      desc:'desc3',

    },
    
  ]);

  return (
    <>
      <Header logo='MyReact'  />
      <Todos todo={todolist} onDelete={onDelete} />
      <Footer />
    </> 
  );
}

export default App;
