import React, { Fragment } from "react";
import styled from "styled-components";
function Body() {
  return (
    <Fragment>
      <BodyContainer></BodyContainer>
    </Fragment>
  );
}

export default Body;

const BodyContainer = styled.div`
  min-height: 600px;
  width: 100%;
  border: 2px dashed blue;
  box-sizing: border-box;
`;
