// @flow
import React from 'react'
import styled from 'styled-components'
import { Row, Col, Button } from 'reactstrap'
import TypeOut from 'react-typeout'
import { Link } from 'react-router-dom'
import ComparisonTable from '../../components/ComparisonTable/ComparisonTable'
import GrimoireLogo from '../../components/GrimoireLogo/GrimoireLogo'
import { INVITE_URL } from '../../globals'

const Wrapper = styled.div``
const H1Gradient = styled.h1`
  background: linear-gradient(90deg, #f857a6, #ff5858);
  background-clip: text; 
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  min-height: 44px;
`

const H3Gradient = styled.h3`
  background: linear-gradient(90deg, #f857a6, #ff5858);
  background-clip: text; 
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  min-height: 44px;
  margin: 10px 0 0 0;
  padding: 0;
`

const TextBlock = styled.div`
  border: 2px solid #BBB;
  border-radius: 12px;
  background-color: #FFF;
  padding: 5px 8px 5px 8px;
`

const HButtonWrapper = styled.div`
  display: flex;
  * { margin: 5px; }
`
const ImageWrapperWhite = styled.div`
  height: 320px;  
  overflow: hidden;
  border: 2px solid #BBB;
  border-radius: 12px;
  background-color: #FFF;
  * {
    max-height:100%;
    max-height:100%;
    border-radius: 12px;
  }
`

const ImageWrapperGrey = styled.div`
height: 320px;  
overflow: hidden;
border: 2px solid #BBB;
border-radius: 12px;
background-color: #36393E;
* {
  max-height:100%;
  max-height:100%;
  border-radius: 12px;
}
`

const HeaderImageWrapper = styled.div`
  overflow: hidden;
  border: 2px solid #BBB;
  border-radius: 12px;
  background-color: #36393E;  
  * {
    width: 100%;
    border-radius: 12px;
  }
`

class Overview extends React.Component {
  render () {
    return (
      <Wrapper>
        <Row>
          <Col xl={6} lg={6} md={12} sm={12} xs={12} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <GrimoireLogo size={256} style={{ marginTop: '50px', marginBottom: '20px', boxShadow: '0px 0px 10px 0px #f857a6' }} />
            <h1 style={{ marginBottom: '0' }}>Mac's Grimoire</h1>
            <H1Gradient>
              <TypeOut typeSpeed={100} pauseSpeed={1500} words={[
                '',
                'card fetching',
                'price lookups',
                'comprehensive rules',
                'keyword lookups',
                'tournament rules',
                'random draws',
                'infraction procedures'
              ]} />
            </H1Gradient>
            <HButtonWrapper>
              <a href={INVITE_URL}><Button>Add to Discord</Button></a>
            </HButtonWrapper>
          </Col>
          <Col xl={6} lg={6} className={'hidden-md-down'}>
            <HeaderImageWrapper>
              <video autoPlay loop>
                <source src={require('./Video.mp4')} type='video/mp4' />
              </video>
            </HeaderImageWrapper>
          </Col>
        </Row>

        <hr />

        <Row>
          <Col md={12}>
            <h5 style={{textAlign: 'center', margin: '10px 0 10px 0'}}><b>Mac's Grimoire</b> brings many <b>Magic the Gathering</b> related tools straight into your <b>Discord</b> server.</h5>
          </Col>
        </Row>

        <hr />

        <Row style={{paddingTop: '30px'}}>
          <Col lg='4' md={12} sm={12} xs={12}>
            <ImageWrapperWhite>
              <img src='/img/screenshots/CardLookup.png' alt='Card Lookup' />
            </ImageWrapperWhite>
          </Col>
          <Col lg='8' md={12} sm={12} xs={12}>
            <H3Gradient>Card Lookups</H3Gradient>
            <TextBlock>
            Grimoire can fetch general <b>card information</b> in a useful condensed format.<br />
            Card symbol emoji work <b>right out of the box</b>!<br />
            You can get more specific information by utilizing commands such as <b><Link to='/reference/oracle'>!oracle</Link></b>, <b><Link to='/reference/legality'>!legality</Link></b>, <b><Link to='/reference/prints'>!prints</Link></b> or <b><Link to='/reference/standard'>!rulings</Link></b>.
            </TextBlock>
            <H3Gradient>Art Fetching</H3Gradient>
            <TextBlock>
            In addition to fetching card general card information, Grimoire allows you to fetch the <b>full image</b> for a card.<br />
            If available, a <b>high-quality</b> version is fetched from <a href='https://scryfall.com'>Scryfall</a> instead of the default <a href='https://gatherer.wizards.com/'>Gatherer</a> image.
            </TextBlock>
          </Col>
        </Row>

        <Row style={{paddingTop: '30px'}}>
          <Col lg={4} md={12} sm={12} xs={12} className='push-lg-8'>
            <ImageWrapperGrey>
              <img src='/img/screenshots/Pricing.png' alt='Pricing' />
            </ImageWrapperGrey>
          </Col>
          <Col lg={8} md={12} sm={12} xs={12} className='pull-lg-4'>
            <H3Gradient>Price Lookups</H3Gradient>
            <TextBlock>
            Quickly look up <b>price data</b> for singles with Grimoire. Currently, Grimoire is able to look up card prices with the following <b>marketplaces</b>:
              <ul>
                <li><a href='https://tcgplayer.com'>TCGPlayer.com</a></li>
                <li><a href='https://magiccardmarket.eu'>MagicCardMarket.eu</a></li>
              </ul>
              Additionally, Grimoire shows average card price spread over multiple marketplaces via Scryfall, including <b>MTG Online</b>.<br />
            You will be given various price statistics per marketplace, with a link to the store page so you can quickly make a purchase.
            </TextBlock>
          </Col>
        </Row>

        <Row style={{paddingTop: '30px'}}>
          <Col lg={4} md={12} sm={12} xs={12}>
            <ImageWrapperWhite>
              <img src='/img/screenshots/RuleLookup.png' alt='Rule Lookup' />
            </ImageWrapperWhite>
          </Col>
          <Col lg={8} md={12} sm={12} xs={12}>
            <H3Gradient>What were the rules again?</H3Gradient>
            <TextBlock>
            Grimoire can assist with various <b>game rules</b>.
            There is built-in access to the official:<ul><li><b>Comprehensive Rules</b></li><li><b>Tournament Rules</b></li><li><b>Infraction Procedure Guide</b></li></ul>
             as well as <b>definitions</b> for every <b>keyword</b>, <b>format</b> and more!
            </TextBlock>
            <H3Gradient>Uhm.. did you mean?</H3Gradient>
            <TextBlock>
            In case you don't know exactly what you're looking for, Grimoire can help you out. Every rule command is outfitted to suggest alternatives in case you didn't quite hit the mark. Just try and you'll see!
            </TextBlock>
          </Col>
        </Row>

        <Row style={{paddingTop: '30px'}}>
          <Col md={4} sm={12} xs={12} className='push-lg-8'>
            <ImageWrapperGrey>
              <img src='/img/screenshots/NonEnglish.png' alt='Non English' />
            </ImageWrapperGrey>
          </Col>
          <Col md={8} sm={12} xs={12} className='pull-lg-4'>
            <H3Gradient>Non-English Card Support</H3Gradient>
            <TextBlock>
          Do you happen to be interested in card prints from other countries? So are we! You'll be glad to know that Grimoire fully supports <b>Non-English</b> card names:
              <ul>
                <li>Every command supports Non-English input for card names</li>
                <li><b><Link to='/reference/art'>!art</Link></b> will show Non-English card art if available</li>
                <li>Use <b>!names</b> to find out about all other prints of a card from other countries</li>
              </ul>
            </TextBlock>
          </Col>
        </Row>

        <Row style={{paddingTop: '30px'}}>
          <Col md={4} sm={12} xs={12}>
            <ImageWrapperWhite>
              <img src='/img/screenshots/Tokens.png' alt='Tokens' />
            </ImageWrapperWhite>
            <H3Gradient>Find any token!</H3Gradient>
            <TextBlock>
          You can easily pull art for tokens using the <b><Link to='/reference/token'>!token</Link></b> command.<br />
          As tokens with the same name can differ, Grimoire allows you to pull up the <b>exact</b> token you were looking for.
            </TextBlock>
          </Col>
          <Col md={4} sm={12} xs={12}>
            <ImageWrapperGrey>
              <img src='/img/screenshots/Random.png' alt='Random Cards' />
            </ImageWrapperGrey>
            <H3Gradient>Random Cards</H3Gradient>
            <TextBlock>
              Pull up a random card based on any property using the <b><Link to='/reference/random'>!random</Link></b> command.<br /><br />
              For example, want to pull a random mythic legendary creature from the latest commander set?<br />
              <span style={{width: '100%', textAlign: 'center', display: 'block', margin: 'none', padding: 'none'}}><code>!random C17 mythic legendary creature</code></span>
              will do the trick!<br />
              You can base your search on types, subtypes, supertypes, rarities, sets and more!
            </TextBlock>
          </Col>
          <Col md={4} sm={12} xs={12}>
            <ImageWrapperWhite>
              <img src='/img/screenshots/Standard.png' alt="What's In Standard" />
            </ImageWrapperWhite>
            <H3Gradient>What's In Standard?</H3Gradient>
            <TextBlock>
              Want to know for how much longer your standard deck will be legal, before it rotates out?<br />
              Grimoire allows you to pull up the current <b>Standard Format</b> with exact dates, so you know exactly what you can play.
            </TextBlock>
          </Col>
        </Row>

        <hr />

        <Row style={{paddingTop: '30px'}}>
          <Col md={12}>
            <h2 style={{textAlign: 'center'}}>Feature Comparison</h2>
          </Col>
        </Row>

        <Row style={{paddingTop: '30px'}}>
          <Col md={12}>
            <ComparisonTable />
          </Col>
        </Row>

      </Wrapper>
    )
  }
}

export default Overview
