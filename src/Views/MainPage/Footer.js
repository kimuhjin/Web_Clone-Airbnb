import React, { Fragment } from "react";
import styled from "styled-components";
function Footer() {
  return (
    <Fragment>
      <FooterContainer></FooterContainer>
    </Fragment>
  );
}

export default Footer;

const FooterContainer = styled.div`
  height: 430px;
  width: 100%;
  border: 2px dashed green;
  box-sizing: border-box;
`;
