import React from 'react'

export  const TodoItem = ({mytodo, onDelete}) => {
  
  return (
    <>
      <h4>{mytodo.sno}</h4>
      <h4>{mytodo.title}</h4>
      <h4>{mytodo.desc}</h4>
      <button className='btn btn-sm btn-danger' onClick={()=>{onDelete(mytodo)}}>Delete</button>
    </>
  )
}
