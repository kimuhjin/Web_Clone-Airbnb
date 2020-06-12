import React, { Fragment } from "react";
import styled from "styled-components";
import ExploreSection from "./ExploreSection";

function Explore() {
  return (
    <Fragment>
      <ExploreContainer>
        <TitleContainer>
          <TitleBox>
            <Title>가까운 여행지, 에어비앤비와 탐험해보세요.</Title>
          </TitleBox>
        </TitleContainer>
        <ExploreSection />
      </ExploreContainer>
    </Fragment>
  );
}

export default Explore;
const TitleBox = styled.div`
  width: 480px;
  height: 100%;
  /* border: 1px solid blue; */
`;
const TitleContainer = styled.div`
  padding: 0px 80px;
`;
const Title = styled.div`
  font-size: 42px;
  color: rgb(146, 23, 77);
`;

const ExploreContainer = styled.div`
  margin-top: 60px;
  height: 500px;
  width: 100%;
  /* border: 1px red dashed; */
`;
