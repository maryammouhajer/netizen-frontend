import React from 'react'
import './Support.css'
import { Button, Container } from '../../components/index'
function Support() {
  return (
    <>

      <Container>

        <section className="col-md-8 container mb-4">


          <h2 className="h1-responsive font-weight-bold text-center my-4" style={{ color: "#DD1176" }}>Contact us</h2>

          <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
            a matter of hours to help you.</p>

          <div className="row">


            <div className="col-md-12 mr-auto">
              <form id="contact-form" name="contact-form" action="mail.php" method="POST" className='text-align-center'>


                <div className="row">


                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <label htmlFor="name" className="" placeholder='enter Your name'>Your name</label>
                      <input type="text" id="name" name="name" className="form-control" placeholder='enter Your name' />

                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <label htmlFor="email" className="">Your email</label>
                      <input type="text" id="email" name="email" className="form-control" placeholder='enter Your email' />

                    </div>
                  </div>


                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <label htmlFor="subject" className="">Subject</label>
                      <input type="text" id="subject" name="subject" className="form-control" />

                    </div>
                  </div>
                </div>

                <div className="row">


                  <div className="col-md-12">

                    <div className="md-form">
                      <label htmlFor="message">Your message</label>
                      <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>

                    </div>

                  </div>
                </div>


              </form>

              <div className="text-center text-md-left">
                <a className="btn "><Button text='Submit' /></a>
              </div>
              <div className="status"></div>
            </div>




          </div>

        </section>
      </Container>
    </>
  )
}

export default Support