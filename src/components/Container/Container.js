import React from 'react'

const Container = (props) => {
  return (
    
      <div className='container'>
        <div className='row col-12 m-auto'>
          {props.children}

        </div>
      </div>
    
  )
}

export default Container