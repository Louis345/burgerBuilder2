import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../../assets/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
const toolbar = () => (
  <header className={classes.Toolbar}>
    <div>Menu</div>
    <Logo />
    <NavigationItems />
  </header>
);

export default toolbar;
