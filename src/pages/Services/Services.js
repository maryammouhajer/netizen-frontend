import React from 'react'
import ImageCard from '../../components/ImageCard/ImageCard'
import { Container , Button } from '../../components/index'
import './Services.css'
function Services() {
  return (
    <>
      <Container>
        
        <ImageCard  title='UI/UX Design'/>
        <ImageCard title='Web Development' />
        <ImageCard title='Mobile Development' />
        <ImageCard title='Digital Marketing' />
        <ImageCard title='QA-QC' />
        <ImageCard title='Solution Implementation' />
        <ImageCard title='Solution Architect' />
        <Button  text='Post Your Project' link="../../project"/>
      </Container>
     
    </>
  )
}

export default Services