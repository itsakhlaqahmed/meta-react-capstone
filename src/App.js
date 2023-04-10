import About from "./components/About.js"
import Homepage from "./components/Homepage";
import { Routes, Route } from 'react-router-dom';


function App() {
  return (

    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/about' element={<About />} />

    </Routes>
  );
}

export default App;
