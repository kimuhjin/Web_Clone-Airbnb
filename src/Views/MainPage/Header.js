import React, { Fragment } from "react";
import styled from "styled-components";
function Header() {
  return (
    <Fragment>
      <HeaderContainer>
        <MainBox>
          <Logo href="/" />
          <LinkBox>
            <Link></Link>
            <Link>숙소 호스트 되기</Link>
            <Link>체험 호스팅하기</Link>
            <Link>도움말</Link>
            <Link>로그인</Link>
            <SignUp>회원 가입</SignUp>
          </LinkBox>
        </MainBox>
      </HeaderContainer>
    </Fragment>
  );
}

export default Header;
const SignUp = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 42px;
  min-width: 20px;
  border-radius: 22px;
  border: 1px solid #f7f7f7;
  font-size: 14px;
  font-weight: bold;
  padding: 0 15px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18);
  &:hover {
    box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.13);
    transition: box-shadow 0.2s ease;
  }
`;

const Link = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 42px;
  min-width: 20px;
  border-radius: 22px;
  font-size: 14px;
  font-weight: bold;
  padding: 0 15px;
  &:hover {
    background-color: #f7f7f7;
  }
`;
const LinkBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-width: 500px;
`;
const Logo = styled.a`
  cursor: pointer;
  height: 64px;
  width: 118px;
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1024px-Airbnb_Logo_B%C3%A9lo.svg.png");
  background-size: 100% auto;
  background-position: center;
  background-repeat: no-repeat;
`;
const HeaderContainer = styled.div`
  height: 80px;
  width: 100%;
  border: 2px dashed red;
  box-sizing: border-box;
  padding: 0px 80px;
`;

const MainBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: auto;
`;
