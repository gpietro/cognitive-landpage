import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 10px;
  a {
    font-size: 0.8em;
    margin: 10px;
    text-decoration: none;
  }
`

const LeftMenu = styled.div`
  a {
    color: inherit;
  }
`

const RightMenu = styled.div``

const Languages = styled.div``

export default () => {
  return (
    <Container>
      <LeftMenu>
        <Link to="#">Contact</Link>
        <Link to="#">Privacy</Link>
        <Link to="#">Term of use</Link>
        <Link to="#">Accessibility</Link>
      </LeftMenu>
      <Languages>
        <Link to="/en-us" activeClassName="active">
          EN
        </Link>
        <Link to="/de-ch" activeClassName="active">
          DE
        </Link>
      </Languages>
      <RightMenu>
        <Link to="#">Youtube</Link>
        <Link to="#">Twitter</Link>
        <Link to="#">Facebook</Link>
      </RightMenu>
    </Container>
  )
}
