import React from 'react'
import { useState } from 'react'
function Color() {
  const [color,setColor]=useState("#fff");
  const addColor=(color)=>{
    setColor(color);
  }
  return (
    <div>
      <h1>Bai2: Color Picker</h1>
      <button onClick={()=>addColor("red")}>Đỏ</button>
      <button onClick={()=>addColor("green")}>Xanh</button>
      <button onClick={()=>addColor("yellow")}>Vàng</button>
      <div style={
        {
          width: "200px",
          height:"200px",
          border:"0.5px solid #000",
          backgroundColor:color,
        }
      }></div>
    </div>
  )
}

export default Color