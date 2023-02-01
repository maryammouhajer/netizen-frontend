import React from 'react'
import profile01 from '../../assets/images/profile01.png'
import profile02 from '../../assets/images/profile02.png'
import { TeamCard, Container, Button } from '../../components/index'
function Team() {
  return (
    <>
      <Container>

        <TeamCard
          image={profile01}
          name='Abdallah Badra'
          position='Mobile  Developer'
          description="I'm Abdallah Badra, i have a programming degree from the Lebanese University and currently i'm working in Beirut. I decied to be with AICA for the Netizen's Digital Lab project in order to improve my life, by increasing my monthly income and also to get out of fixed work shell and meet new people who can help me to develop other skills. Choosing the right job and working within a good team help me to achieve my dream which is to establish my own company in the future"
        />

        <TeamCard
          image={profile02}
          name='Hassan Ezzeddine'
          position='Solution Implementation'
          description="I'm Hasan Ezzedine, Solution Implementation at Netizen's Digital Lab under AICA lab. I joined this project with the aim of developing my experiences in the field of programing and working remotely in all areas of programming, i found this project is interesting for me which urges the team members to work responsibly with the aim of its continuity
"          />

        <Button text='Post Your Project' />
      </Container>

    </>
  )
}

export default Team