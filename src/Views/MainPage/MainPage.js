import React, { Fragment, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";

function MainPage() {
  const [scroll, setscroll] = useState(0);
  setInterval(() => {
    setscroll(window.pageYOffset);
  }, 200);
  return (
    <Fragment>
      <Header scroll={scroll} />
      <Body />
      <Footer />
    </Fragment>
  );
}

export default MainPage;
