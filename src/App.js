import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from "./pages/Landing";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
