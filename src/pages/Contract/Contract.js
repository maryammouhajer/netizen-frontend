import React from 'react'

import { Container, ContractCard, RelatedContract } from '../../components/index';

function Contract() {
  return (
    <>
      <Container>

        <ContractCard
          title='Project Info'
          type='UI/UX Design'
          projecttitle="Calm"
          description=
          "Lorem ipsum dolor sit amet, consectetuer adipiscing edivt, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna adivquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut adivquip ex ea commodo consequat."
        />


        <RelatedContract
          title='Related Contracts'

        />





       
      </Container>

    </>
  )
}

export default Contract