// @Flow
import React from 'react'
import PropTypes from 'prop-types'
import { NavLink as RRNavLink } from 'react-router-dom'
import { Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap'
import styled from 'styled-components'
import MediaQuery from 'react-responsive'
import FontAwesome from 'react-fontawesome'
import GrimoireLogo from '../GrimoireLogo/GrimoireLogo'
import { INVITE_URL } from '../../globals'

const Wrapper = styled.div`
  min-height:80px;
  z-index: 100;
`

const RContainer = (props) =>
  <MediaQuery query='(max-width: 576px)'>
    {(matches) =>
      <Container style={matches ? {
        maxWidth: '100% !important',
        margin: '0 !important'
      } : {}}>
        {props.children}
      </Container>
    }
  </MediaQuery>

RContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
}

class PrimaryNav extends React.Component {
  constructor (props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
    this.state = {
      isOpen: false,
      barTranslucent: false
    }
  }

  toggle () {
    this.setState(Object.assign({}, this.state, {
      isOpen: !this.state.isOpen
    }))
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll () {
    let scrollTop = event.srcElement.body.scrollTop
    if ((scrollTop > 40) !== this.state.barTranslucent) {
      this.setState(Object.assign({}, this.state, {
        barTranslucent: !this.state.barTranslucent
      }))
    }
  }

  render () {
    const navBarStyle = Object.assign({
      backgroundColor: '#f3f3f3',
      transition: 'background-color 0.5s ease'
    }, !this.state.barTranslucent ? {} : {
      backgroundColor: 'rgba(255, 255, 255, 0.9)'
    })

    const brandStyle = {
      background: 'linear-gradient(90deg, #f857a6, #ff5858)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    }

    const navItems = this.props.items.map(item => (
      <NavItem key={item.text}>
        {
          item.external
            ? <NavLink className='navLink' href={item.link}>
              <MediaQuery query='screen and (min-width:768px), screen and (max-width:576px)'>{!item.icon || <FontAwesome name={item.icon} style={{paddingRight: '7px'}} />}</MediaQuery>
              {item.text}
            </NavLink>
            : <NavLink className='navLink' tag={RRNavLink} to={item.link}>
              <MediaQuery query='screen and (min-width:768px), screen and (max-width:576px)'>{!item.icon || <FontAwesome name={item.icon} style={{paddingRight: '7px'}} />}</MediaQuery>
              {item.text}
            </NavLink>
        }
      </NavItem>
    ))

    return (
      <Wrapper className='animated fadeInDown'>
        <Navbar fixed='top' light toggleable style={navBarStyle}>
          <RContainer>
            <NavbarToggler right onClick={this.toggle} />
            <NavbarBrand style={brandStyle}>
              <GrimoireLogo size={42} style={{
                boxShadow: '0px 0px 5px 0px #f857a6'
              }} /> | Grimoire
            </NavbarBrand>
            <MediaQuery query='(min-width:992px)'>
              <a href={INVITE_URL}><Button>Add to Discord</Button></a>
            </MediaQuery>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className='ml-auto' navbar>
                <style jsx global>{`
                  .navLink {
                    color: #555 !important;
                    padding: 10px 15px 10px 15px !important;
                  }
                  .navLink:hover {
                    color: #FFF !important;
                    background: linear-gradient(90deg, #f857a6, #ff5858);
                  }
                `}</style>
                {navItems}
              </Nav>
            </Collapse>
          </RContainer>
        </Navbar>
      </Wrapper>
    )
  }
}

PrimaryNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    external: PropTypes.bool,
    icon: PropTypes.string
  })).isRequired
}

export default PrimaryNav
