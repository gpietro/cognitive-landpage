import React from "react"
import styled from "styled-components"

const Button = styled.button`
  background: #ffcf27;
  border: 2px solid #363c44;
  font-size: 14px;
  color: #363c44;
  padding: 8px 20px;
`

export default ({ children }) => <Button>{children}</Button>
