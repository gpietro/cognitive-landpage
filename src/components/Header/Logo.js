import React from "react"
import styled from "styled-components"
import Logo from "../../images/assets/logo-cognitive.svg"

const Container = styled.div`
  display: flex;
  align-items: center;
`
export default () => (
  <Container>
    <Logo />
    Cognitive
  </Container>
)
