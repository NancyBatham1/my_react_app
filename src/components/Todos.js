import React from 'react'
import {TodoItem} from './TodoItem'

export default function Todos(props) {
  return (
    <div className='container'>
        <h1>Todos List</h1>
        { props.todo.length===0?'No list':
          props.todo.map((mytodo1)=>{
                return <TodoItem mytodo={mytodo1} key={mytodo1.sno} onDelete={props.onDelete}/>
              })          
        }       
        
    </div>
  

  )
}
