import React, { useState } from "react";

export const AddTodo = (props) => {
  const [title, setTitle]= useState('');
  const [desc, setDesc]= useState('');
  const submit=(e)=>{
     e.preventDefault() ;
     if(!title || !desc){
      alert('Title or Description should not be blank');
      return;
     }
     props.addTodo(title,desc);
     setDesc('');
     setTitle('');
  
  }
  
  return (
    <div className='container'>
        <h3>Add New ToDo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e)=>{setTitle(e.target.value)}}
            className="form-control"
            id="title"
            aria-describedby="toDotitle"
          />
          <div id="toDotitle" className="form-text">
           Write your Todo title here.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            value={desc}
            onChange={(e)=>{setDesc(e.target.value)}}
            className="form-control"
            id="description"
          />
        </div>
       
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};
