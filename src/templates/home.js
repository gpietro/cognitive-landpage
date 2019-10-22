import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import Header, { Logo, SearchBar } from "../components/Header"
import Menu from "../components/Menu"
import Button from "../components/Button"
import Jumbotron from "../components/Jumbotron"
import SectionAbout from "../components/SectionAbout"
import SectionDevelopers from "../components/SectionDevelopers"
import SectionProjects from "../components/SectionProjects/SectionProjects"
import Footer from "../components/Footer"

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`

const GlobalStyle = createGlobalStyle`
html {
  touch-action: manipulation;  
}
body {
  font-family: Helvetica, Arial, Sans;
  margin: 0;
  color: #363c44;
}
a.active {
  color: inherit;  
}
a:hover {
  text-decoration: underline
}
 
p {
  margin: 0;
  font-size: 0.8em;
  font-weight: 300;
}
`

export default props => {
  const {
    // pageContext: { language },
    data: { prismicJumbotron, prismicProjects },
  } = props
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cognitive</title>
      </Helmet>
      <GlobalStyle />
      <Container>
        <Header>
          <Logo />
          <SearchBar />
          <Menu menuItems={["Learn", "Projects", "Forums"]} />
          <Button>Register</Button>
          <Button>Log in with Github</Button>
        </Header>
        <Jumbotron data={prismicJumbotron.data} />
        <SectionAbout />
        <SectionDevelopers />
        <SectionProjects data={prismicProjects.data} />
        <Footer />
      </Container>
    </>
  )
}

export const query = graphql`
  query($language: String!) {
    prismicJumbotron(lang: { eq: $language }) {
      data {
        title {
          raw {
            type
            text
          }
          html
        }
        subtitle {
          raw {
            type
            text
          }
          text
        }
        description {
          raw {
            type
            text
          }
          text
        }
        buttoncontent
      }
    }
    prismicProjects(lang: { eq: $language }) {
      data {
        project {
          title {
            text
          }
          language {
            text
          }
          developers {
            text
          }
          description {
            text
          }
        }
      }
    }
  }
`
