import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 100px 0;
  background: rgba(0, 0, 0, 0.75);
  color: #ffffff;
`

const Content = styled.div`
  margin: 0 20px;
`

const Number = styled.div`
  font-size: 2em;
  font-weight: 700;
`

export default () => (
  <Container>
    <Content>
      <Number>12.333</Number>
      <p>Developers have joined</p>
    </Content>
    <Content>
      <Number>12.333</Number>
      <p>Developers have joined</p>
    </Content>
    <Content>
      <Number>12.333</Number>
      <p>Developers have joined</p>
    </Content>
  </Container>
)
