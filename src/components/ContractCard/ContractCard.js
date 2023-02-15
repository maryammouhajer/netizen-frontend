import React from 'react'
import Card from 'react-bootstrap/Card';
import { FaSquare, FaCircle } from "react-icons/fa";
import { BsTriangleFill } from "react-icons/bs";

const ContractCard = (props) => {
    return (
        <div className='col-md-6  '>
            <Card className='mb-4 m-4'  >

                <Card.Header className='text-center text-white' style={{ backgroundColor: "#00AEEF", width: '100%' , fontSize:"24px" , fontWeight:"700"}}>{props.title}
                    <Card.Text>
                        <FaSquare style={{ color: "#DD1176" }} /><FaCircle style={{ color: "#fff" }} /><BsTriangleFill style={{ color: "#FFEC30" }} />
                    </Card.Text>
                </Card.Header>

                <Card.Body style={{ backgroundColor:"#FFFBD8" , borderRadius:"0px 0px 20px 20px"}}>
                    Project Type
                    <p>{props.type}</p>

                    Project Title
                    <p>{props.projecttitle}</p>

                    Description
                    <p>{props.description}</p>



                </Card.Body>
            </Card>

        </div>
    )
}

export default ContractCard