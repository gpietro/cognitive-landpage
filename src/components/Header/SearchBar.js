import React from "react"
import styled from "styled-components"
import SearchIcon from "../../images/assets/search-icon.svg"
import LineSeparator from "../../images/assets/line-separator.svg"

const SearchBar = styled.div`
  display: flex;
  width: 200px;
  height: 30px;
  color: #fff;
  background-color: #e6bb22;
  border-radius: 3px;
`

const Input = styled.input`
  ::placeholder {
    color: #fff;
  }
  outline: none;
  color: inherit;
  background-color: inherit;
  width: 100%;
  height: 100%;
  border: none;
`
export default () => (
  <SearchBar>
    <SearchIcon />
    <LineSeparator />
    <Input placeholder={"Search for projects or forum topics"} />
  </SearchBar>
)
