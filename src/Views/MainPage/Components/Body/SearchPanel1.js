import React, { Fragment, useState } from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { MdClose } from "react-icons/md";

import SearchPanelBtn from "./SearchPanelBtn";

function SearchPanel() {
  const [click1, setClick1] = useState(false);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);
  const [Adult, setAdult] = useState(0);
  const [Child, setChild] = useState(0);
  const [Baby, setBaby] = useState(0);
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
  const onPlusAdult = () => {
    setAdult(Adult + 1);
  };
  const onMinusAdult = () => {
    setAdult(Adult - 1);
  };
  const onPlusChild = () => {
    if (Adult === 0) {
      setAdult(1);
    }
    setChild(Child + 1);
  };
  const onMinusChild = () => {
    setChild(Child - 1);
  };
  const onPlusBaby = () => {
    if (Adult === 0) {
      setAdult(1);
    }
    setBaby(Baby + 1);
  };
  const onMinusBaby = () => {
    setBaby(Baby - 1);
  };
  const onReset = () => {
    setAdult(0);
    setBaby(0);
    setChild(0);
  };
  return (
    <Fragment>
      <SearchPanelContainer>
        <PanelBox>
          <Panel onClick={onclick1} click={click1}>
            <Value>위치</Value>
            <Input placeholder="어디로 여행가세요?" />
          </Panel>
        </PanelBox>
        <PanelBox>
          <Panel onClick={onclick2} click={click2}>
            <Value>체크인/체크아웃</Value>
            <Logic>날짜 추가</Logic>
          </Panel>
        </PanelBox>
        <PanelBox>
          <Panel onClick={onclick3} click={click3}>
            <Value>인원</Value>
            {Adult === 0 && <Logic>게스트 추가</Logic>}
            {Adult >= 1 && (
              <GuestNum>
                게스트 {Adult + Child}명
                {Baby >= 1 ? ", 유아" + " " + `${Baby}` + "명" : ""}
              </GuestNum>
            )}
            {(Adult > 0 || Child > 0 || Baby > 0) && (
              <CancelBtn onClick={onReset}>
                <MdClose />
              </CancelBtn>
            )}
          </Panel>
          {click3 && (
            <GuestContainer>
              <SearchPanelBtn
                onMinusAdult={onMinusAdult}
                onPlusAdult={onPlusAdult}
                Adult={Adult}
                onMinusChild={onMinusChild}
                onPlusChild={onPlusChild}
                Child={Child}
                onMinusBaby={onMinusBaby}
                onPlusBaby={onPlusBaby}
                Baby={Baby}
              />
            </GuestContainer>
          )}
        </PanelBox>
        <ButtonContainer>
          <Button>
            <IconBox>
              <FiSearch size={18} />
            </IconBox>
            검색
          </Button>
        </ButtonContainer>
      </SearchPanelContainer>
    </Fragment>
  );
}

export default SearchPanel;
const CancelBtn = styled.button`
  outline: none;
  cursor: pointer;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 35%;
  right: 5%;
  height: 24px;
  width: 24px;
  background-color: #ebebeb;
  border-radius: 50%;
  border: 1px solid transparent;
`;

const GuestNum = styled.div`
  width: 100%;
  height: 100%;
  font-size: 14px;
  font-weight: bold;
  color: #222222;
`;
const GuestContainer = styled.div`
  height: 245px;
  width: auto;
  padding: 16px 24px;
  background-color: white;
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
  box-sizing: border-box;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.19);
`;
const PanelBox = styled.div`
  flex: 2;
  align-items: flex-start;
  /* border: 1px solid red; */
`;

const IconBox = styled.div`
  color: white;
  margin-right: 4px;
`;
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
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  height: 100%;
  width: auto;
  padding: 16px 22px;
  border: ${(props) =>
    props.click ? "2px solid black" : "2px solid transparent"};
  border-top-right-radius: ${(props) => (props.click ? "12px" : "")};
  border-top-left-radius: ${(props) => (props.click ? "12px" : "")};
  background-color: ${(props) => (props.click ? "#f7f7f7" : "")};
  box-sizing: border-box;
  &:hover {
    border: ${(props) => (props.click ? "" : "2px solid lightgray")};
    border-radius: ${(props) => (props.click ? "" : "12px")};
    box-sizing: border-box;
  }
`;

const SearchPanelContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: flex-start;
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
  padding: 11px;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  outline: none;
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
