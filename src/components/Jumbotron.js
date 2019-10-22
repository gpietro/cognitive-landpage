import React from "react"
import styled from "styled-components"
import Button from "./Button"

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 300px;
  background-color: #ffcf27;
  padding: 20px 0;
`

const Title = styled.div`
  font-size: 1.8em;
  margin: 5px 0;
`

const Subtitle = styled.div`
  font-size: 1.2em;
  font-weight: 300;
  line-height: 2;
`

const Text = styled.div`
  margin-top: 100px;
  margin-bottom: 10px;
`

export default ({ data }) => {
  const { title, subtitle, description, buttoncontent } = data

  return (
    <Content>
      <Title dangerouslySetInnerHTML={{ __html: title.html }} />
      <Subtitle>{subtitle.text}</Subtitle>
      <Text>{description.text}</Text>
      <Button>{buttoncontent}</Button>
    </Content>
  )
}
