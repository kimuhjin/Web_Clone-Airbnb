import React, { Fragment } from "react";
import styled from "styled-components";

function ExploreSection() {
  const CardData = [
    {
      Title: "가까운 여행지",
      Article: "자동차로 금방 다녀올 수 있는 근교 여행지에서 휴식을 즐기세요.",
      Img_url:
        "https://a0.muscache.com/im/pictures/5924e9ef-fc40-439e-966a-1c76a634152a.jpg?im_w=320",
    },
    {
      Title: "나만의 공간",
      Article:
        "일행만을 위한 편안한 공간에서 친구 및 가족과 오붓한 시간을 보내세요.",
      Img_url:
        "https://a0.muscache.com/im/pictures/f8ec8dab-f5a4-423b-a81c-201f450d329d.jpg?im_w=720",
    },
    {
      Title: "온라인 체험",
      Article: "세계 각지의 호스트가 보여주는 특별한 세상",
      Img_url:
        "https://a0.muscache.com/im/pictures/7ee8ad00-0480-4b75-843f-1d2e4c01dde6.jpg?im_w=720",
    },
    {
      Title: "장기 숙박",
      Article: "한 달 이상 장기 숙박할 숙소를 에어비앤비에서 찾아보세요.",
      Img_url:
        "https://a0.muscache.com/im/pictures/99ff3081-68b9-4e2b-801f-0ab9767eaa81.jpg?im_w=720",
    },
  ];
  const RanderCards = CardData.map((data) => {
    return (
      <Fragment>
        <CardContainer>
          <Image src={data.Img_url}></Image>
          <TextContainer>
            <Title>{data.Title}</Title>
            <Article>{data.Article}</Article>
          </TextContainer>
        </CardContainer>
      </Fragment>
    );
  });
  return (
    <Fragment>
      <ExploreSectionContainer>
        <SectionContainer>{RanderCards}</SectionContainer>
      </ExploreSectionContainer>
    </Fragment>
  );
}

export default ExploreSection;
const TextContainer = styled.div`
  padding: 12px 16px 16px;
  height: 90px;
  width: auto;
`;
const Image = styled.div`
  height: 164px;
  width: 100%;
  background-image: url(${(props) => props.src});
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: center;
`;
const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #222222;
  margin-bottom: 4px;
`;
const Article = styled.div`
  font-size: 14px;
  color: #717171;
`;
const CardContainer = styled.div`
  cursor: pointer;
  height: 266px;
  width: 252px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  overflow: hidden;
  margin: 0px 10px;
`;

const SectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid green; */
  height: 300px;
  width: 100%;
`;
const ExploreSectionContainer = styled.div`
  margin-top: 20px;
  padding: 0px 80px;
`;
