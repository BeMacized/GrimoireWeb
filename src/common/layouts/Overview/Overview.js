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
          <Col className='animated fadeInLeft' xl={6} lg={6} md={12} sm={12} xs={12} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
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
              <Link to='/dashboard'><Button>Dashboard</Button></Link>
            </HButtonWrapper>
          </Col>
          <Col className='animated fadeInRight hidden-md-down' xl={6} lg={6}>
            <HeaderImageWrapper>
              <video autoPlay loop>
                <source src={require('./Video.mp4')} type='video/mp4' />
              </video>
            </HeaderImageWrapper>
          </Col>
        </Row>

        <Row className='animated fadeIn'>
          <Col md={12}>
            <hr />
            <h5 style={{textAlign: 'center', margin: '10px 0 10px 0'}}><b>Mac's Grimoire</b> brings many <b>Magic the Gathering</b> related tools straight into your <b>Discord</b> server.</h5>
            <hr />
          </Col>
        </Row>

        <Row style={{paddingTop: '30px'}} className='animated fadeInUp'>
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
            You can get more specific information by utilizing commands such as <b><Link to='/reference/oracle'>g!oracle</Link></b>, <b><Link to='/reference/legality'>g!legality</Link></b>, <b><Link to='/reference/prints'>g!prints</Link></b> or <b><Link to='/reference/standard'>g!rulings</Link></b>.<br />
            Most commands support the entire <b><a href='https://scryfall.com/docs/reference'>Scryfall Syntax</a></b> for finding the right card!
            </TextBlock>
            <H3Gradient>Art Fetching</H3Gradient>
            <TextBlock>
            In addition to fetching card general card information, Grimoire allows you to fetch the <b>full image</b> for a card.<br />
            If available, a <b>high-quality</b> version is fetched from <a href='https://scryfall.com'>Scryfall</a> instead of the default <a href='https://gatherer.wizards.com/'>Gatherer</a> image.
            </TextBlock>
          </Col>
        </Row>

        <Row style={{paddingTop: '30px'}} className='animated fadeInUp'>
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
                <li><a href='https://tcgplayer.com'>TCGPlayer.com</a> (Paper)</li>
                <li><a href='https://magiccardmarket.eu'>MagicCardMarket.eu</a> (Paper)</li>
                <li><a href='https://mtggoldfish.com'>MtgGoldfish.com</a> (Paper & MTGO)</li>
              </ul>
              Additionally, Grimoire shows average card price spread over multiple marketplaces via Scryfall, including <b>MTG Online</b>.<br />
            You will be given various price statistics per marketplace, with a link to the store page so you can quickly make a purchase.<br />
            You can select different presentation modes for pricing via the <Link to='/dashboard'>Dashboard</Link>.
            </TextBlock>
          </Col>
        </Row>

        <div className='animated fadeIn'>

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
            There is built-in access to the official<ul><li><b>Comprehensive Rules</b></li><li><b>Tournament Rules</b></li><li><b>Infraction Procedure Guide</b></li></ul>
             as well as <b>definitions</b> for every <b>keyword</b>, <b>format</b> and more!
              </TextBlock>
              <H3Gradient>Uhm... did you mean this?</H3Gradient>
              <TextBlock>
                In case you don't know exactly what you're looking for, Grimoire can help you out. All rules are browsable and Grimoire will automatically pick the closest match for any card you query. The <b><a href='https://scryfall.com/docs/reference'>Scryfall Syntax</a></b> can always help you out as well!
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
                Do you use Non-English Magic cards a lot? You'll be glad to know that Grimoire fully supports <b>Non-English</b> cards:
                <ul>
                  <li><b>g!oracle</b> and <b>g!card</b> will show the Non-English card text if available</li>
                  <li>Every command supports Non-English input for card names</li>
                  <li><b><Link to='/reference/art'>g!art</Link></b> will show Non-English card art if available</li>
                  <li>Use <b>g!names</b> to find out about all other prints of a card from other countries</li>
                </ul>
              </TextBlock>
            </Col>
          </Row>

          <Row style={{paddingTop: '30px'}}>
            <Col lg={4} md={12} sm={12} xs={12}>
              <ImageWrapperWhite style={{background: "url('/img/screenshots/Dashboard.png')", backgroundSize: 'cover', backgroundPosition: 'center center'}} />
            </Col>
            <Col lg={8} md={12} sm={12} xs={12}>
              <H3Gradient>Fully Configurable</H3Gradient>
              <TextBlock>
                Grimoire can be fully configured via the <Link to='/dashboard'>Dashboard</Link>.<br />
                Here you can configure many options for your Discord server, such as:<br />
                <ul>
                  <li>The card properties to show</li>
                  <li>The command prefix to respond to </li>
                  <li>What pricing providers to show</li>
                  <li>The services to link to</li>
                  <li>And more...</li>
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
          You can easily pull art for tokens using the <b><Link to='/reference/token'>g!token</Link></b> command.<br />
          As tokens with the same name can differ, Grimoire allows you to pull up the <b>exact</b> token you were looking for.
              </TextBlock>
            </Col>
            <Col md={4} sm={12} xs={12}>
              <ImageWrapperGrey>
                <img src='/img/screenshots/Banlist.png' alt='Banlists' />
              </ImageWrapperGrey>
              <H3Gradient>Is it banned?</H3Gradient>
              <TextBlock>
                You can quickly pull up the relevant ban list for any format using the <b><Link to='/reference/banlist'>g!banlist</Link></b> command.<br />
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

          <Row style={{paddingTop: '30px'}}>
            <Col md={6} sm={12} xs={12}>
              <ImageWrapperWhite>
                <img src='/img/screenshots/Locator.png' alt='Wizards Locator' />
              </ImageWrapperWhite>
              <H3Gradient>Game Store Locator</H3Gradient>
              <TextBlock>
          You can easily find game stores and events in your area using the <b><Link to='/reference/locator'>g!locator</Link></b> command.<br />
          Results are pulled directly from the <a href='http://locator.wizards.com/'>Wizards Locator</a>, and are presented using a useful map!
              </TextBlock>
            </Col>
            <Col md={6} sm={12} xs={12}>
              <ImageWrapperGrey>
                <img src='/img/screenshots/Random.png' alt='Random Cards' />
              </ImageWrapperGrey>
              <H3Gradient>Random Cards</H3Gradient>
              <TextBlock>
              Pull up a random card based on any property using the <b><Link to='/reference/random'>g!random</Link></b> command.<br /><br />
              For example, want to pull a random mythic legendary creature from the latest commander set? <code>g!random C17 mythic legendary creature</code> will do the trick!<br />
              You can base your search on types, subtypes, supertypes, rarities, sets and so forth.
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
        </div>
      </Wrapper>
    )
  }
}

export default Overview
