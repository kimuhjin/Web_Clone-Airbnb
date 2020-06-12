import React, { Fragment, useState } from "react";
import styled from "styled-components";
function SearchPanel() {
  const [click1, setClick1] = useState(false);
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
      <SearchPanelContainer>
        <Panel onClick={onclick1} click={click1}>
          <Value>위치</Value>
          <Input placeholder="어디로 여행가세요?" />
        </Panel>
        <Panel onClick={onclick2} click={click2}>
          <Value>체크인/체크아웃</Value>
          <Logic>날짜 추가</Logic>
        </Panel>
        <Panel onClick={onclick3} click={click3}>
          <Value>인원</Value>
          <Logic>게스트 추가</Logic>
        </Panel>
        <ButtonContainer>
          <Button>검색</Button>
        </ButtonContainer>
      </SearchPanelContainer>
    </Fragment>
  );
}

export default SearchPanel;

const Logic = styled.div`
  width: 100%;
  height: 100%;
  font-size: 14px;
  color: #8e8e8e;
`;
const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 0;
  border: none;
  outline: none;
  background-color: transparent;
  &::placeholder {
    font-size: 14px;
    color: #8e8e8e;
  }
`;
const Value = styled.div`
  width: 100%;
  font-size: 10px;
  font-weight: bold;
  color: #222222;
  text-align: start;
  padding-bottom: 4px;
`;

const Panel = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  flex: 2;
  align-items: flex-start;
  height: 100%;
  width: auto;
  padding: 16px 22px;
  /* min-width: 180px; */
  border: ${(props) =>
    props.click ? "2px solid black" : "2px solid transparent"};
  background-color: ${(props) => (props.click ? "#f7f7f7" : "")};
  box-sizing: border-box;
  border-radius: 12px;
  &:hover {
    border: ${(props) =>
      props.click ? "2px solid black" : "2px solid transparent"};
    box-sizing: border-box;
  }
`;

const SearchPanelContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 7;
  height: 70px;
  width: 100%;
  border: 1px solid #f7f7f7;
  box-sizing: border-box;
  border-radius: 12px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.09);
`;

const ButtonContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  color: white;
  height: 46px;
  width: 90px;
  border: none;
  border-radius: 12px;
  background-size: 200% 200%;
  background-image: radial-gradient(
    circle at center,
    #ff385c 0%,
    #e61e4d 27.5%,
    #e31c5f 40%,
    #d70466 57.5%,
    #bd1e59 75%,
    #bd1e59 100%
  );
`;
