import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import Header, { Logo, SearchBar } from "../components/Header"
import Button from "../components/Button"
import Jumbotron from "../components/Jumbotron"
import SectionAbout from "../components/SectionAbout"
import SectionDevelopers from "../components/SectionDevelopers"
import SectionProjects from "../components/SectionProjects/SectionProjects"
import Footer from "../components/Footer"

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

const Menu = styled.ul`
  font-size: 0.8em;
  display: flex;
  list-style-type: none;
  li {
    margin: 0 15px;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`

export default props => {
  const {
    // pageContext: { language },
    data: { prismicJumbotron, prismicProjects, prismicAbout },
  } = props
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cognitive</title>
      </Helmet>
      <GlobalStyle />
      <Header>
        <Logo />
        <SearchBar />

        <Menu>
          {["Learn", "Projects", "Forums"].map(menuItem => (
            <li>
              <Link to={`#/${menuItem}`}>{menuItem}</Link>
            </li>
          ))}
        </Menu>
        <Button>Register</Button>
        <Button>Log in with Github</Button>
      </Header>
      <Jumbotron data={prismicJumbotron.data} />
      <SectionAbout data={prismicAbout.data} />
      <SectionDevelopers />
      <SectionProjects data={prismicProjects.data} />
      <Footer />
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
    prismicAbout(lang: { eq: $language }) {
      data {
        button_content
        description {
          text
        }
        title {
          text
        }
        video_link {
          url
        }
      }
    }
  }
`
