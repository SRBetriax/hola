import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import AOS from "aos";
import Maintenance from "./components/maintenance/Maintenance";
import Sign from "./pages/Sign";
import Ayuda from "./components/ayuda/ayuda";
import Register from "./components/register/Register";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/sign/:data" element={<Sign />} />
          <Route path="/sign/register/form" element={<Register />} />

          <Route path="/maintenance/" element={<Maintenance />} />

          <Route path="/ayuda" element={<Ayuda />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
