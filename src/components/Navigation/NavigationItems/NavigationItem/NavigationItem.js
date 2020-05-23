import React from "react";
import classes from "./NavigationItem.css";
import { NavLink } from "react-router-dom";

const navigationItem = (props) => (
  <li className={classes.NavigationItem}>
    {props.active}
    <NavLink
      to={props.link}
      exact={props.exact}
      activeClassName={classes.active}
    >
      {props.children}
    </NavLink>
  </li>
);

export default navigationItem;
