import React from 'react'
import Card from 'react-bootstrap/Card';
import { FaSquare, FaCircle } from "react-icons/fa";
import { BsTriangleFill } from "react-icons/bs";
import './ImageCard.css'
const ImageCard = (props) => {
    return (

        <Card className="imagecard text-white   text-center" >

            <Card.ImgOverlay className='align-items-center'>
                <Card.Title className='title'><a href=''>{props.title}</a></Card.Title>
                <Card.Text >
                    {props.text}
                </Card.Text>
                <Card.Text><p><FaSquare style={{ color: "#fff" }} /><FaCircle style={{ color: "#00AEEF" }} /><BsTriangleFill style={{ color: "#FFEC30" }} /></p>
                </Card.Text>
            </Card.ImgOverlay>
        </Card>
    )
}

export default ImageCard