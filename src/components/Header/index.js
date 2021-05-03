import React, { useEffect } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import { login } from "src/actions/auth";
import Example from "../Navbar";
import { useDispatch, useSelector } from "react-redux";

export default function Header() {
  const { userInfo, isLoading, error } = useSelector((state) => state.auth);
  // if(isLoading){
  //   return <div>isLoading</div>
  // }
  return (
    <div>
      {/* <Link className="mr-2" to="/">Home</Link>
            <Link className="mr-2" to="/courses/FullStack">Courses</Link>
            <Link className="mr-2" to="/course/BackEnd">Course Detail</Link> */}
      {/* <link to="/">Home</link> */}
      <div className="header">
        <div className="header-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="header-left-content">
                  <span className="hour">
                    <i className="far fa-clock"></i>
                    Mon - Fri : 09:00 - 17:00
                  </span>
                  <span className="email">
                    <i className="far fa-paper-plane"></i>
                    <a href="#">hello@reptro.com</a>
                  </span>
                  <span className="phone">
                    <i className="fas fa-phone"></i>
                    0346211079
                  </span>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="header-social text-right">
                  <ul>
                    <li className="twiter">
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="facebook">
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="google">
                      <a href="#">
                        <i className="fab fa-google-plus-g"></i>
                      </a>
                    </li>
                    <li className="intargram">
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li className="youtube">
                      <a href="#">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="navMenu">
          <Example 
            userInfo
            >
            </Example>
              
        </div>
      </div>
    </div>
  );
}
