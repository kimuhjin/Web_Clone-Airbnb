import React, { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import More from "./More";
function index() {
  return (
    <Fragment>
      <More />
      <Header />
      <Body />
      <Footer />
    </Fragment>
  );
}

export default index;
