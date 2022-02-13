import React from "react";
import {useState} from "react"

export default GroceryInput = ({onTextCreate}) => {
  const [text, setText] = useState("");
  const handleClick = () => {
    onTextCreate(text)
  }
  return (
    <div>
      <input style={{marginTop:"2.5px"}} placeholder="Add Something" type="text" onChange={(e)=>setText(e.target.value)} value={text}></input>
      <button style={{marginLeft: "10px", border: "none", background: "skyblue", borderRadius: "5px", padding:"5px"}} onClick={handleClick}>Add Item</button>
    </div>
  )
}
