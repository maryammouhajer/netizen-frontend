import React from 'react'

const Accordion = (props) => {
    return (
        <Accordion defaultActiveKey="0" className='col-md-6'>
            <Accordion.Item eventKey="0">
                <Accordion.Header>{props.header}</Accordion.Header>
                <Accordion.Body>
                    {props.body}
                </Accordion.Body>
            </Accordion.Item>
            
        </Accordion>
    )
}

export default Accordion