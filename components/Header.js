import React from 'react'
import styled from 'styled-components'

const Header = ({walletAddress}) => {
    return (
        <Wrapper>
        <Title>Assets</Title>
            <ButtonsContainer>
                <WalletLink>
                    <WalletLinkTitle>Wallet Connected</WalletLinkTitle>
                    <WalletAddress> {walletAddress.slice(0,7)}...{walletAddress.slice(35)} </WalletAddress>
                </WalletLink>
                <Button
                    style={{
                        backgroundColor: '#3773f5',
                        color: '#000'
                    }} >
                    Buy / Sell
                </Button>
                <Button>Send / Receive</Button>
            </ButtonsContainer>
        </Wrapper>
    )
}

export default Header


const Wrapper = styled.div`
    width: calc(100% - 3rem);
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #282b2f;
    display: flex;
    align-items: center;
`

const Title = styled.div`
    font-size: 1.5rem;
    font-weight: 500;
    flex: 1;
`

const ButtonsContainer = styled.div`
    display: flex;
`

const Button = styled.div`
  border: 1px solid #282b2f;
  padding: 0.8rem;
  font-size: 1rem;
  font-weight: 400;
  border-radius: .4rem;
  margin-right: 1rem;

  &:hover{
    cursor: pointer;
  }
`

const WalletLink = styled.div`
    font-size: .8rem;
    border: 1px solid #282b2f;
    border-radius: 50rem;
    font-size: 1.2rem;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-right: .4rem;
`

const WalletLinkTitle = styled.div`
    color: #27ad75;
    font-size: 1.1rem;
    margin-bottom: .3rem;
    font-weight: 500;
`

const WalletAddress = styled.div`
    font-size: .8rem;
`