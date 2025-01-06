import { NavLink } from 'react-router-dom';

import Home from '../pages/home';
import './home-layout.css';

export default function HomeLayout () {
  return (
    <div>
      <header>
        <nav className='nav'>
          <div>
            <NavLink to='/home' className='brand'> 
              <span className='brand-green'>Slytherin</span> 
              <span className='brand-white'>House</span>
            </NavLink>
          </div>
          <div>
            <NavLink className='nav-itens' to="common-room">common Room</NavLink>
            <NavLink className='nav-itens' to="characters">Characters</NavLink>
          </div>
        </nav> 
      </header>

      <Home />
      
    </div>
  )
}
