import { FC } from 'react';

import './navbar.css'

const Navbar: FC = () => {
  return (
    <div className='navbar'>
      <div className='navbar__link'>Poster</div>
      <div className='navbar__link'>Badge</div>
      <div className='navbar__link'>About</div>
    </div>
  )
}

export { Navbar };