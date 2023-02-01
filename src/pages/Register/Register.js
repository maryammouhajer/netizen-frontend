import React from 'react'
import './Register.css';
import { FaSquare, FaCircle } from "react-icons/fa";
import { BsTriangleFill } from "react-icons/bs";
import { Button, Container } from '../../components'

function Register() {
    return (
        <Container>
            <div className="login-wrapper col-md-4 col-sm-6 ">
                <h1 className='align-item-center'>Continue to sign up </h1>
                <p><FaSquare style={{color:"#DD1176"}}/><FaCircle style={{color:"#00AEEF"}}/><BsTriangleFill style={{color:"#FFEC30"}} /></p>
                
                <Button text='continue with Google'/>
            </div>
        </Container>
    )
}

export default Register