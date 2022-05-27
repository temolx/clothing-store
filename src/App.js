import './App.css';
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setStoreData } from './actions/storeInfo';
import Shop from './components/Shop';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import Favorites from './components/Favorites';
import Landing from './components/Landing';
import Contact from './components/Contact';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {

    axios.get(`https://fakestoreapi.com/products`)
      .then((res) => {
        dispatch(setStoreData(res.data))
        // console.log(res.data)
      }).catch((err) => {
        console.log(err)
      })

  }, [])

  return (
    <Router>
      <div className="App">
        <NavBar />

      </div>

      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
