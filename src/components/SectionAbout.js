import React from "react"
import styled from "styled-components"
import Button from "./Button"
import ReactPlayer from "react-player"

const Container = styled.div`
  display: flex;
  background: #9855d4;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  & > div {
    margin: 100px 40px;
  }
`

const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`

const Text = styled.p`
  color: #fff;
  text-align: right;
  margin: 10px 0;
`

const Title = styled(Text)`
  font-size: 1.5em;
`

const AboutButton = styled(Button)`
  color: #fff;
  border-color: #fff;
  background: none;
  margin: 5px 0 0 0;
`

const Video = styled.div`
  flex: 1;
  min-height: 250px;
`

export default ({ data }) => {
  const { title, description, button_content, video_link } = data
  return (
    <Container>
      <Content>
        <Title>{title.text}</Title>
        <Text>{description.text}</Text>
        <AboutButton>{button_content}</AboutButton>
      </Content>
      <Video>
        <ReactPlayer width="100%" height="100%" url={video_link.url} playing />
      </Video>
    </Container>
  )
}
