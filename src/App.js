import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';


function App() {
  return (
    <div className='container'>
    <Header/>
    <Nav/>
    <Main/>
    <Footer/>
    <button className="btn" >Online Menu</button>
    </div>
  );
}

export default App;
