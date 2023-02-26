import React from 'react'

function Title(props) {
    const {title,description}=props;
  return (
    <div className="text-center">
      <h1>{title}</h1>
        <p>{description}</p>
    </div>
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
Title.defaultProps={
    title:"Title",
    description : "This is a demo description."
}