// @Flow
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Container } from 'reactstrap'
import PrimaryNav from '../PrimaryNav/PrimaryNav'
import Footer from '../Footer/Footer'
import './style.global.css'
import { SUPPORT_INVITE_URL } from '../../globals'

const Wrapper = styled.div`
  min-height:100%;
  display: flex;
  flex-direction: column;
`
const Content = styled.div`
  flex: 1;  
`

class App extends React.Component {
  render () {
    return (
      <Wrapper>
        <PrimaryNav items={[
          { text: 'Overview', link: '/', icon: 'rocket' },
          { text: 'Command Reference', link: '/reference', icon: 'book' },
          { text: 'About & FAQ', link: '/about', icon: 'question-circle-o' },
          { text: 'Support Server', link: SUPPORT_INVITE_URL, 'external': true, icon: 'comments' }
          // { text: 'Dashboard', link: '/dashboard', icon: 'gear' }
        ]} />
        <Content>
          <Container>
            <hr />
            {this.props.children}
          </Container>
        </Content>
        <Footer />
      </Wrapper>
    )
  }
}

App.propTypes = {
  children: PropTypes.element
}

export default App
