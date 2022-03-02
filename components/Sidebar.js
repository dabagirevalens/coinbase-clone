import React, { useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'

import CoinbaseLogo from '../assets/cb-logo.png'
import { navItems } from '../static/navItems'

const Sidebar = () => {

  const [activeIcon, setActiveIcon] = useState(navItems[0].title)

  return (
    <Wrapper>
      <LogoContainer>
        <Logo>
          <Image src={CoinbaseLogo} alt='Coinbase Logo' width={200} height={50} />
        </Logo>
      </LogoContainer>
      <NavItemsContainer>
        {navItems.map((item, index) => (
          <NavItem key={index} onClick={() => setActiveIcon(item.title)}>
            <NavIcon style={{ color: item.title === activeIcon && '#3773f5' }}> {item.icon} </NavIcon>
            <NavTitle> {item.title} </NavTitle>
          </NavItem>
        ))}
      </NavItemsContainer>
    </Wrapper>
  )
}

export default Sidebar

const Wrapper = styled.div`
    height: calc(100vh);
    width: calc(22rem - 16px -16px);
    padding: 0 1rem;
    border-right: 1px solid #282b2f;
`

const LogoContainer = styled.div`
    margin: 1.5rem 0;
`

const Logo = styled.div`
  width: 44%;
  object-fit: contain;
  margin-left: 1.5rem;
`

const NavItemsContainer = styled.div`
  margin-top: 3rem;

  &:hover{
    cursor: pointer;
  }
`

const NavItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: 400;
  border-radius: .5rem;
  border-bottom: 1.5rem;
  height: 4rem;

  &:hover{
    background-color: #141519;
  }
`

const NavIcon = styled.div`
  background-color: #141519;
  border-radius: 50%;
  padding: .7rem;
  margin: 0 1rem;
  display: grid;
  place-items: center;
`

const NavTitle = styled.div`

`