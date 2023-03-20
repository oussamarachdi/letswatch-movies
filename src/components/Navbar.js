import React from 'react'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='nav'>
        <Link to="/"><h1 className='nav-brand'>Let's <span>watch</span></h1></Link>
        <Link to="/my-list"><FormatListBulletedIcon className='icon'/></Link>
    </div>
  )
}

export default Navbar;