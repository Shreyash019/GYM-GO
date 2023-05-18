import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import About from './components/main/About';
import Home from './components/main/Home';
import Gallery from './components/main/Gallery';
import Classes from './components/main/classes/Classes';
import Trainer from './components/main/Trainer';
import Pricing from './components/main/Pricing';
import Schedule from './components/main/Schedule';

import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Header/>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/gallery' element={<Gallery/>} />
        <Route path='/classes' element={<Classes/>} />
        <Route path='/trainer' element={<Trainer/>} />
        <Route path='/price' element={<Pricing/>} />
        <Route path='/schedules' element={<Schedule/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
