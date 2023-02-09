import React from 'react'
import './Button.css'
const Button = (props) => {
  return (
    <div className='text-center btn'>
      <a href={props.link} type='button' className=' align-items-center  button post-button col-md-4'>
        {props.text}
      </a>
    </div>
  )
}

export default Button