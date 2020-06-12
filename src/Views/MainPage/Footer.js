import React, { Fragment } from "react";
import styled from "styled-components";
function Footer() {
  return (
    <Fragment>
      <FooterContainer>
        <Text>Footer</Text>
      </FooterContainer>
    </Fragment>
  );
}

export default Footer;
const Text = styled.div`
  font-size: 40px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  color: green;
`;
const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 430px;
  width: 100%;
  border: 2px dashed green;
  box-sizing: border-box;
`;
