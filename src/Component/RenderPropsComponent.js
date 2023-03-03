import React from 'react'

function RenderPropsComponent(props) {
  return (
    <div>
      {props.render()}
    </div>
  )
}

export default RenderPropsComponent
