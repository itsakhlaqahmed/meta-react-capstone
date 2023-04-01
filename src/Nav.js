// import Logo from 'icons_assets/Logo.svg';
import { useState } from 'react';

const Nav = () => {
    const [Navlinks, Setnavlinks] = useState(
        ['Home', 'About', 'Menu', 'Reservation', 'Order', 'Online', 'Login']
    )

    return (
        <nav>
            <img src={'icons_assets/Logo.svg'} alt='logo'/>
            <ul>
                
            {
                Navlinks.map((name, index) => {
                    return (
                        <li key={index}>{name}</li>
                    )
                })
            }
            </ul>
        </nav>
    )

    
}

export default Nav;