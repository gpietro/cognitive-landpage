import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import ProjectCard from "./ProjectCard"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;
  background: #363c44;
  text-align: center;
`

const Title = styled.p`
  color: white;
  font-size: 1.5em;
`

const Menu = styled.ul`
  display: flex;
  list-style-type: none;
  li {
    margin: 0 15px;
  }
  a {
    color: white;
    &:hover,
    &.active {
      color: #ffcf27;
    }
  }
`

const Cards = styled.div`
  display: flex;
  text-align: left;
  justify-content: space-evenly;
  align-items: left;
  width: 100%;
  flex-wrap: wrap;
`

export default ({ data }) => {
  const { project } = data
  return (
    <Container>
      <Title>Projects</Title>
      <Menu>
        {["Trending", "Language", "Speech", "Vision", "Data insight"].map(
          menuItem => (
            <li>
              <Link to="#" className={"Trending" === menuItem ? "active" : ""}>
                {menuItem}
              </Link>
            </li>
          )
        )}
      </Menu>
      <ProjectCards data={project} />
    </Container>
  )
}

const ProjectCards = ({ data }) => (
  <Cards>
    {data.map(project => (
      <ProjectCard project={project} />
    ))}
  </Cards>
)
