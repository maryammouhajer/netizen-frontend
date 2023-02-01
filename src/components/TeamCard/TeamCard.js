import React from 'react'
import './TeamCard.css'
import { FaStar } from "react-icons/fa";
import { Image } from 'react-bootstrap';
const TeamCard = (props) => {
    return (

        <div className="teamcard-body  col-md-12 col-sm-12">
            <div className="row">
                <div className="col-2">
                    <Image src={props.image} alt="" className=' rounded img img-rounded img-fluid' width={120} height={120}  />

                </div>
                <div className="col-10">


                    <h2 className="float-left mt-3 mt-md-4">{props.name}</h2>




                    <p>{props.position}</p>
                    <div className="rating text-warning  text-start">
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />


                    </div>
                </div>
            </div>
            <p className='card-text'>{props.description}</p>

        </div>



    )
}

export default TeamCard
