import React, { Fragment } from "react";
import styled from "styled-components";

function Grid() {
  return (
    <Fragment>
      <GridContainer>
        <GridWrapper>
          <TextContainer>
            <ButtonWrapper>
              <Title>온라인 체험</Title>
              <Button>모두 둘러보기</Button>
            </ButtonWrapper>
            <Article>
              세계 각지의 사람들을 만나 새로운 경험을 해보세요.개성 있는
              호스트가 진행하는 실시간 영상 세션을 통해 이제 집에서도 안전하게
              체험을 즐기실 수 있습니다.
            </Article>
          </TextContainer>
        </GridWrapper>
      </GridContainer>
    </Fragment>
  );
}

export default Grid;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 108px;
  height: 34px;
  border: 2px solid white;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 7px 13px;
  color: white;
  font-size: 14px;
`;

const Title = styled.div`
  font-size: 32px;
  color: white;
  font-weight: bold;
`;
const Article = styled.div`
  margin-top: 4px;
  width: 450px;
  font-size: 16px;
  color: white;
`;
const TextContainer = styled.div`
  height: 100px;
  width: 100%;
  /* border: 1px solid white; */
`;
const GridWrapper = styled.div`
  height: 100%;
  width: 100%;

  border: 1px solid red;
`;
const GridContainer = styled.div`
  margin-top: 70px;
  height: 670px;
  width: auto;
  padding: 64px 80px;
  background-color: black;
`;
