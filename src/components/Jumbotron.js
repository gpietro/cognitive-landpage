import React from "react"
import styled from "styled-components"
import Background from "../images/assets/background.svg"
import Button from "./Button"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 380px;
  background-color: #ffcf27;
  padding: 20px 0;
  & div,
  & button {
    z-index: 2;
  }
`

const Title = styled.div`
  margin-top: 80px;
  padding: 0 20px;
  p {
    font-size: 2em;
    font-weight: 300;
  }
`

const Subtitle = styled.div`
  font-size: 1.2em;
  font-weight: 300;
  line-height: 2;
  padding: 0 20px;
`

const Text = styled.div`
  margin-top: 60px;
  margin-bottom: 10px;
`

const BackgroundImage = styled(Background)`
  position: absolute;
  z-index: 0;
`

export default ({ data }) => {
  const { title, subtitle, description, buttoncontent } = data

  return (
    <Container>
      <BackgroundImage />
      <Title dangerouslySetInnerHTML={{ __html: title.html }} />
      <Subtitle>{subtitle.text}</Subtitle>
      <Text>{description.text}</Text>
      <Button>{buttoncontent}</Button>
    </Container>
  )
}
