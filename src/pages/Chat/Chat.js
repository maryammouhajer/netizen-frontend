import React from 'react'
import { Container } from '../../components/index'
import './Chat.css'
import profile0 from '../../assets/images/avatar.png'
import { FaPaperclip, FaSmile, FaRegPaperPlane } from "react-icons/fa";
function Chat() {
  return (
    <Container>



      <div className="card" id="chat">

        <div className="card-body" data-mdb-perfect-scrollbar="true" style={{ position: "relative", height: "400px" }}>
          <div className="divider d-flex align-items-center mb-4">
            <p className="text-center mx-3 mb-0" style={{ color: "#a2aab7" }}>Mon, Dec 05</p>
          </div>
          <div className="d-flex flex-row justify-content-start">
            <img src={profile0}
              alt="avatar 1" style={{ width: "45px", height: "100%" }} />
            <div>
              <p className="small ms-3 mb-3 rounded-3 text-muted">Netizen’s Digital Lab  </p>
              <p className="small p-2 ms-3 mb-1 rounded-3" style={{ backgroundcolor: "#f5f6f7" }}>Diam nonummy nibh euismod tincidunt ut laoreet dolore.</p>


            </div>
          </div>


          <div className="d-flex flex-row justify-content-end mb-4 pt-1">
            <div>
              <p className="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">Me</p>
              <p className="small p-2 me-3 mb-1 rounded-3 ">Diam nonummy nibh euismod tincidunt ut laoreet dolore.</p>


            </div>
            <img src={profile0}
              alt="avatar 1" style={{ width: "45px", height: "100%" }} className=' rounded img img-rounded img-fluid' />
          </div>



        </div>
        <div className="card-footer text-muted d-flex justify-content-start align-items-center p-3">

          <input type="text" className="form-control form-control-lg" id="FormControlInput"
            placeholder="Type message" />
          <a className="ms-1 text-muted" href="#!"><FaPaperclip /></a>
          <a className="ms-3 text-muted" href="#!"><FaSmile /></a>
          <a className="ms-3" href="#!"><FaRegPaperPlane /></a>
        </div>
      </div>




    </Container>
  )
}

export default Chat