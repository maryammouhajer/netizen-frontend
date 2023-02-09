import React from 'react'
import { FaUpload } from "react-icons/fa"
import Button from 'react-bootstrap/Button';
import { Container } from '../../components/index'
function ProjectDetail() {
    return (
        <Container>

            <section className="col-md-8 container mb-4">


                <div className="row">


                    <div className="col-md-12 mr-auto">
                        <form id="project-detail" name="project-detail-form" method="POST" className='text-align-center'>


                            <div className="row">


                                <div className="col-md-12">
                                    <div className="md-form mb-0">
                                        <label htmlFor="project-type" >Project Type</label>
                                        <input type="text" id="project-type" name="project-type" className="form-control" required />
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="md-form mb-0">
                                        <label htmlFor="project-title" >Project Title</label>
                                        <input type="text" id="project-title" name="project-title" className="form-control" required />

                                    </div>
                                </div>


                            </div>

                            <div className="row">


                                <div className="col-md-12">

                                    <div className="md-form">
                                        <label htmlFor="describe">Describe your project</label>
                                        <textarea type="text" id="describe" name="describe" rows="5" className="form-control md-textarea" style={{ marginBottom: "10px" }}></textarea>



                                    </div>
                                </div>
                            </div>
                            <div className="row">


                                <div className="col-md-12">
                                    <div className="md-form">

                                        <label htmlFor="customFile">Attached  Files </label> <br />


                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 mt-100">
                                    <div className="md-form" style={{ height: "271px", padding: "100px" }}>


                                        <div className="mb-4 d-flex justify-content-center" >
                                            <div className="btn btn-secondary btn-rounded">
                                                <label className="form-label text-white m-1" htmlFor="customFile"><FaUpload /></label>
                                                <input type="file" className="form-control d-none" id="customFile" />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="text-center">

                                    <Button className='text-dark' type='reset' style={{ width: "50%"  ,backgroundColor:"#FFEC30",borderColor:"#FFEC30"}}>Cancel Project</Button>


                                </div>
                            </div>
                        </form>



                    </div >




                </div >

            </section >
        </Container >
    )
}

export default ProjectDetail