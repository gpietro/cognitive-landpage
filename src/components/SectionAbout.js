import React from "react"
import styled from "styled-components"
import Button from "./Button"
import ReactPlayer from "react-player"

const Container = styled.div`
  display: flex;
  background: #9855d4;
  padding: 60px 0;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  padding: 20px;
  & div {
    margin-bottom: 10px;
  }
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
`

const Video = styled.div`
  flex: 1;
  margin: 10px 50px;
`

export default () => (
  <Container>
    <Content>
      <Title>About Cognetive Catalyst</Title>
      <Text>
        Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor
        urna. Ut laoreet sodales nisi, quis iaculis nulla iaculis vitae. Donec
        sagittis faucibus lacus eget blandit. Mauris vitae ultricies metus, at
        condimentum nulla. Donec quis ornare lacus. Etiam gravida mollis tortor
        quis porttitor.
      </Text>
      <AboutButton>Get started</AboutButton>
    </Content>
    <Video>
      <ReactPlayer
        width="100%"
        height="100%"
        url="https://youtu.be/p61Ejrw8thM"
        playing
      />
    </Video>
  </Container>
)
