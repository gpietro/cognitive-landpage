import React from "react"
import renderer from "react-test-renderer"
import Header, { Logo, SearchBar } from "../components/Header"
import Menu from "../components/Menu"

describe("Header", () => {
  it("Render empty header", () => {
    const tree = renderer.create(<Header />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("Render full header", () => {
    const tree = renderer
      .create(
        <Header>
          <Logo />
          <SearchBar />
          <Menu menuItems={["Learn", "Projects", "Forums"]} />
        </Header>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
