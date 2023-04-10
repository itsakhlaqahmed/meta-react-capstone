import About from "./components/About.js"
import Homepage from "./components/Homepage";
import MenuPage from "./components/MenuPage.js";
import Login from "./components/Login.js";
import BookingPage from "./components/BookingPage.js";

import { Routes, Route } from 'react-router-dom';


function App() {
  return (

    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/about' element={<About />} />
      <Route path='/menu' element={<MenuPage />} />
      <Route path='/bookingpage' element={<BookingPage />} />
      <Route path='/login' element={<Login />} />




    </Routes>
  );
}

export default App;
