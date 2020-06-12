import React, { Fragment } from "react";
import styled from "styled-components";
import SearchPanel from "./SearchPanel";

function Search() {
  return (
    <Fragment>
      <SearchContainer>
        <MenuContainer>
          <MenuWrapper>
            <Menu>숙소</Menu>
            <Menu>장기 숙박</Menu>
            <Menu>체험</Menu>
            <Menu>온라인 체험</Menu>
          </MenuWrapper>
          <Bar />
        </MenuContainer>
        <SearchPanel />
      </SearchContainer>
    </Fragment>
  );
}

export default Search;

const MenuWrapper = styled.div`
  display: flex;
  padding-bottom: 7px;
`;
const Bar = styled.div`
  width: 30px;
  height: 2px;
  background-color: #222222;
`;

const Menu = styled.div`
  cursor: pointer;
  font-size: 16px;
  color: #222222;
  margin-right: 24px;
  &:hover {
    color: #717171;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: auto;
  border: 1px solid blue;
  box-sizing: border-box;
  padding-top: 32px;
  padding-bottom: 16px;
`;
const SearchContainer = styled.div`
  width: 100%;
  height: 160px;
  padding: 0px 80px;
  border: 1px solid red;
  box-sizing: border-box;
`;
