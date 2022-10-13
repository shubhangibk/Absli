import './App.css';
import Navbar from './Navbar.js'
import Form from './Form.js'
import Plan1 from './Plan1.js'
import Plan2 from './Plan2.js'
import Card from './Card.js'
import Carousel from './Carousel.js'
import Faq from './Faq.js'
import Disclaimer from './Disclaimer';
import Nextpage from './Nextpage';
import {BrowserRouter,Routes,Route} from "react-router-dom";

function Home() {
  return (
    <>
    
        <Navbar/>
        <Form/>
        <Plan1/>
        <Plan2/>
        <Card/>
        <Carousel/>
        <Faq/>
        <Disclaimer/>
      
    </>
  );
}

export default Home;