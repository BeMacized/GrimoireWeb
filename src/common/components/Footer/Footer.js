// @Flow
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    background-color: #333;
    width: 100%;
    margin-top: 30px;
`

const TopContent = styled.div`
    padding: 20px;
`

const BottomBar = styled.div`
    background-color: #222;
    color: #333;
    padding: 10px 20px 10px 20px;
`

const Disclaimer = styled.p`
    display: inline-block;
    max-width: 1080px;
    color: #666;
    font-size: 0.75em;
    padding: 0;
    margin: 0;
`

export default class Footer extends React.Component {
  render () {
    return (
      <Wrapper>
        <TopContent>
          <Disclaimer>
            The literal and graphical information presented on this site and by the Discord bot about Magic: The Gathering, including card images, the mana symbols, and Oracle text, is copyright Wizards of the Coast, LLC, a subsidiary of Hasbro, Inc. This project is not produced by, endorsed by, supported by, or affiliated with Wizards of the Coast.
            <br />
            Card prices represent daily averages and/or market values provided by our affiliates. Absolutely no guarantee is made for any price information. See stores for final prices and availability.
            <br />
            "Discord", "Discord App", and any associated logos are registered trademarks of Discord, inc. Grimoire is not created by, affiliated with, or supported by Discord.
            <br />
            The Scryfall logo and Scryfall API are copyright Some Assembly, LLC, DBA Scryfall. Grimoire is not created by, affiliated with, or supported by Scryfall.
          </Disclaimer>
        </TopContent>
        <BottomBar>
            Original Content © {new Date().getFullYear()} <a href='https://bemacized.net/'>BeMacized</a>
        </BottomBar>
      </Wrapper>
    )
  }
}
