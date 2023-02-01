import React from 'react'
import './Container.css'
const Container = (props) => {
  return (
    <>
      <div className='container'>
        <div className='row col-12'>
          {props.children}

        </div>
      </div>
    </>
  )
}

export default Container