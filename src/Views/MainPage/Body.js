import React, { Fragment } from "react";
import styled from "styled-components";
import Search from "./Components/Body/Search";
function Body() {
  return (
    <Fragment>
      <BodyContainer>
        <Search />
      </BodyContainer>
    </Fragment>
  );
}

export default Body;

const BodyContainer = styled.div`
  margin-top: 80px;
  min-height: 600px;
  width: 100%;
  border: 2px dashed transparent;
  box-sizing: border-box;
`;
