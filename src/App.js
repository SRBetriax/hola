import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import AOS from "aos";
import Maintenance from "./components/maintenance/Maintenance";

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
          <Route path="/maintence/" element={<Maintenance />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
