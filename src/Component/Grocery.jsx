import GroceryInput from "./GroceryInput"
import GroceryList from "./GroceryList"
import {useState} from "react"

export default Grocery = () => {
  const [list, setList] = useState([])
  const addingItem = (title, e) =>{
    const grocery = {
      title: title,
      id: list.length+1
    };
    setList([...list, grocery]);
  };

  const handleDelete = (id) => {
    setList(list.filter((list)=> list.id !== id))
  };
  return (
    <div>
      <h1>Add Grocery Items</h1>
      <div style={{display:"flex", width:"250px", margin:"auto"}}>
        <GroceryInput onTextCreate={addingItem}/>
      </div>
      {list.map((list)=>{
        return (
          <GroceryList id={list.id} title={list.title} handleDelete = {handleDelete}/>  
        )
      })
      }
    </div>
  )
}