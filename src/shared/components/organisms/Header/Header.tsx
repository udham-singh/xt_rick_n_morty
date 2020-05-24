import React from "react";
// import { NavLink } from 'react-router-dom';
import "./header.scss";
import { HEADER_LOGO } from "../../../constants";

export const Header = () => {
  return (
    <header className="header">
      <figure className="header__logo">
        <img src={HEADER_LOGO} alt="logo" />
      </figure>
      {/* <nav className="nav">
                <ul className="nav__list">
                    {
                        NAV_MENU_ITEMS.map(item =>
                            <li className="nav__list__item" key={item.route}>
                                <NavLink 
                                    className="nav__list__item__link"
                                    activeClassName="nav__list__item__link--active"
                                    to={item.route}>
                                        {item.text}
                                </NavLink>
                            </li>
                        )
                    }
                </ul>
            </nav> */}
    </header>
  );
};
