import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => (
  <div>
    <NavLink to='/' className='nav-link'>
        главная
    </NavLink>
    <NavLink to='/about' className='nav-link'>
        О проекте
    </NavLink>
  </div>
);

export default Menu;
