import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import "hover.css";

const Nav = () => {
  return (
    <div className='hero-head'>
      <nav
        className='navbar has-background-warning is-warning'
        role='navigation'
        aria-label='main navigation'
      >
        <div className='container'>
          <div className='navbar-brand'>
            <Link to={"/"} className='navbar-item '>
              {"Restaurant".split("").map(letter => (
                <span className='hvr-float'>{letter}</span>
              ))}
            </Link>
            <a
              href
              role='button'
              className='navbar-burger burger'
              aria-label='menu'
              aria-expanded='false'
              data-target='navbarBasicExample'
            >
              <span aria-hidden='true' />
              <span aria-hidden='true' />
              <span aria-hidden='true' />
            </a>
          </div>

          <div
            id='navbarBasicExample'
            className='navbar-menu '
          >
            <div className='navbar-end has-text-centered '>
              <Link to={"/"} className='navbar-item '>
                {"Page1".split("").map(letter => (
                  <span className='hvr-float '>{letter}</span>
                ))}
              </Link>
              <Link to={"/menu"} className='navbar-item '>
                {"Menu".split("").map(letter => (
                  <span className='hvr-float'>{letter}</span>
                ))}
              </Link>
              <Link to={"/page3"} className='navbar-item '>
                {"Page3".split("").map(letter => (
                  <span className='hvr-float'>{letter}</span>
                ))}
              </Link>
              <Link to={"/page4"} className='navbar-item '>
                {"Page4".split("").map(letter => (
                  <span className='hvr-float'>{letter}</span>
                ))}
              </Link>
              <Link to={"/page5"} className='navbar-item '>
                {"Page5".split("").map(letter => (
                  <span className='hvr-float'>{letter}</span>
                ))}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
