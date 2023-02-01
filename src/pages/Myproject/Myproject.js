import React from 'react'
import { Container , Accordion , Button } from '../../components/index'
function Myproject() {
  return (
    <>
    <Container>

      <Accordion body='- Project type
                    :UI/UX Design
                    - Project title: Calm
                    - Submission date: Mobile App
                    - Project status: Done'
      />
      <Button text='Post Your Project' />
    </Container>

    </>
  )
}

export default Myproject