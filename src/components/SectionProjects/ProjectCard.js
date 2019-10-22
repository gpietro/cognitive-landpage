import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 210px;
  height: 200px;
  background-color: #ffcf27;
  padding: 10px;
  margin: 10px 0;
  & p {
    margin: 0 0 8px 0;
  }
`

const Title = styled.p`
  font-size: 1em;
  font-weight: 700;
`

const More = styled(Link)`
  color: inherit;
  text-decoration: none;
  font-size: 0.8em;
`

export default ({ project: { language, title, developers, description } }) => (
  <Container>
    <p>{language.text}</p>
    <Title>{title.text}</Title>
    <p>{developers.text}</p>
    <p>{description.text}</p>
    <More to="#">Read more...</More>
  </Container>
)
