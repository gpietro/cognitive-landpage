import React from "react"
import styled from "styled-components"
import Search from "../../images/assets/search-icon.svg"
import LineSeparator from "../../images/assets/line-separator.svg"

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  width: 240px;
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
  border: none;
`

const SearchIcon = styled(Search)`
  margin: 0 5px;
`

const LineSeparatorIcon = styled(LineSeparator)`
  margin-right: 5px;
`

export default () => (
  <SearchBar>
    <SearchIcon />
    <LineSeparatorIcon />
    <Input placeholder={"Search for projects or forum topics"} />
  </SearchBar>
)
