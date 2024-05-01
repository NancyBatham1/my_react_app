import Header from './components/Header';
import {AddTodo} from './components/AddTodo';
import Footer from './components/Footer';
import Todos from './components/Todos';
import React,{useState} from 'react';

function App() {

  const onDelete=(mytodo)=>{
    setTodos(todolist.filter((e)=>{
     return e!==mytodo
    }))
  }
  const addTodo =(title,desc)=>{
   let sno;
   if(todolist.length===0){
    sno = 1;
   }else{sno = todolist[todolist.length-1].sno + 1;}
   
   const mytodo={
    sno: sno,
    title: title,
    desc: desc
   }

   setTodos([...todolist, mytodo]);
  alert('Todo added successfully');
 

  }
  
  
  let [todolist, setTodos] = useState([
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
      <AddTodo addTodo={addTodo} />
      <Todos todo={todolist} onDelete={onDelete} />
      <Footer />
    </> 
  );
}

export default App;
