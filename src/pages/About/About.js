
import mission from '../../assets/images/mission.png'
import vision from '../../assets/images/vision.png'
import values from '../../assets/images/values.png'
import { Card, Container, Button } from '../../components/index'
import './About.css'
export default function About() {
  return (
    <>


      <Container>
         <Card className='primary'
            heading='Mission'
            image={mission}
            soustitle='Support the strategy of job creation by incentivizing youth to provide digital services fundamentally to create a contextual platform.'

          />

          <Card
            heading='Vision'
            image={vision}
            soustitle=
            'Revitalize the Lebanese economy by job creation and disseminating digital services.'

          />
          <Card

            image={values}
            heading=' Values'
            soustitle='
        · Accountability
        · Affordability
        · Authenticity
        · Commitment
        · Integrity
        · Transparency
        · Flexibility
        · Empowerment
        · Professionalism
        · Sustainability'
          />

<Button text='Post Your Project' />
      </Container>
      
    </>
  )
}