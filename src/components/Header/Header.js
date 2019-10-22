import React from "react"
import styled from "styled-components"

const Header = styled.div`
  display: flex;
  color: #363c44;
  background-color: #ffcf27;
  align-items: center;
  justify-content: space-between;
`

export default ({ children }) => <Header>{children}</Header>
