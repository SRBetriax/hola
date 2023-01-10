import React, {useEffect} from 'react';
import Header from './components/Header';
import Content from './pages/Content';
import AOS from 'aos';



function App() {
  useEffect(()=>{
   AOS.init();
   AOS.refresh(); 
  },[])
  return (
    <>
      <Header />
      <Content/>
    </>
  );
}

export default App;
