import React from 'react'
import { Container, ProjectAccordion } from '../../components/index'
function MyProjects() {
  return (
    <>
      
      <Container>

        <ProjectAccordion 
          header='Project 1'
          type=' Project type :UI/UX Design '
          title=' Project title: Calm'
          Submission=' Submission date: Mobile App'
          status=' Project status: Done'
        />
        <ProjectAccordion
          header='Project 2'
          type=' Project type
          :Mobile Development   '
          title=' Project title: Calm'
          Submission=' Submission date: Mobile App'
          status=' Project status: Ongoing '
        />
        <ProjectAccordion
          header='Project 3'
          type=' Project type
          :Mobile Development   '
          title=' Project title: Calm'
          Submission=' Submission date: Mobile App'
          status=' Project status: Ongoing '
        />
        <ProjectAccordion
       
          header='Project 4'
          type=' Project type :UI/UX Design '
          title=' Project title: Calm'
          Submission=' Submission date: Mobile App'
          status=' Project status: Done'
        />
      </Container>

    </>
  )
}

export default MyProjects