// @Flow
import React from 'react'
import PropTypes from 'prop-types'
// import styled from 'styled-components'
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
          <code>!{this.props.shortcut.command}</code>
        </td>
        <td>
          {this.props.shortcut.examples.map(ss => (<span key={shortid()}><code>{ss}</code><br /></span>))}
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
      {props.command.command.map(ss => (<span key={shortid()}><code>!{ss}</code><br /></span>))}
    </td>
    <td>
      {props.command.description}
    </td>
    <td>
      {props.command.aliases.map(ss => (<span key={shortid()}><code>{ss}</code> </span>))}
    </td>
    <td>
      {props.command.examples.map(ss => (<span key={shortid()}><code>!{(props.command.command[0].split(/\s+/)[0]+ ' ' + ss).trim()}</code><br /></span>))}
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
              <Table size='sm' striped style={{tableLayout: 'fixed'}}>
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
            <p>All commands are prefixed using <code>!</code> by default. In the future you will be able to change this behaviour.</p>

            <Card>
              <Table size='sm' striped style={{tableLayout: 'fixed'}}>
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
      '<<card>>',
      '<<card | set>>',
      '[[card]]',
      '[[<card | set]]'
    ],
    command: 'card',
    examples: [
      '<<Mighty Leap>>',
      '<<Mighty Leap | ORI>>',
      '[[Mighty Leap | Magic Origins]]'
    ]
  },
  {
    shortcuts: [
      '<<$card>>',
      '<<$card | set>>',
      '[[$card]]',
      '[[$card | set]]'
    ],
    command: 'pricing',
    examples: [
      '<<$Mighty Leap>>',
      '<<$Mighty Leap | ORI>>',
      '[[$Mighty Leap | Magic Origins]]'
    ]
  }
].sort((a, b) => (a.command > b.command) ? 1 : ((b.command > a.command) ? -1 : 0))

const commands = [
  {
    'aliases': [],
    'examples': ['', 'pricing'],
    'description': 'Shows the general bot help text, or help for the specified command.',
    'command': ['help [command]']
  },
  {
    'aliases': ['cardart'],
    'examples': [
      'Mighty Leap',
      'Mighty Leap | ORI',
      'Mighty Leap | Magic Origins'
    ],
    'description': 'Fetch the full art of a card',
    'command': [
      'art <card>',
      'art <card|set>'
    ]
  },
  {
    'aliases': ['c'],
    'examples': [
      'Mighty Leap',
      'Mighty Leap | ORI',
      'Mighty Leap | Magic Origins'
    ],
    'description': 'Fetch information for a card',
    'command': [
      'card <card>',
      'card <card|set>'
    ]
  },
  {
    'aliases': ['cardtext'],
    'examples': [
      'Mighty Leap',
      'Mighty Leap | ORI',
      'Mighty Leap | Magic Origins'
    ],
    'description': 'Retrieves the oracle text of a card.',
    'command': [
      'oracle <card>',
      'oracle <card|set>'
    ]
  },
  {
    'aliases': [
      'sets',
      'versions',
      'printings'
    ],
    'examples': [
      'Mighty Leap',
      'Mighty Leap | ORI',
      'Mighty Leap | Magic Origins'
    ],
    'description': 'Retrieves all sets that a card was printed in. ',
    'command': [
      'prints <card>',
      'prints <card|set>'
    ]
  },
  {
    'aliases': [
      'legal',
      'illegal',
      'format',
      'formats',
      'legalities'
    ],
    'examples': [
      'Mighty Leap',
      'Mighty Leap | ORI',
      'Mighty Leap | Magic Origins'
    ],
    'description': 'Checks the legality of a card, for every known format',
    'command': [
      'legality <card>',
      'legality <card|set>'
    ]
  },
  {
    'aliases': [
      'abroad',
      'foreign',
      'named'
    ],
    'examples': [
      'Mighty Leap',
      'Mighty Leap | ORI',
      'Mighty Leap | Magic Origins'
    ],
    'description': 'Retrieves all known foreign names for a card',
    'command': [
      'names <card>',
      'names <card|set>'
    ]
  },
  {
    'aliases': [
      'rules',
      'ruling'
    ],
    'examples': [
      'Mighty Leap',
      'Mighty Leap | ORI',
      'Mighty Leap | Magic Origins'
    ],
    'description': 'Retrieves the current rulings of the specified card.',
    'command': [
      'rulings <card>',
      'rulings <card|set>'
    ]
  },
  {
    'aliases': [
      'cr',
      'crules',
      'comprehensiverules'
    ],
    'examples': ['', '7', '702', '702.5', '702.5c'],
    'description': 'Retrieve a paragraph from the comprehensive rules',
    'command': ['comprules <paragraph nr>']
  },
  {
    'aliases': [
      'definition',
      'keyword'
    ],
    'examples': ['enchant', 'vigilance', 'prowess'],
    'description': 'Looks up the definition for the specified keyword',
    'command': ['define <keyword>']
  },
  {
    'aliases': [
      'ipg',
      'ipguide'
    ],
    'examples': ['', '2', '2.5'],
    'description': 'Retrieve a paragraph from the tournament rules.',
    'command': ['infractionprocedure <paragraph> [topic]']
  },
  {
    'aliases': [
      'magictournamentrules',
      'mtr',
      'tr'
    ],
    'examples': ['', '3', '3.10'],
    'description': 'Retrieve a paragraph from the tournament rules',
    'command': ['tournamentrules <paragraph nr>']
  },
  {
    'aliases': ['s'],
    'examples': [
      'ORI',
      'Magic Origins'
    ],
    'description': 'Fetch information for a set',
    'command': ['set <set>']
  },
  {
    'aliases': [],
    'examples': ['angel', 'angel 3'],
    'description': 'Retrieve the art of a token.',
    'command': ['token <token_name> [choice]']
  },
  {
    'aliases': [
      'whatsinstandard',
      'wis'
    ],
    'examples': [''],
    'description': 'See what sets are currently in standard rotation',
    'command': ['standard ']
  },
  {
    'aliases': [
      'rand',
      'rng'
    ],
    'examples': ['', 'legendary creature', 'C17 mythic', 'rare artifact'],
    'description': 'Show a random card of a certain type. Example: `!random legendary creature angel`.',
    'command': ['random <[supertype] [type] [subtype] [rarity] [set] [setcode] [layout]>...']
  },
  {
    'aliases': [
      'price',
      'dollarydoos'
    ],
    'examples': [
      'Mighty Leap',
      'Mighty Leap | ORI',
      'Mighty Leap | Magic Origins'
    ],
    'description': 'Retrieves the current pricing for a card.',
    'command': [
      'pricing <card>',
      'pricing <card|set>'
    ]
  }
].sort((a, b) => (a.command[0] > b.command[0]) ? 1 : ((b.command[0] > a.command[0]) ? -1 : 0))
