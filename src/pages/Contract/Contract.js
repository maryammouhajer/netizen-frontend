import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { FaSquare, FaCircle } from "react-icons/fa";
import { BsTriangleFill } from "react-icons/bs";
function Contract() {
  return (
    <div className='container'>
      <Accordion defaultActiveKey="0" className='col-md-6 mb-20' >
        <Accordion.Item eventKey="0">
          <Accordion.Header className='text-center'>Project Info </Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                Project Type
                <p>UI/UX Design</p>
              </li>
              <li>
                Project Title
                <p>Calm</p>
              </li>
              <li>
                Description
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                </p>
              </li>

            </ul>
          </Accordion.Body>
        </Accordion.Item>

      </Accordion></div>
  )
}

export default Contract