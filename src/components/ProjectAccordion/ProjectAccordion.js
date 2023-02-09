import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import './ProjectAccordion.css'
const ProjectAccordion = (props) => {
    return (
        <Accordion defaultActiveKey="0" className='col-md-6 mb-20' >
            <Accordion.Item eventKey="0">
                <Accordion.Header>{props.header}</Accordion.Header>
                <Accordion.Body>
                    <ul>
                        <li>
                            {props.type}
                        </li>
                        <li>
                            {props.title}
                        </li>
                        <li>
                            {props.Submission}
                        </li>
                        <li>
                            {props.status}
                        </li>
                    </ul>
                </Accordion.Body>
            </Accordion.Item>

        </Accordion>

    )
}

export default ProjectAccordion