import React from 'react'
import { useState } from 'react';
function Buy() {
  const gioHang=[
    { id: 1, name: "Sách", price: 10000 },
    { id: 2, name: "Bút", price: 5000 },
    { id: 3, name: "Vở", price: 7000 },
  ]
  const [todos,setTodos]=useState([]);
    const addTodo=(item)=>{
      setTodos([...todos,item]);
    }
  const tongTien=()=>{
    let tong=0
    todos.map((i)=>{
      tong+=i.price;
    })
    return tong;
  }
  return (
    <>
      <h1>Bai3: Gio Hang</h1>
      <h2>San Pham</h2>
      <ul>
        {gioHang.map((item)=>(
          <li key={item.id} style={{listStyle:"none",marginBottom:"10px"}}>
            {item.name} - {item.price}₫{" "}
            <button onClick={() => addTodo(item)}>Thêm vào giỏ</button>
          </li>
        ))}
      </ul>
      <h2>Gio Hang</h2>
      <ul>
        {(todos.length===0 ? "Khong co san pham nao trong gio hang": 
          todos.map((item)=>(
            <li key={item.id}>
              {item.name} - {item.price}₫{" "}
            </li>
          )))
        }
      </ul>
      <h2>Tong tien:{tongTien()} đ</h2>
    </>
  )
}

export default Buy