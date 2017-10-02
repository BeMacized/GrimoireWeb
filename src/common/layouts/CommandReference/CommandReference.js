// @Flow
import React from 'react'
import PropTypes from 'prop-types'
// import styled from 'styled-components'
import { Link } from 'react-router-dom'
import shortid from 'shortid'
import { Row, Col, Table, Card } from 'reactstrap'

class Shortcut extends React.Component {
  render () {
    return (
      <tr>
        <td>
          {this.props.shortcut.shortcuts.map(ss => (<span key={shortid()}><code>{ss}</code><br /></span>))}
        </td>
        <td>
          <code>g!{this.props.shortcut.command}</code>
        </td>
        <td>
          {this.props.shortcut.examples.map(ss => (<span key={shortid()}>{ss.substring(0, 1) === '!' ? <span dangerouslySetInnerHTML={{__html: '<br />' + ss.substring(1)}} /> : <code>{ss}</code>}<br /></span>))}
        </td>
      </tr>
    )
  }
}

Shortcut.propTypes = {
  shortcut: PropTypes.shape({
    shortcuts: PropTypes.arrayOf(PropTypes.string).isRequired,
    command: PropTypes.string.isRequired,
    examples: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
}

const Command = (props) =>
  <tr style={props.active ? {
    color: '#FFF',
    background: 'linear-gradient(90deg, #f857a6, #ff5858)',
    fontWeight: 'bold'
  } : {}} ref={props.cmdRef}>
    <td>
      {props.command.command.map(ss => (<span key={shortid()}><code>g!{ss}</code><br /></span>))}
    </td>
    <td dangerouslySetInnerHTML={{__html: props.command.description}} />
    <td>
      {props.command.aliases.map(ss => (<span key={shortid()}><code>{ss}</code> </span>))}
    </td>
    <td>
      {props.command.examples.map(ss => (<span key={shortid()}><code>g!{(props.command.command[0].split(/\s+/)[0]+ ' ' + ss).trim()}</code><br /></span>))}
    </td>
  </tr>

Command.propTypes = {
  command: PropTypes.shape({
    aliases: PropTypes.arrayOf(PropTypes.string).isRequired,
    examples: PropTypes.arrayOf(PropTypes.string).isRequired,
    command: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired
  }).isRequired,
  active: PropTypes.bool,
  cmdRef: PropTypes.any
}

class CommandReference extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      activeCommand: (this.props.match.params) ? this.props.match.params.command || '' : ''
    }
  }

  componentDidMount () {
    setTimeout(() => { if (this.activeCommandRef) this.activeCommandRef.scrollIntoViewIfNeeded() }, 500)
  }

  render () {
    return (
      <div>
        <Row>
          <Col md={12}>
            <h1>Command Reference</h1>
            <hr />
            <h3>Inline Shortcuts</h3>
            <p>You can use inline shortcuts to quickly reference multiple cards within your message. You are limited to a max of 3 inline references per message.</p>
            <Card>
              <Table size='sm' responsive striped style={{tableLayout: 'fixed'}}>
                <thead>
                  <tr>
                    <th style={{width: '33%'}}>Shortcut</th>
                    <th style={{width: '33%'}}>Command</th>
                    <th style={{width: '33%'}}>Examples</th>
                  </tr>
                </thead>
                <tbody>
                  {shortcuts.map(shortcut => <Shortcut key={shortid()} shortcut={shortcut} />)}
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col md={12}>
            <h3>Commands</h3>
            <p>All commands are prefixed using <code>g!</code> by default. You can change this behaviour via the <Link to='/dashboard'>Dashboard</Link>.</p>

            <Card>
              <Table size='sm' striped responsive style={{tableLayout: 'fixed'}}>
                <thead>
                  <tr>
                    <th style={{width: '25%'}}>Command</th>
                    <th style={{width: '25%'}}>Description</th>
                    <th style={{width: '25%'}}>Aliases</th>
                    <th style={{width: '25%'}}>Examples</th>
                  </tr>
                </thead>
                <tbody>
                  {commands.map(command => {
                    const active = command.command[0].split(/\s+/)[0].toLowerCase() === this.state.activeCommand.toLowerCase()
                    return <Command key={shortid()} cmdRef={(e) => { if (active) this.activeCommandRef = e }} command={command} active={active} />
                  })}
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

CommandReference.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      command: PropTypes.string
    })
  })
}

export default CommandReference

const shortcuts = [
  {
    shortcuts: [
      '<<query>>',
      '<<query | set>>',
      '[[query]]',
      '[[<query | set]]'
    ],
    command: 'card',
    examples: [
      '<<Mighty Leap>>',
      '<<Mighty Leap | ORI>>',
      '[[Mighty Leap | Magic Origins]]',
      '!This command supports the entire <a href="https://scryfall.com/docs/reference">Scryfall Syntax</a> for the query parameter.'
    ]
  },
  {
    shortcuts: [
      '<<$query>>',
      '<<$query | set>>',
      '[[$query]]',
      '[[$query | set]]'
    ],
    command: 'pricing',
    examples: [
      '<<$Mighty Leap>>',
      '<<$Mighty Leap | ORI>>',
      '[[$Mighty Leap | Magic Origins]]',
      '!This command supports the entire <a href="https://scryfall.com/docs/reference">Scryfall Syntax</a> for the query parameter.'
    ]
  }
].sort((a, b) => (a.command > b.command) ? 1 : ((b.command > a.command) ? -1 : 0))

const commands = [
  {
    'aliases': [],
    'examples': [
      'angel 3',
      'angel'
    ],
    'description': 'Retrieve the art of a token.',
    'command': ['token <token_name> [choice]']
  },
  {
    'aliases': ['cardart'],
    'examples': [
      'Mighty Leap | ORI',
      'Mighty Leap | Magic Origins',
      'Mighty Leap'
    ],
    'description': 'Fetch the full art of a card.<br/><br/>This command supports the entire <a href="https://scryfall.com/docs/reference">Scryfall Syntax</a> for the query parameter.',
    'command': [
      'art <query|set>',
      'art <query>'
    ]
  },
  {
    'aliases': [],
    'examples': [],
    'description': 'Show the help text, containing all of the command references.',
    'command': ['help']
  },
  {
    'aliases': ['stats'],
    'examples': [],
    'description': 'View statistics for Grimoire.',
    'command': ['statistics']
  },
  {
    'aliases': ['cardtext'],
    'examples': [
      'Mighty Leap | ORI',
      'Mighty Leap | Magic Origins',
      'Mighty Leap'
    ],
    'description': 'Retrieve the oracle text of a card.<br/><br/>This command supports the entire <a href="https://scryfall.com/docs/reference">Scryfall Syntax</a> for the query parameter.',
    'command': [
      'oracle <query|set>',
      'oracle <query>'
    ]
  },
  {
    'aliases': [
      'dollarydoos',
      'price'
    ],
    'examples': [
      'Mighty Leap | ORI',
      'Mighty Leap | Magic Origins',
      'Mighty Leap'
    ],
    'description': 'Retrieve the current pricing for a card.<br/><br/>This command supports the entire <a href="https://scryfall.com/docs/reference">Scryfall Syntax</a> for the query parameter.',
    'command': [
      'pricing <query|set>',
      'pricing <query>'
    ]
  },
  {
    'aliases': [
      'ipguide',
      'ipg'
    ],
    'examples': [
      '2.5',
      '2.5 philosophy',
      '2',
      ''
    ],
    'description': 'Retrieve a paragraph from the tournament rules.',
    'command': ['infractionprocedure <paragraph> [topic]']
  },
  {
    'aliases': ['reloadprefs'],
    'examples': [],
    'description': 'Reload your guild preferences immediately.',
    'command': ['reloadpreferences']
  },
  {
    'aliases': [
      'foreign',
      'named',
      'abroad'
    ],
    'examples': [
      'Mighty Leap | ORI',
      'Mighty Leap | Magic Origins',
      'Mighty Leap'
    ],
    'description': 'Retrieve all known foreign names for a card.<br/><br/>This command supports the entire <a href="https://scryfall.com/docs/reference">Scryfall Syntax</a> for the query parameter.',
    'command': [
      'names <query|set>',
      'names <query>'
    ]
  },
  {
    'aliases': [
      'keyword',
      'definition'
    ],
    'examples': [
      'vigilance',
      'prowess',
      'enchant'
    ],
    'description': 'Look up the definition for the specified keyword.',
    'command': ['define <keyword>']
  },
  {
    'aliases': ['flavortext'],
    'examples': [
      'Mighty Leap | ORI',
      'Mighty Leap | Magic Origins',
      'Mighty Leap'
    ],
    'description': 'Retrieve the flavor text of a card.<br/><br/>This command supports the entire <a href="https://scryfall.com/docs/reference">Scryfall Syntax</a> for the query parameter.',
    'command': [
      'flavor <query|set>',
      'flavor <query>'
    ]
  },
  {
    'aliases': [
      'crules',
      'comprehensiverules',
      'cr'
    ],
    'examples': [
      '702',
      '702.5c',
      '702.5',
      '7',
      ''
    ],
    'description': 'Retrieve a paragraph from the comprehensive rules.',
    'command': ['comprules <paragraph nr>']
  },
  {
    'aliases': [
      'wis',
      'whatsinstandard'
    ],
    'examples': [],
    'description': 'See what sets are currently in standard rotation.',
    'command': ['standard']
  },
  {
    'aliases': [
      'rng',
      'rand'
    ],
    'examples': [
      'C17 mythic',
      'rare artifact',
      'legendary creature',
      ''
    ],
    'description': 'Show a random card of a certain type.',
    'command': ['random [supertype] [type] [subtype] [rarity] [set] [setcode]']
  },
  {
    'aliases': [
      'versions',
      'printings',
      'sets'
    ],
    'examples': [
      'Mighty Leap | ORI',
      'Mighty Leap',
      'Mighty Leap | Magic Origins'
    ],
    'description': 'Retrieve all sets that a card was printed in.<br/><br/>This command supports the entire <a href="https://scryfall.com/docs/reference">Scryfall Syntax</a> for the query parameter.',
    'command': [
      'prints <query|set>',
      'prints <query>'
    ]
  },
  {
    'aliases': ['s'],
    'examples': [
      'Magic Origins',
      'ORI'
    ],
    'description': 'Fetch information for a set.',
    'command': ['set <set>']
  },
  {
    'aliases': [
      'ruling',
      'rules'
    ],
    'examples': [
      'Mighty Leap | ORI',
      'Mighty Leap | Magic Origins',
      'Mighty Leap'
    ],
    'description': 'Retrieve the current rulings of the specified card.<br/><br/>This command supports the entire <a href="https://scryfall.com/docs/reference">Scryfall Syntax</a> for the query parameter.',
    'command': [
      'rulings <query|set>',
      'rulings <query>'
    ]
  },
  {
    'aliases': [
      'format',
      'legalities',
      'formats',
      'illegal',
      'legal'
    ],
    'examples': [
      'Mighty Leap | ORI',
      'Mighty Leap | Magic Origins',
      'Mighty Leap'
    ],
    'description': 'Check the legality of a card for every known format.<br/><br/>This command supports the entire <a href="https://scryfall.com/docs/reference">Scryfall Syntax</a> for the query parameter.',
    'command': [
      'legality <query|set>',
      'legality <query>'
    ]
  },
  {
    'aliases': [
      'mtr',
      'tr',
      'magictournamentrules'
    ],
    'examples': [
      '',
      '3',
      '3.10'
    ],
    'description': 'Retrieve a paragraph from the tournament rules.',
    'command': ['tournamentrules <paragraph nr>']
  },
  {
    'aliases': ['c'],
    'examples': [
      'Mighty Leap | ORI',
      'Mighty Leap | Magic Origins',
      'Mighty Leap'
    ],
    'description': 'Fetch information for a card.<br/><br/>This command supports the entire <a href="https://scryfall.com/docs/reference">Scryfall Syntax</a> for the query parameter.',
    'command': [
      'card <query|set>',
      'card <query>'
    ]
  },
  {
    'aliases': ['bl'],
    'examples': [
      'standard',
      'legacy',
      'commander'
    ],
    'description': 'Retrieve the banlist for a specific format.',
    'command': [
      'banlist <standard | modern | legacy | vintage | commander | future | pauper | frontier | penny | 1v1 | duel>'
    ]
  },
  {
    'aliases': ['locate'],
    'examples': [
      'Sydney',
      '1027 Newport Avenue Pawtucket, RI 02862'
    ],
    'description': 'Search for game stores on the Wizards Locator.',
    'command': [
      'locator <location>'
    ]
  }
].sort((a, b) => (a.command[0] > b.command[0]) ? 1 : ((b.command[0] > a.command[0]) ? -1 : 0))
