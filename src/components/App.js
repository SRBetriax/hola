import React, {useEffect} from 'react';
import Header from './Header';
import Content from './Content';
import AOS from 'aos';
//link a pagina de mantenimiento
import { Route, Routes } from 'react-router-dom'
import Maintence from './Maintence';

function App() {
  useEffect(()=>{
   AOS.init();
   AOS.refresh(); 
  },[])
  return (
    <>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Content/>}/>
        <Route path="/maintence/" element={<Maintence/>}/>
      </Routes>
    </>
  );
}

export default App;
