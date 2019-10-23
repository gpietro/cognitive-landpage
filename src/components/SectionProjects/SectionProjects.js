import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import ProjectCard from "./ProjectCard"
import Button from "../Button"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
  background: #363c44;
  text-align: center;
`

const Title = styled.p`
  color: white;
  font-size: 1.5em;
`

const Menu = styled.ul`
  display: flex;
  flex-wrap: wrap;
  font-size: 0.9em;
  list-style-type: none;

  li {
    margin: 0 15px;
  }
  a {
    color: white;
    text-decoration: none;
    &:hover,
    &.active {
      color: #ffcf27;
      text-decoration: underline;
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
  margin: 20px 0;
`

const ButtonProjects = styled(Button)`
  color: #fff;
  border-color: #fff;
  background: none;
  margin: 5px 0 0 0;
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
      <ButtonProjects>Browse All Projects</ButtonProjects>
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
