import React from "react"
import styled from "styled-components"
import Logo from "../../images/assets/logo-cognitive.svg"

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 0 25px;
`

const LogoIcon = styled(Logo)`
  width: 35px;
  margin-right: 5px;
`

export default () => (
  <Container>
    <LogoIcon />
    Cognitive
  </Container>
)
