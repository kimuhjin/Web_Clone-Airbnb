import React, { Fragment } from "react";
import styled from "styled-components";
function Header() {
  return (
    <Fragment>
      <HeaderContainer></HeaderContainer>
    </Fragment>
  );
}

export default Header;

const HeaderContainer = styled.div`
  height: 80px;
  width: 100%;
  border: 2px dashed red;
  box-sizing: border-box;
`;
