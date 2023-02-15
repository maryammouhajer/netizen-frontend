import React from 'react'
import Card from 'react-bootstrap/Card';
import { FaSquare, FaCircle } from "react-icons/fa";
import { BsTriangleFill } from "react-icons/bs";
import './RelatedContract.css'
const RelatedContract = (props) => {
    return (
        <div className='col-md-6 '>
            <Card className='mb-4 m-4'  >

                <Card.Header className='text-center' style={{ backgroundColor: "#FFEC30", width: '100%' , fontSize:"24px" , fontWeight:"700"}}>{props.title}
                    <Card.Text>
                        <FaSquare style={{ color: "#DD1176" }} /><FaCircle style={{ color: "#00AEEF" }} /><BsTriangleFill style={{ color: "#FFF" }} />
                    </Card.Text>
                </Card.Header>

                <Card.Body style={{ backgroundColor: "#FFFBD8", borderRadius: "0px 0px 20px 20px" }}>
                    <div className='' style={{ width: '100%' }}>
                        <button className='contract-button'  text='contract 1'>contract 1</button>
                        <button className='contract-button'  text='contract 1'>contract 1</button>
                        <button className='contract-button' text='contract 1'>contract 1</button>

                    </div>
                </Card.Body>
            </Card>



        </div>
    )
}

export default RelatedContract