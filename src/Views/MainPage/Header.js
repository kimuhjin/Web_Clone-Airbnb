import React, { Fragment, useState } from "react";
import styled from "styled-components";
import { FiChevronDown } from "react-icons/fi";
import { FaGlobe } from "react-icons/fa";
import { FaWonSign } from "react-icons/fa";

// import More from "./Components/Header/More";
function Header({ scroll }) {
  const [Language, setLanguage] = useState(false);
  const onclick = () => {
    setLanguage(!Language);
  };
  return (
    <Fragment>
      {/*<More scroll={scroll} />*/}
      <HeaderContainer scroll={scroll}>
        <MainBox>
          <Logo href="/" />
          <LinkBox>
            <Link onClick={onclick}>
              <Icons>
                <Icon>
                  <FaGlobe size={16} />
                </Icon>
                <FiChevronDown size={16} />
              </Icons>
              {Language && (
                <LanguageContainer>
                  <LanguageBox>
                    <GlobeIcon>
                      <FaGlobe size={16} />
                    </GlobeIcon>
                    <Desc>한국어 (KR)</Desc>
                  </LanguageBox>
                  <CurrencyBox>
                    <CurrencyIcon>
                      <FaWonSign size={16} />
                    </CurrencyIcon>
                    <Desc>KRW</Desc>
                  </CurrencyBox>
                </LanguageContainer>
              )}
            </Link>

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
const Desc = styled.div`
  margin-left: 10px;
`;
const GlobeIcon = styled.div``;
const CurrencyIcon = styled.div``;
const LanguageBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 50%;

  padding: 0px 10px;
  &:hover {
    background-color: #f7f7f7;
  }
`;
const CurrencyBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 50%;

  padding: 0px 10px;
  &:hover {
    background-color: #f7f7f7;
  }
`;
const LanguageContainer = styled.div`
  position: absolute;
  top: 120%;
  right: 0%;
  width: 180px;
  height: 100px;
  background-color: white;
  box-shadow: 1px 1px 2px rgba(0, 0, 0.18, 0.18);
  border-radius: 12px;
  padding: 10px 0px;
  overflow: hidden;
`;
const Icons = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Icon = styled.div`
  margin-right: 5px;
`;

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
  color: #222222;
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
  position: relative;
  /* flex-direction: column; */

  justify-content: center;
  align-items: center;
  height: 42px;
  width: auto;
  border-radius: 22px;
  font-size: 14px;
  font-weight: bold;
  padding: 0 15px;
  color: #222222;
  &:hover {
    background-color: #f7f7f7;
  }
`;
const LinkBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: auto;
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
  border: 2px dashed transparent;
  box-sizing: border-box;
  background-color: white;
  /* border-bottom: ${(props) =>
    props.scroll > 10 ? "" : "1px solid #f7f7f7"}; */
  padding: 0px 80px;
  transition:box-shadow 0.2s ease-in-out;
  box-shadow: ${(props) =>
    props.scroll > 10 ? "0px 1px 2px rgba(0, 0, 0, 0.18)" : ""};;
  position: fixed;
  height: 80px;
  width: 100%;
  top: 0;
  z-index: 10;
`;

const MainBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  /* border: 2px dashed red;
  box-sizing: border-box; */
`;
