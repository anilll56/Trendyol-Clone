import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import Favorites from './pages/Favorites/Favorites';
import Navbar from './pages/Navbar/Navbar';
import MenPage from './pages/MenPage/MenPage';
import WomenPage from './pages/WomenPage';
import LoginPage from './pages/Login/LoginPage';
import BasketPage from './pages/Basket/BasketPage';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Wrapper from './components/Wrapper/Wrapper';
import Card from './pages/Card/Card';
  // --uk-translate-x: 0;
  //--uk-translate-y: 0;
  //--uk-scale-x: 1;
  //--uk-scale-y: 1;
  //transform: translate(var(--uk-position-translate-x),var(--uk-position-translate-y)) translate(var(--uk-translate-x),var(--uk-translate-y)) scale(var(--uk-scale-x),var(--uk-scale-y));
  //transition: .3s ease-out;
  //transition-property: opacity,transform,filter;

function App() {

  return (
    <div className='conteiner'>
      <div className='content'>
      <Navbar></Navbar>
      <Wrapper></Wrapper>
      <hr className='hrCss'></hr>
      <ScrollToTop></ScrollToTop>
    <Routes>
      <Route path='/İtem' element={<Card></Card>}></Route>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/Favorites' element={<Favorites></Favorites>}></Route>
      <Route path='/Men' element={<MenPage></MenPage>}></Route>
      <Route path='/Women' element={<WomenPage></WomenPage>}></Route>
      <Route path='/Login' element={<LoginPage></LoginPage>}></Route>
      <Route path='/BasketPage' element={<BasketPage></BasketPage>}></Route>
    </Routes>
      </div>
    </div>
  );
}

export default App;
