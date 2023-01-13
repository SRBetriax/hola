import React, { useEffect } from "react";
<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from 'react-router-dom';
=======
import Header from "./components/header/Header";
>>>>>>> fdd226dd6450f13017ca065a6160666fe4244893
import Landing from "./pages/Landing";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
<<<<<<< HEAD
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
=======
    <>
      <Header />
      <Landing />
    </>
>>>>>>> fdd226dd6450f13017ca065a6160666fe4244893
  );
}

export default App;
