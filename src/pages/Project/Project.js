import React from 'react'
import './Project.css'
import project1 from "../../assets/images/project1.png"
import project2 from "../../assets/images/project2.png"
import project3 from "../../assets/images/project3.png"
import project4 from "../../assets/images/project4.png"
import { Container, Button } from '../../components/index'
function Project() {
    return (
        <>
            <Container>
                <div className='project-gallery'>
                    <h2>UI/UX Design</h2>
                    <p>
                        UX design is all about the overall feel of the experience, while UI design is all about how the product's interfaces look and function.
                    </p>
                    <div className='row'>
                        <div className="gallery-item col-md-3 col-sm-6"><img src={project1} alt=' ' /></div>
                        <div className="gallery-item col-md-3 col-sm-6"><img src={project2} alt=' ' /></div>
                        <div className="gallery-item col-md-3 col-sm-6"><img src={project3} alt=' ' /></div>
                        <div className="gallery-item col-md-3 col-sm-6"><img src={project4} alt=' ' /></div>

                    </div>

                    <p className='pt-10'>
                        Project Name: Musicana
                    </p>
                    <p>
                        Description: Music App

                    </p>
                </div>

                <Button  text='Post Your Project' link="../../project"/>
            </Container>
        </>

    )
}

export default Project