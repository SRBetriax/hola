import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Landing from "./pages/Landing";
import AOS from "aos";
import Maintence from './components/Maintence';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (

      <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/maintence/" element={<Maintence/>}/>
      </Routes>
    </BrowserRouter>
 
    </>

  );
}

export default App;
