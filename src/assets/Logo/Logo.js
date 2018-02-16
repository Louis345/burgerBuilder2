import React from 'react';

import burgerLogo from '../Images/burger-logo.png';
import classes from './Logo.css';
const logo = props => (
  <div>
    <img src={burgerLogo} className={classes.Logo} alt="myBurger" />
  </div>
);

export default logo;
