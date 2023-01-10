import React, { useEffect } from "react";
import Header from "./Header";
import Content from "./Content";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Header />
      <Content />
    </>
  );
}

export default App;
