// @Flow
import React from 'react'
import { Link } from 'react-router-dom'
import { Table, UncontrolledTooltip, Button } from 'reactstrap'
import FontAwesome from 'react-fontawesome'
import PropTypes from 'prop-types'
import { INVITE_URL } from '../../globals'
import styles from './style.js'

const SupportedIcon = ({id}) => (<FontAwesome id={id} name='check' />)
SupportedIcon.propTypes = { id: PropTypes.string }
const HalfSupportedIcon = ({id}) => (<FontAwesome id={id} name='exclamation-circle' />)
HalfSupportedIcon.propTypes = { id: PropTypes.string }
const NotSupportedIcon = ({id}) => (<FontAwesome id={id} style={{color: '#ccc'}} name='times' />)
NotSupportedIcon.propTypes = { id: PropTypes.string }

class ComparisonTable extends React.Component {
  render () {
    return (
      <div className='comparisonTable'>
        <style jsx global>{styles}</style>
        <Table size='sm' striped responsive className='table'>
          <thead>
            <tr>
              <td />
              <td>
                <img src='/img/logos/GrimoireLogo.png' alt='Icon' />
                <br />
              Grimoire
              </td>
              <td>
                <img src='/img/logos/ScryfallLogo.png' alt='Icon' />
                <br />
              Scryfall Bot
              </td>
              <td>
                <img src='/img/logos/JudgebotLogo.png' alt='Icon' />
                <br />
              JudgeBot
              </td>
              <td>
                <img src='/img/logos/MtgioLogo.png' alt='Icon' />
                <br />
              MagicTheGathering.io Bot
              </td>
            </tr>
          </thead>
          <tbody>
            <tr className='categoryRow'>
              <td>Basic Functionality</td>
              <td />
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <td>Card Overviews <Link to='/reference/card'><FontAwesome name='book' /></Link></td>
              <td><SupportedIcon /></td>
              <td><SupportedIcon /></td>
              <td><SupportedIcon /></td>
              <td><NotSupportedIcon /></td>
            </tr>
            <tr>
              <td>Card Images <Link to='/reference/art'><FontAwesome name='book' /></Link></td>
              <UncontrolledTooltip placement='top' target='comp0CardImages'>Only HQ If Available</UncontrolledTooltip>
              <UncontrolledTooltip placement='top' target='comp1CardImages'>Only HQ If Available</UncontrolledTooltip>
              <UncontrolledTooltip placement='top' target='comp2CardImages'>Only HQ If Available</UncontrolledTooltip>
              <td id='comp0CardImages'>HQ</td>
              <td id='comp1CardImages'>HQ</td>
              <td id='comp2CardImages'>HQ</td>
              <td><SupportedIcon /></td>
            </tr>
            <tr>
              <td>Token Images <Link to='/reference/token'><FontAwesome name='book' /></Link></td>
              <UncontrolledTooltip placement='top' target='comp0TokenImages'>Only HQ If Available</UncontrolledTooltip>
              <UncontrolledTooltip placement='top' target='comp1TokenImages'>Cannot fetch specific tokens<br />Only HQ If Available</UncontrolledTooltip>
              <UncontrolledTooltip placement='top' target='comp2TokenImages'>Cannot fetch specific tokens<br />Only HQ If Available</UncontrolledTooltip>
              <td id='comp0TokenImages'>HQ</td>
              <td id='comp1TokenImages'>HQ*</td>
              <td id='comp2TokenImages'>HQ*</td>
              <td><NotSupportedIcon /></td>
            </tr>
            <tr>
              <td>Card Legality <Link to='/reference/legality'><FontAwesome name='book' /></Link></td>
              <td><SupportedIcon /></td>
              <td><SupportedIcon /></td>
              <td><SupportedIcon /></td>
              <td><NotSupportedIcon /></td>
            </tr>
            <tr>
              <td>Supports Spoiler Cards</td>
              <td><SupportedIcon /></td>
              <td><SupportedIcon /></td>
              <td><SupportedIcon /></td>
              <td><NotSupportedIcon /></td>
            </tr>
            <tr>
              <td>Card Symbols</td>
              <td><SupportedIcon /></td>
              <td><SupportedIcon /></td>
              <td><SupportedIcon /></td>
              <td><NotSupportedIcon /></td>
            </tr>
            <tr>
              <td>Standard Rotation Fetching <Link to='/reference/standard'><FontAwesome name='book' /></Link></td>
              <td><SupportedIcon /></td>
              <td><NotSupportedIcon /></td>
              <td><SupportedIcon /></td>
              <td><NotSupportedIcon /></td>
            </tr>
            <tr>
              <td>Wizards Locator Lookups <Link to='/reference/locator'><FontAwesome name='book' /></Link></td>
              <td><SupportedIcon /></td>
              <td><NotSupportedIcon /></td>
              <td><SupportedIcon /></td>
              <td><NotSupportedIcon /></td>
            </tr>
            <tr>
              <td>Scryfall Syntax Support <a href='https://scryfall.com/docs/reference'><FontAwesome name='book' /></a></td>
              <td><SupportedIcon /></td>
              <td>
                <UncontrolledTooltip placement='top' target='comp1scryfallSyntax'>Only for exact matches.</UncontrolledTooltip>
                <HalfSupportedIcon id='comp1scryfallSyntax' />*
              </td>
              <td><SupportedIcon /></td>
              <td><NotSupportedIcon /></td>
            </tr>
            <tr>
              <td>Random Cards <Link to='/reference/random'><FontAwesome name='book' /></Link></td>
              <td><SupportedIcon /></td>
              <td><NotSupportedIcon /></td>
              <td>
                <UncontrolledTooltip placement='top' target='comp2random'>Via Hangman Game only</UncontrolledTooltip>
                <HalfSupportedIcon id='comp2random' />*
              </td>
              <td><NotSupportedIcon /></td>
            </tr>
            <tr>
              <td>List Printings <Link to='/reference/prints'><FontAwesome name='book' /></Link></td>
              <td><SupportedIcon /></td>
              <td><NotSupportedIcon /></td>
              <td><NotSupportedIcon /></td>
              <td><NotSupportedIcon /></td>
            </tr>
            <tr>
              <td>Supports Non-English Card Names, Text &amp; Art</td>
              <td><SupportedIcon /></td>
              <td><NotSupportedIcon /></td>
              <td><NotSupportedIcon /></td>
              <td><NotSupportedIcon /></td>
            </tr>
            <tr>
              <UncontrolledTooltip placement='top' target='compFXLander'>Opt-in functionality. Enable for your guild via the Dashboard!</UncontrolledTooltip>
              <td>Canlander &amp; Auslander Support <a href='#' id='compFXLander'><FontAwesome name='question-circle' /></a></td>
              <td><SupportedIcon /></td>
              <td><NotSupportedIcon /></td>
              <td><NotSupportedIcon /></td>
              <td><NotSupportedIcon /></td>
            </tr>
            <tr className='categoryRow'>
              <td>Card Pricing <Link to='/reference/pricing'><FontAwesome name='book' /></Link></td>
              <td />
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <td>Lowest Known Pricing (Via Scryfall)</td>
              <td>
                <UncontrolledTooltip placement='top' target='comp0lowPricing'>Via Scryfall</UncontrolledTooltip>
                <SupportedIcon id='comp0lowPricing' />
              </td>
              <td><SupportedIcon /></td>
              <td><SupportedIcon /></td>
              <td><NotSupportedIcon /></td>
            </tr>
            <tr>
              <td>MagicCardMarket.eu</td>
              <td><SupportedIcon /></td>
              <td>
                <UncontrolledTooltip placement='top' target='comp1mcmPricing'>Only shows average.<br />Only shown when MagicCardMarket's average is the lowest in EUR on Scryfall</UncontrolledTooltip>
                <HalfSupportedIcon id='comp1mcmPricing' />*
              </td>
              <td>
                <UncontrolledTooltip placement='top' target='comp2mcmPricing'>Only shows average.<br />Only shown when MagicCardMarket's average is the lowest in EUR on Scryfall</UncontrolledTooltip>
                <HalfSupportedIcon id='comp2mcmPricing' />*
              </td>
              <td><NotSupportedIcon /></td>
            </tr>
            <tr>
              <td>TCGPlayer.com</td>
              <td><SupportedIcon /></td>
              <td>
                <UncontrolledTooltip placement='top' target='comp1tcgPricing'>Only shows average.<br />Only shown when TCGPlayer's average is the lowest in USD on Scryfall</UncontrolledTooltip>
                <HalfSupportedIcon id='comp1tcgPricing' />*
              </td>
              <td>
                <UncontrolledTooltip placement='top' target='comp2tcgPricing'>Only shows average.<br />Only shown when TCGPlayer's average is the lowest in USD on Scryfall</UncontrolledTooltip>
                <HalfSupportedIcon id='comp2tcgPricing' />*
              </td>
              <td><NotSupportedIcon /></td>
            </tr>
            <tr>
              <td>MTGGoldfish.com</td>
              <td><SupportedIcon /></td>
              <td><NotSupportedIcon /></td>
              <td><NotSupportedIcon /></td>
              <td><NotSupportedIcon /></td>
            </tr>
            <tr>
              <td>
                <UncontrolledTooltip placement='top' target='comp0currencyConv'>
                  Force currency conversion via a setting in the Dashboard
                </UncontrolledTooltip>
                Currency Conversion ($, €, ¥, £)
                <a href='#' > <FontAwesome name='question-circle' id='comp0currencyConv' /></a>
              </td>
              <td><SupportedIcon /></td>
              <td><NotSupportedIcon /></td>
              <td><NotSupportedIcon /></td>
              <td><NotSupportedIcon /></td>
            </tr>
            <tr className='categoryRow'>
              <td>Rulings</td>
              <td />
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <td>Card Rulings <Link to='/reference/rulings'><FontAwesome name='book' /></Link></td>
              <td><SupportedIcon /></td>
              <td><SupportedIcon /></td>
              <td><SupportedIcon /></td>
              <td><NotSupportedIcon /></td>
            </tr>
            <tr>
              <UncontrolledTooltip placement='top' target='comp2compRules'>Not Browsable</UncontrolledTooltip>
              <td>Comprehensive Rules <Link to='/reference/comprules'><FontAwesome name='book' /></Link></td>
              <td><SupportedIcon /></td>
              <td><NotSupportedIcon /></td>
              <td><HalfSupportedIcon id='comp2compRules' />*</td>
              <td><NotSupportedIcon /></td>
            </tr>
            <tr>
              <td>Tournament Rules <Link to='/reference/tournamentrules'><FontAwesome name='book' /></Link></td>
              <td><SupportedIcon /></td>
              <td><NotSupportedIcon /></td>
              <td><SupportedIcon /></td>
              <td><NotSupportedIcon /></td>
            </tr>
            <tr>
              <td>Infraction Procedures <Link to='/reference/infractionprocedure'><FontAwesome name='book' /></Link></td>
              <td><SupportedIcon /></td>
              <td><NotSupportedIcon /></td>
              <td><SupportedIcon /></td>
              <td><NotSupportedIcon /></td>
            </tr>
            <tr>
              <td>Keyword Definitions <Link to='/reference/define'><FontAwesome name='book' /></Link></td>
              <td><SupportedIcon /></td>
              <td><NotSupportedIcon /></td>
              <td><SupportedIcon /></td>
              <td><NotSupportedIcon /></td>
            </tr>
            <tr>
              <td>Fetch Banlists <Link to='/reference/banlist'><FontAwesome name='book' /></Link></td>
              <td><SupportedIcon /></td>
              <td><NotSupportedIcon /></td>
              <td><NotSupportedIcon /></td>
              <td><NotSupportedIcon /></td>
            </tr>
            <tr className='categoryRow'>
              <td>Configuration</td>
              <td />
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <td>Configurable</td>
              <td><SupportedIcon /></td>
              <td><NotSupportedIcon /></td>
              <td><NotSupportedIcon /></td>
              <td><NotSupportedIcon /></td>
            </tr>
            <tr>
              <td>Web Dashboard</td>
              <td><SupportedIcon /></td>
              <td><NotSupportedIcon /></td>
              <td><NotSupportedIcon /></td>
              <td><NotSupportedIcon /></td>
            </tr>
            <tr className='categoryRow'>
              <td>Miscellaneous Features</td>
              <td />
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <td>Self-hostable <Link to='/about'><FontAwesome name='book' /></Link></td>
              <td><SupportedIcon /></td>
              <td><NotSupportedIcon /></td>
              <td><SupportedIcon /></td>
              <td><SupportedIcon /></td>
            </tr>
            <tr>
              <td>Publicly Hosted Instance Available</td>
              <td><SupportedIcon /></td>
              <td><SupportedIcon /></td>
              <td><SupportedIcon /></td>
              <td><NotSupportedIcon /></td>
            </tr>
            <tr>
              <td>Open-source</td>
              <td><SupportedIcon /></td>
              <td><NotSupportedIcon /></td>
              <td><SupportedIcon /></td>
              <td><SupportedIcon /></td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td />
              <td><a href={INVITE_URL}><Button>Add to Discord</Button></a></td>
              <td><a href='https://scryfall.com/bots'><Button>Visit Site</Button></a></td>
              <td><a href='https://github.com/bra1n/judgebot'><Button>Visit Site</Button></a></td>
              <td><a href='https://github.com/MagicTheGathering/mtg-discord-bot'><Button>Visit Site</Button></a></td>
            </tr>
          </tfoot>
        </Table>
        <p style={{textAlign: 'center'}}><b>Last checked: 2017-08-24. </b>If you believe any of this data is incorrect, please notify the <Link to="/about">developer</Link>.</p>
      </div>
    )
  }
}

// ComparisonTable.propTypes = {
//   size: PropTypes.number,
//   style: PropTypes.object
// }
export default ComparisonTable
