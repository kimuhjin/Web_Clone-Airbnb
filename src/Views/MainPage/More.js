import React, { Fragment } from "react";
import styled from "styled-components";
function More() {
  return (
    <Fragment>
      <MoreContainer>
        <Text>
          코로나19에 대한 에어비앤비의 대책 및 환불 정책에 대한 최신 정보를
          확인하세요.
        </Text>
        <Text_Link>자세히 알아보기</Text_Link>
      </MoreContainer>
    </Fragment>
  );
}

export default More;
const Text_Link = styled.div`
  font-size: 14px;
  font-weight: bold;
  text-decoration: underline;
`;
const Text = styled.div`
  font-size: 14px;
  margin-right: 3px;
`;

const MoreContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 58px;
  width: 100%;
  background-color: #f7f7f7;
  /* border: 2px dashed black;
  box-sizing: border-box; */
`;
