import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Menu = styled.ul`
  display: flex;
  list-style-type: none;
`

export default ({ menuItems = [] }) => (
  <Menu>
    {menuItems.map(menuItem => (
      <li>
        <Link to="#">{menuItem}</Link>
      </li>
    ))}
  </Menu>
)
