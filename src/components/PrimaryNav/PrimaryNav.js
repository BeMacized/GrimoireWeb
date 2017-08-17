// @Flow
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap'
import styled from 'styled-components'
import classNames from 'classnames'
import MediaQuery from 'react-responsive'
import FontAwesome from 'react-fontawesome'
import GrimoireLogo from '../GrimoireLogo/GrimoireLogo'
import styles from './style.css'
import { INVITE_URL } from '../../globals'

const Wrapper = styled.div`
  min-height:80px;
`

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
    const navItems = this.props.items.map(item => (
      <NavItem key={item.text}>
        {
          item.external
            ? <NavLink className={styles.navButton} href={item.link}>
              <MediaQuery query='screen and (min-width:768px), screen and (max-width:576px)'>{!item.icon || <FontAwesome name={item.icon} style={{paddingRight: '7px'}} />}</MediaQuery>
              {item.text}
            </NavLink>
            : <NavLink className={styles.navButton} tag={Link} to={item.link}>
              <MediaQuery query='screen and (min-width:768px), screen and (max-width:576px)'>{!item.icon || <FontAwesome name={item.icon} style={{paddingRight: '7px'}} />}</MediaQuery>
              {item.text}
            </NavLink>
        }
      </NavItem>
    ))

    return (
      <Wrapper>
        <Navbar className={classNames(styles.bar, this.state.barTranslucent ? styles.barTranslucent : null)} fixed='top' light toggleable>
          <Container className={styles.container}>
            <NavbarToggler right onClick={this.toggle} />
            <NavbarBrand className={styles.brand}>
              <Link to='/'>
                <GrimoireLogo size={42} /> | Grimoire
              </Link>
            </NavbarBrand>
            <MediaQuery query='(min-width:992px)'>
              <Link href={INVITE_URL}><Button>Add to Discord</Button></Link>
            </MediaQuery>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className='ml-auto' navbar>
                {navItems}
              </Nav>
            </Collapse>
          </Container>
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
