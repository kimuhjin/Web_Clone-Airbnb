import React, { Fragment } from "react";
import styled from "styled-components";

function Experience() {
  return (
    <Fragment>
      <ExpContainer>
        <ExpWrapper>
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
          <GridContainer>
            <GridItem1>
              <Image1></Image1>
              <TextAreaLg>
                <Text>
                  볼티모어의 '식물닥터'에게서 식물번식법을 배워보세요.
                </Text>
              </TextAreaLg>
            </GridItem1>
            <GridItem2>
              <Image2></Image2>
              <TextAreaSm>
                스트레칭을 하고, 호흡을 가다듬고, 긴장을 풀어보세요. 친구와
                함께하는 요가 클래스.
              </TextAreaSm>
            </GridItem2>
            <GridItem3>
              <Image3></Image3>
              <TextAreaSm>
                암스테르담에 사는 제니스와 함께 음악을 들으며 명상하기
              </TextAreaSm>
            </GridItem3>
            <GridItem4>
              <Image4></Image4>
              <TextAreaSm>
                <Text>
                  존과 함께 그림 그리며 아프리카 펭귄에게 도움의 손길 보내기
                </Text>
              </TextAreaSm>
            </GridItem4>
          </GridContainer>
        </ExpWrapper>
      </ExpContainer>
    </Fragment>
  );
}

export default Experience;
const Text = styled.div`
  width: 210px;
`;
const TextAreaSm = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: white;
  background-color: rgb(34, 34, 34);
  height: 25%;
  font-size: 16px;
  font-weight: bold;
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
`;
const TextAreaLg = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: white;
  background-color: rgb(34, 34, 34);
  height: 12%;
  font-size: 16px;
  font-weight: bold;
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
`;
const Image1 = styled.div`
  width: 100%;
  height: 88%;
  background-image: url("https://a0.muscache.com/im/pictures/d3fafe53-6348-4dcb-b778-e6724eb25a4a.jpg?im_w=720");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
const Image2 = styled.div`
  width: 100%;
  height: 75%;
  background-image: url("https://a0.muscache.com/im/pictures/5bf46c77-4312-41b6-b9ad-66db5bbadd27.jpg?im_w=720");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
const Image3 = styled.div`
  width: 100%;
  height: 75%;
  background-image: url("https://a0.muscache.com/im/pictures/5bd2705a-a565-426e-b928-f2a2b581e717.jpg?im_w=480");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
const Image4 = styled.div`
  width: 100%;
  height: 75%;
  background-image: url("https://a0.muscache.com/im/pictures/af46112a-b342-45bb-89b0-57fce44e110c.jpg?im_w=1680");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const GridItem1 = styled.div`
  cursor: pointer;
  background-color: yellow;
  border-radius: 16px;
  width: 100%;
  height: 100%;
  grid-area: One;
  overflow: hidden;
`;
const GridItem2 = styled.div`
  cursor: pointer;
  background-color: yellow;
  border-radius: 16px;
  width: 100%;
  height: 100%;
  grid-area: Two;
  overflow: hidden;
`;
const GridItem3 = styled.div`
  cursor: pointer;
  background-color: yellow;
  border-radius: 16px;
  width: 100%;
  height: 100%;
  grid-area: Three;
  overflow: hidden;
`;
const GridItem4 = styled.div`
  cursor: pointer;
  background-color: yellow;
  border-radius: 16px;
  width: 100%;
  height: 100%;
  grid-area: Four;
  overflow: hidden;
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 300px);
  grid-template-areas:
    "One One Two Three"
    "One One Four Four";
  /* border: 1px solid blue; */
  box-sizing: border-box;
  gap: 16px 16px;
  margin-top: 40px;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Button = styled.div`
  cursor: pointer;
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
  &:hover {
    background-color: #717171;
  }
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
const ExpWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* border: 1px solid red; */
`;
const ExpContainer = styled.div`
  margin-top: 70px;
  height: 100%;
  width: auto;
  padding: 64px 80px;
  background-color: black;
  /* border: 1px solid red; */
`;
