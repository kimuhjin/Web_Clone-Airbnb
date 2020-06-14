import React, { Fragment } from "react";
import styled from "styled-components";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
function SearchPanelBtn({
  onMinusAdult,
  onPlusAdult,
  Adult,
  onMinusChild,
  onPlusChild,
  Child,
  onMinusBaby,
  onPlusBaby,
  Baby,
}) {
  return (
    <Fragment>
      <LabelContainer>
        <DescBox>
          <Title>성인</Title>
          <Desc>만 13세 이상</Desc>
        </DescBox>
        <ControlBox>
          {Adult === 0 && (
            <MinusDisable disabled>
              <AiOutlineMinus />
            </MinusDisable>
          )}
          {Adult >= 1 && (
            <Minus onClick={onMinusAdult}>
              <AiOutlineMinus />
            </Minus>
          )}

          <Num>{Adult}</Num>
          <Plus onClick={onPlusAdult}>
            <AiOutlinePlus />
          </Plus>
        </ControlBox>
      </LabelContainer>
      <LabelContainer>
        <DescBox>
          <Title>어린이</Title>
          <Desc>2~12세</Desc>
        </DescBox>
        <ControlBox>
          {Child === 0 && (
            <MinusDisable disabled>
              <AiOutlineMinus />
            </MinusDisable>
          )}
          {Child >= 1 && (
            <Minus onClick={onMinusChild}>
              <AiOutlineMinus />
            </Minus>
          )}
          <Num>{Child}</Num>
          {Child >= 5 && (
            <PlusDisable disabled>
              <AiOutlinePlus />
            </PlusDisable>
          )}
          {Child < 5 && (
            <Plus onClick={onPlusChild}>
              <AiOutlinePlus />
            </Plus>
          )}
        </ControlBox>
      </LabelContainer>
      <LabelContainer>
        <DescBox>
          <Title>유아</Title>
          <Desc>2세 미만</Desc>
        </DescBox>
        <ControlBox>
          {Baby === 0 && (
            <MinusDisable disabled>
              <AiOutlineMinus />
            </MinusDisable>
          )}
          {Baby >= 1 && (
            <Minus onClick={onMinusBaby}>
              <AiOutlineMinus />
            </Minus>
          )}
          <Num>{Baby}</Num>
          {Baby >= 5 && (
            <PlusDisable disabled>
              <AiOutlinePlus />
            </PlusDisable>
          )}
          {Baby < 5 && (
            <Plus onClick={onPlusBaby}>
              <AiOutlinePlus />
            </Plus>
          )}
        </ControlBox>
      </LabelContainer>
    </Fragment>
  );
}

export default SearchPanelBtn;
const MinusDisable = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(230, 230, 230);
  height: 32px;
  width: 32px;
  border-radius: 50%;
  border: 1px solid rgb(230, 230, 230);
  background-color: transparent;
`;
const PlusDisable = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(230, 230, 230);
  height: 32px;
  width: 32px;
  border-radius: 50%;
  border: 1px solid rgb(230, 230, 230);
  background-color: transparent;
`;

const Minus = styled.button`
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(113, 113, 113);
  height: 32px;
  width: 32px;
  border-radius: 50%;
  border: 1px solid rgb(113, 113, 113);
  background-color: transparent;
`;
const Plus = styled.button`
  outline: none;
  cursor: pointer;
  display: flex;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  color: rgb(113, 113, 113);
  height: 32px;
  width: 32px;
  border-radius: 50%;
  border: 1px solid rgb(113, 113, 113);
`;
const Num = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
  font-size: 16px;
`;
const ControlBox = styled.div`
  display: flex;
`;
const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #222222;
`;
const Desc = styled.div`
  font-size: 14px;
  color: #717171;
`;
const DescBox = styled.div``;
const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 4px 16px;
`;
