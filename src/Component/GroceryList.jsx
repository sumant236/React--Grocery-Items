export default GroceryList = ({id, title, handleDelete}) =>{
  return (
    <div style={{display:"flex", justifyContent:"space-between", width:"300px", margin:"20px auto"}}>
      <span style={{marginTop:"2.5px"}}>{`${id} : ${title}`}</span>
      <button style={{color: "white", border: "none", borderRadius:"5px", background:"red", padding:"5px 10px", marginLeft:"10px"}} onClick={() => handleDelete(id)}>X</button>
    </div>
  )
}