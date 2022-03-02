import React from 'react'
import { Button } from './styles/Button.styled'
import { FlagGroup,FlagImg, HeaderGroup, StyledHeader, Logo, ButtonGroup } from './styles/Header.styled'

const Header = () => {
  return (
    <>
      <StyledHeader>
        <HeaderGroup>
          <Logo src="./images/star2.png" />
        </HeaderGroup>

        <HeaderGroup>
          <ButtonGroup>
            <Button color={"#E5AB2C"}>Take Screenshot</Button>
            <Button color={"#F91C85"}>Ask Teacher for help</Button>
            <Button color={"#43C0F6"}>More Projects</Button>
          </ButtonGroup>
      
          <FlagGroup>
              <FlagImg src="./images/NZ flag.png"></FlagImg>
              <FlagImg src="./images/Maori flag.png"></FlagImg>
          </FlagGroup>
        </HeaderGroup>
      </StyledHeader>
    </>
  )
}

export default Header