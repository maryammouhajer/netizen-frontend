import React from 'react'
import { Card, Container, Button } from '../../components/index'
import creative from '../../assets/images/creative.png'
import innovative from '../../assets/images/innovative.png'
import qualitative from '../../assets/images/qualitative.png'
function Home() {
  return (
    <>

      <Container>
        <Card 
          image={creative}
          title='Creative'
          soustitle='"Design creates culture. Culture shapes qualitative. qualitative determine the future."'
          signature='Robert L. Peters'
        />
        <Card image={innovative}
          title='Innovative'
          soustitle='“There are 360 degrees, so why stick to one?”'
          signature='ZAHA HADID'
        />
        <Card image={qualitative}
          title='Qualitative'
          soustitle='“Design is not just what it looks like
        and feels like. Design is how it works.”'
          signature='STEVE JOBS'
        />




        <Button text='Post Your Project' link="../../postproject" />

      </Container>
    </>
  )
}

export default Home