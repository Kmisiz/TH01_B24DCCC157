import React from 'react'
import { useState } from 'react';
function Todo() {
  const [todos,setTodos]=useState([]);
    const [input,setInput]=useState("");
    const addTodo=()=>{
      if (input.trim()==="") return;
      setTodos([...todos,input]);
      setInput("");
    }
    const deleteTodo=(index)=>{
      setTodos(todos.filter((item,i)=> i!==index));
    }
    console.log({todos});
  return (
    <>
    <h1>Bai1: To-Do List</h1>
      <input className="input" placeholder="Nhập danh sách cần làm" value={input} type="text" onChange={e=> setInput(e.target.value)}></input>
      <button type="submit" onClick={addTodo}>Thêm</button>
      <ul>
        {
          todos.map((todo,index)=>(
            <li key={index}>
              {todo} <button onClick={()=> deleteTodo(index)}>Xoá</button>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default Todo