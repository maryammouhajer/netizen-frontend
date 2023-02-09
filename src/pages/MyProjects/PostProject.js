import React from 'react'
import { FaCloudUploadAlt} from "react-icons/fa"
import Button from 'react-bootstrap/Button';
import { Container } from '../../components/index'
function PostProject() {
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
                                        <textarea type="text" id="describe" name="describe" rows="5" className="form-control md-textarea" style={{  marginBottom:"10px"}}></textarea>



                                    </div>
                                </div>
                            </div>
                            <div className="row">


                                <div className="col-md-12">
                                    <div className="md-form">

                                        <label htmlFor="customFile">Attached  Files </label> 


                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 mt-100">
                                    <div className="md-form"style={{ height: "271px" , padding: "100px"}}>


                                        <div className="mb-4 d-flex justify-content-center" >
                                            <div className="btn btn-secondary btn-rounded">
                                                <label className="form-label text-white m-1" htmlFor="customFile"><FaCloudUploadAlt /></label>
                                                <input type="file" className="form-control d-none" id="customFile" />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="text-center col-12">

                                    <Button className='text-dark' style={{ width: "35%" , marginRight:"50px", borderColor:"#FFEC30" ,backgroundColor:"#fff"}} type='reset'>Cancel</Button>

                                    <Button className='text-dark'  style={{ width: "35%" ,backgroundColor:"#FFEC30",borderColor:"#FFEC30"}} type='submit'>save</Button>


                                </div>
                            </div>
                        </form>



                    </div >




                </div >

            </section >
        </Container >
    )
}

export default PostProject