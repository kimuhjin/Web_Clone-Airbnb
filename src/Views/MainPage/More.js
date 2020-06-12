import React, { Fragment } from "react";
import styled from "styled-components";
function More() {
  return (
    <Fragment>
      <MoreContainer></MoreContainer>
    </Fragment>
  );
}

export default More;
const MoreContainer = styled.div`
  height: 58px;
  width: 100%;
  background-color: #f7f7f7;
  border: 2px dashed black;
  box-sizing: border-box;
`;
