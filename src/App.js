import './App.css';
import { Route, Routes } from 'react-router-dom';
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
