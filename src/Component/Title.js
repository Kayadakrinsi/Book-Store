import React from 'react'
import List from '../Component/List'

function Title({obj,key}){
  
  return(
  <div><h2>I am {obj.title} desc is {obj.discription}</h2></div>
  )
}

// function Title(props) {
// return (
//   <div className="text-center">
//     <h1>{props.title}</h1>
//       <p>{props.description}</p>
//   </div>
// )
// }

export default Title
// Title.defaultProps={
//     title:"Title",
//     description : "This is a demo description."
// }