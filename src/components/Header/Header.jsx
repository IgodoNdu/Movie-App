import React from 'react';
//for links/redirects
import { Link } from 'react-router-dom';
import user from '../../images/user.png';

const Header = () => {
  return (
    <div className='header'>
      <Link to='/'>
        <div className='logo'>Movie App</div>
      </Link>
      <div className='user-logo'>
        <img src={user} alt='user' />
      </div>
    </div>
  )
}

export default Header;
