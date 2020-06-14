import React, { Fragment } from "react";
import styled from "styled-components";
import Search from "./Components/Body/Search";
import Explore from "./Components/Body/Explore";
import Experience from "./Components/Body/Experience";

function Body() {
  return (
    <Fragment>
      <BodyContainer>
        <Search />
        <Explore />
        <Experience />
      </BodyContainer>
    </Fragment>
  );
}

export default Body;

const BodyContainer = styled.div`
  margin-top: 80px;
  min-height: 1000px;
  height: 100%;
  width: 100%;
  /* border: 2px dashed transparent; */
  /* box-sizing: border-box; */
`;
