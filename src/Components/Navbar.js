import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css';
import ToolsDropdown from './ToolsDropdown'
import ResourceDropdown from './ResourceDropdown';

function Navbar() {
    const[click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const [toolsdropdown, setToolsDropdown] = useState(false);

    const onToolsMouseEnter = () => {
        if(window.innerWidth < 960){
            setToolsDropdown(false);
        } else{
            setToolsDropdown(true);
        }
    }
    const onToolsMouseLeave = () => {
        if(window.innerWidth < 960){
            setToolsDropdown(false);
        } else{
            setToolsDropdown(false);
        }
    }


    const [resourcedropdown, setResourceDropdown] = useState(false);

    const onResourceMouseEnter = () => {
        if(window.innerWidth < 960){
            setResourceDropdown(false);
        } else{
            setResourceDropdown(true);
        }
    }
    const onResourceMouseLeave = () => {
        if(window.innerWidth < 960){
            setResourceDropdown(false);
        } else{
            setResourceDropdown(false);
        }
    }

    return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/Persistent-Purpose/' className='navbar-logo' onClick={closeMobileMenu}>
            Persistent Purpose
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/Persistent-Purpose/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/my-life'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                My Life
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/my-work'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                My Work
              </Link>
            </li>
            <li className='nav-item'
                onMouseEnter={onToolsMouseEnter}
                onMouseLeave={onToolsMouseLeave}
            >
              <Link
                to='/tools'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Tools <i className='fas fa-caret-down'/>
              </Link>
              {toolsdropdown && <ToolsDropdown/>}
            </li>
            <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            <li className='nav-item'
                onMouseEnter={onResourceMouseEnter}
                onMouseLeave={onResourceMouseLeave}
            >
              <Link
                to='/resources'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Resources <i className='fas fa-caret-down'/>
              </Link>
              {resourcedropdown && <ResourceDropdown/>}
            </li>
            <li className='nav-item'>
              <Link
                to='/search'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <i className="fas fa-search"></i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar