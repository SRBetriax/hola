import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import AOS from "aos";
import Maintenance from "./components/maintenance/Maintenance";
<<<<<<< HEAD
import Sign  from "./pages/Sign";
import Ayuda from "./components/ayuda/ayuda";
=======
import Sign from "./pages/Sign";
>>>>>>> 9674cbd914217af3daf6bfe3e5fa9c8e0ea6ba78

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
          <Route path="/sign/:data" element={<Sign />} />
          <Route path="/maintenance/" element={<Maintenance />} />

          <Route path="/ayuda" element={<Ayuda/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
