import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import Carousel from './Components/Carousel';
import AboutPizza from './Components/AboutPizza';
import PizzaTypes from './Components/PizzaTypes';
import { Footer } from './Components/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Carousel/>
      <AboutPizza/>
      <PizzaTypes/>
      <Footer/>
    </div>
  );
}

export default App;
