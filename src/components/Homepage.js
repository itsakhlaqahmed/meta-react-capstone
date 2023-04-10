import Main from './Main';
import Nav from './Nav';


const Homepage = () => {
    return (
        <div className='container'>
            <Nav/>
            <Main/>
            <button className="btn" >Online Menu</button>
        </div>
    )
}


export default Homepage;