import React from "react"
import styled from "styled-components"

const Header = styled.div`
  display: flex;
  justify-content: center;
  color: #363c44;
  background-color: #ffcf27;
  align-items: center;
  flex-wrap: wrap;
`

export default ({ children }) => <Header>{children}</Header>
