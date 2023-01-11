import React, { useEffect } from "react";
import Header from "./components/header/Header";
import Landing from "./pages/Landing";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Header />
      <Landing />
    </>
  );
}

export default App;
