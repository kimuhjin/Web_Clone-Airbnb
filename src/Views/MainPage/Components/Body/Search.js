import React, { Fragment, useState } from "react";
import styled from "styled-components";
import SearchPanel1 from "./SearchPanel1";
import SearchPanel2 from "./SearchPanel2";
import SearchPanel3 from "./SearchPanel3";

function Search() {
  const [click1, setClick1] = useState(true);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);
  const onclick1 = () => {
    setClick1(true);
    setClick2(false);
    setClick3(false);
  };
  const onclick2 = () => {
    setClick1(false);
    setClick2(true);
    setClick3(false);
  };
  const onclick3 = () => {
    setClick1(false);
    setClick2(false);
    setClick3(true);
  };

  return (
    <Fragment>
      <SearchContainer>
        <MenuContainer>
          <MenuWrapper>
            <MenuBox>
              <Menu onClick={onclick1}>숙소</Menu>
              {click1 && <Bar />}
            </MenuBox>
            <MenuBox>
              <Menu onClick={onclick2}>장기 숙박</Menu>
              {click2 && <Bar on={click2} />}
            </MenuBox>
            <MenuBox>
              <Menu onClick={onclick3}>체험</Menu>
              {click3 && <Bar />}
            </MenuBox>
            <Menu>
              온라인 체험
              <NewIcon>NEW</NewIcon>
            </Menu>
          </MenuWrapper>
        </MenuContainer>
        {click1 && <SearchPanel1 />}
        {click2 && <SearchPanel2 />}
        {click3 && <SearchPanel3 />}
      </SearchContainer>
    </Fragment>
  );
}

export default Search;
const NewIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  color: white;
  font-weight: bold;
  padding: 0 5px;
  width: 24px;
  height: 18px;
  background-color: black;
  border-radius: 4px;
  margin-left: 8px;
`;
const MenuBox = styled.div``;
const MenuWrapper = styled.div`
  display: flex;
`;
const Bar = styled.div`
  width: ${(props) => (props.on ? "60px" : "30px")};
  height: 2px;
  background-color: #222222;
`;

const Menu = styled.div`
  display: flex;
  cursor: pointer;
  font-size: 16px;
  color: #222222;
  margin-right: 24px;
  &:hover {
    color: #717171;
  }
  padding-bottom: 7px;
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: auto;
  /* border: 1px solid blue;
  box-sizing: border-box; */
  padding-top: 32px;
  padding-bottom: 16px;
`;
const SearchContainer = styled.div`
  width: 100%;
  height: 160px;
  padding: 0px 80px;
  border: 1px solid transparent;
  box-sizing: border-box;
`;
