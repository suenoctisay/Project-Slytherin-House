import { NavLink, Outlet } from 'react-router-dom';
import Home from '../pages/home';

export default function HomeLayout () {
  return (
    <div>
      <header>
        <nav className='nav'>
          <div>
            <NavLink to="home" className='brand'> 
              <span className='brand-green'>Slytherin</span> 
              <span className='brand-white'>House</span>
            </NavLink>
          </div>
          <div>
            <NavLink className='nav-itens' to="commom-room">Commom Room</NavLink>
            <NavLink className='nav-itens' to="characters">Characters</NavLink>
          </div>
        </nav> 
      </header>

      <Home />
      
    </div>
  )
}
