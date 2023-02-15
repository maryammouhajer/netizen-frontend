import React from 'react'
const Card = (props) => {
  return (


    <div className="card-item col-md-4 " >
      <h2 className='text-center' >
        {props.heading}
      </h2>
      <div className='text-center ' >
        <img
          className='netizen-card-img '
          src={props.image}
          alt=""

        />
      </div>
      <h2 className='text-center' >
        {props.title}
      </h2>
      <p className='text-center' style={{ color: "black" }}>
        {props.soustitle}
      </p>
      <h6 className='text-center'>{props.signature}</h6>

    </div>
  )
}

export default Card