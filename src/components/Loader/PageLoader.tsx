import React from 'react'
import { Spinner } from 'components/Spinner'
import Container from '../Layout/Container'

const PageLoader: React.FC = () => {
  return (
    <Container 
      className="flex items-center justify-center pt-4 pb-4"
      style={{ height: "calc(100vh - 64px)" }}
    >
      <Spinner />
    </Container>
  )
}

export default PageLoader
