import React from 'react'

export default function Todos(props) {
  return (
    <div className='container'>
        <h1>Todos List</h1>
        <h3> {props.todolist}</h3>
    </div>
  

  )
}
