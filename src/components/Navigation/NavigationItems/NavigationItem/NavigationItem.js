import React from 'react';
import classes from './NavigationItem.css';
const navigationItem = props => (
  <ul>
    <li className={classes.NavigationItem}>
      <a
        href={props.link}
        className={props.active ? classes.active : classes.null}
      >
        {props.children}
      </a>
    </li>
  </ul>
);

export default navigationItem;
