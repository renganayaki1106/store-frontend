import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div>
        <ul>
            <li>
            <Link to="/">Home</Link>
                <Link to="/signup">Signup</Link>
            </li>
        </ul>
    </div>
  )
}

export default Header