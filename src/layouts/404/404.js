// @Flow
import React from 'react'
import styled from 'styled-components'
import GrimoireLogo from '../../components/GrimoireLogo/GrimoireLogo'
import { Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

const H1Gradient = styled.h1`
  background: linear-gradient(90deg, #f857a6, #ff5858);
  background-clip: text; 
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  min-height: 44px;
`

const Page404 = () => {
  return (
    <Row>
      <Col md={12} style={{justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
        <GrimoireLogo size={256} style={{
          margin: '30px 0 30px 0',
          boxShadow: '0px 0px 10px 0px #f857a6'
        }} />
        <H1Gradient>404 - Not Found :(</H1Gradient>
        <h3>Click <Link to='/'>here</Link> to go back to the homepage</h3>
      </Col>
    </Row>
  )
}

export default Page404
