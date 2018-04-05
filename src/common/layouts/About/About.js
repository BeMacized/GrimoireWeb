// @Flow
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Row, Col, Card, CardBlock, CardTitle, CardText } from 'reactstrap'
import FontAwesome from 'react-fontawesome'
import { GITHUB_MAIN_REPO, GITHUB_WEB_REPO, SUPPORT_INVITE_URL } from '../../globals'

const Avatar = styled.div`
    box-shadow: 0px 0px 10px 0px #f857a6;  
    background-color: #f857a6;
    border-radius: 100%;
    border: 2px solid #f857a6;
    width: 68px;
    height: 68px;
    overflow: hidden;
    * {
        width: 64px;
        height: 64px;
        transition: opacity 0.25s ease;
    }
    *:hover {
        opacity: 0.8;        
    }
`

const PeopleCategoryDev = styled.div`
    height: 32px;
    background: linear-gradient(to right, #f857a6, #ff5858);;
    color: #FFF;
    font-weight: bold;
    text-align: center;
    border-radius: 15px;
    padding-top: 3px;
`

const PeopleCategoryFriends = styled.div`
    height: 32px;
    background: linear-gradient(to right, #43cea2, #185a9d);
    color: #FFF;
    font-weight: bold;
    text-align: center;
    border-radius: 15px;
    padding-top: 3px;
`

const Person = (props) => (<Col lg={props.columns || 12} md={12} sm={12} xs={12} style={{
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  paddingTop: '20px',
  textAlign: 'center'
}}>
  <Avatar>
    <a href={props.url}><img src={props.icon} alt={props.name} /></a>
  </Avatar>
  <a href={props.url}><h4 style={{paddingTop: '8px'}}>{props.name}</h4></a>
  <h6>{props.role}</h6>
</Col>)

Person.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.any.isRequired,
  role: PropTypes.string.isRequired,
  columns: PropTypes.string,
  url: PropTypes.string
}

class About extends React.Component {
  render () {
    return (
      <div>
        <Row>
          <Col md={12}>
            <h2>About Mac's Grimoire</h2>
            <hr />
            <p>
                Mac's Grimoire is a chat bot for <a href='https://discordapp.com/'>Discord</a> servers.
                When added to a server, it provides its members with several tools related to the trading card game <a href='https://magic.wizards.com/'>"Magic The Gathering"</a> by <a href='https://wizards.com/'>Wizards of the Coast</a>.
                Grimoire was initially made for private use at a specific Discord server: "Magic & Chill". Grimoire is still partnered with this server.
                If you're interested in joining us over there, feel free to join via <a href='https://discord.gg/vqsFzgJ'>this link</a>.
                Currently, Grimoire is being developed by a single developer, <a href='https://bemacized.net/'>@BeMacized</a>, in his spare time.
              <br />
              <br />
                Grimoire has been heavily inspired by other MTG Discord bots, such as <a href='https://github.com/bra1n/judgebot'>JudgeBot</a>, <a href='https://scryfall.com/bots'>The Scryfall Bot</a> and <a href='https://github.com/MagicTheGathering/mtg-discord-bot'>MagicTheGathering.io's Bot</a>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <hr />
            <h3 style={{textAlign: 'center'}}><FontAwesome name='users' /> Notable People</h3>
          </Col>
        </Row>
        <Row>
          <Col lg={4} md={6} sm={12} xs={12} className='offset-lg-2'>
            <Card>
              <CardBlock>
                <Row>
                  <Col md={12}>
                    <PeopleCategoryDev>Developer</PeopleCategoryDev>
                  </Col>
                </Row>
                <Row>
                  <Person icon='/img/avatars/BeMacized.gif' name='BeMacized' role='Main Developer' url='https://bemacized.net/' />
                </Row>
              </CardBlock>
            </Card>
          </Col>
          <Col lg={4} md={6} sm={12} xs={12}>
            <Card>
              <CardBlock>
                <Row>
                  <Col md={12}>
                    <PeopleCategoryFriends>Friends</PeopleCategoryFriends>
                  </Col>
                </Row>
                <Row>
                  <Person icon='/img/avatars/LightRod.png' name='LightRod' role='MTG Expert' columns='6' />
                  <Person icon='/img/avatars/MagicAndChill.png' name='Magic & Chill' role='Supporting Community' columns='6' url='https://discord.gg/vqsFzgJ' />
                </Row>
              </CardBlock>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <hr />
            <h3 style={{textAlign: 'center'}}><FontAwesome name='handshake-o' /> Contributing</h3>
            <p style={{textAlign: 'center'}}>Contributors are always welcome! There are several ways you can contribute to this project:</p>
          </Col>
        </Row>
        <Row>
          <Col lg={6} md={12} sm={12} xs={12}>
            <Card>
              <CardBlock>
                <CardTitle><FontAwesome name='code' /> Development</CardTitle>
                <CardText>
                Development contributions are very much appreciated. If you think you have a cool feature you can add to Grimoire, or have a bugfix you would like to submit, feel free to submit a pull request to one of the git repositories below:
                </CardText>
                <ul>
                  <li><a href={GITHUB_MAIN_REPO}>Grimoire Main Repository</a></li>
                  <li><a href={GITHUB_WEB_REPO}>Grimoire Website & Dashboard</a></li>
                  <li><a href='https://github.com/BeMacized/MTG-Marketplace-Set-Dictionary'>MTG Marketplace Set Dictionary</a></li>
                  <br />
                </ul>
                <CardText>
                    For any questions regarding what technologies are used, please read the FAQ below.
                </CardText>
              </CardBlock>
            </Card>
          </Col>
          <Col lg={6} md={12} sm={12} xs={12}>
            <Card>
              <CardBlock>
                <CardTitle><FontAwesome name='heart' /> Donate</CardTitle>
                <CardText>
                    Any donations for this project are spent on funding the monthly recurring server costs first, with development coffee coming in second. <br />
                    If you would like to support this project via a donation, I accept donations via <a href='https://paypal.me/BeMacized'>PayPal</a>.
                </CardText>
                <CardText>
                  The monthly running cost of Grimoire is €8.34.
                </CardText>
              </CardBlock>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <hr />
            <h3 style={{textAlign: 'center'}}><FontAwesome name='question-circle' /> FAQ</h3>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Card>
              <CardBlock>
                <CardTitle><FontAwesome name='question-circle' /> What language and Discord library has Grimoire been written with?</CardTitle>
                <CardText>
                    Grimoire is written in Java, with <a href='https://github.com/DV8FromTheWorld/JDA'>JDA</a> as the Discord library.<br />
                    The website is written with React.
                </CardText>
              </CardBlock>
              <CardBlock>
                <CardTitle><FontAwesome name='question-circle' /> I found a bug! What now?</CardTitle>
                <CardText>
                  Please join the <a href={SUPPORT_INVITE_URL}>Support Server</a> and post your issue.
                </CardText>
              </CardBlock>
              <CardBlock>
                <CardTitle><FontAwesome name='question-circle' /> Where can I find the source code?</CardTitle>
                <CardText>
                Right on <a href={GITHUB_MAIN_REPO}>GitHub</a>. The source code for the website can be found <a href={GITHUB_WEB_REPO}>here</a>.
                </CardText>
              </CardBlock>
              <CardBlock>
                <CardTitle><FontAwesome name='question-circle' /> It's not working!</CardTitle>
                <CardText>
                  Please verify that the command you typed is actually correct. If you're absolutely sure, feel free to drop by in the <a href={SUPPORT_INVITE_URL}>Support Server</a> to get some help.
                </CardText>
              </CardBlock>
              <CardBlock>
                <CardTitle><FontAwesome name='question-circle' /> How can I host an instance of this bot by myself?</CardTitle>
                <CardText>
                    Instructions for selfhosting the bot are coming soon! In the meanwhile you can take a look at the <a href={GITHUB_MAIN_REPO}>GitHub Repository.</a> to see if you can figure out something for yourself.
                </CardText>
              </CardBlock>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default About
