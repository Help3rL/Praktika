import React, { Component } from "react";
import imageLogo from "../../assets/images/logo.png";
import "./toolbar.css";
import { Routes, Route, Outlet, Link } from "react-router-dom";
const toolbar = (props: any) => {
  function linksGen(obj: any) {
    return Object.keys(obj).map((e) => {
      return (
        <li key={e} data-test={e}>
          <a href={obj[e]}>{e}</a>
        </li>
      );
    });
    return Object.keys(obj).map((e) => {
      return (
        <li key={e} data-test={e}>
          <Link to={obj[e]}>{e}</Link>
        </li>
      );
    });
  }
  return (
    <nav className="Toolbar">
      <div className="Logo">
        <a href="/">
          <img className="logoImage" src={props.logo} alt="BurgerBuilder" />
        </a>
      </div>
      <ul>
        {linksGen(props.links)}
        <Outlet />
      </ul>
    </nav>
  );
};
export default toolbar;
