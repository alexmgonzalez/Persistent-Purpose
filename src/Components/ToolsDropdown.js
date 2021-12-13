import React, {useState} from 'react'
import './Dropdown.css'
import {ToolsItems} from './MenuItems'
import {Link} from 'react-router-dom'

function ToolsDropdown(){
    const [click, setClick] = useState(false);
    
    const handleClick = () => setClick(!click);
    
    return(
        <>
            <ul onClick={handleClick}
            className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                {ToolsItems.map((item,index) => {
                    return(
                        <li key={index}>
                            <Link className={item.cName} to={item.path} onClick={() => setClick(false)}>
                                {item.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default ToolsDropdown;