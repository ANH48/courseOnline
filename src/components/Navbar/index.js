import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import logo from "../../assets/img/logoNMN.png";
import { logout } from "src/actions/auth";
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
  NavbarText,
  Button,
  InputGroup,
  Input,
  Form,
} from "reactstrap";

const NavMenu = ({ userInfo, listCourse }) => {
  const dispatch = useDispatch();
  let link = "/courses/";
  const [filter, setfilter] = useState("");
  const searchCourse = (event) => {
    setfilter(event.target.value);
  };
  // console.log(listCourse);
  let dataSearch = listCourse.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });
  const renderSearch = () => {
    if (filter == "") {
      return <></>;
    }
    const listCourses = dataSearch.map((Danhmuc, index) => (
      <Link key={index} to={link + Danhmuc.maDanhMuc}>
        <li>{Danhmuc.tenDanhMuc}</li>
      </Link>
    ));
    return <ul className="search__result">{listCourses}</ul>;
  };
  const removeLocalStorage = () => {
    try {
      localStorage.removeItem("userInfo");
      dispatch(logout());
    } catch (error) {
      console.log(error);
    }
  };
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const renderCourse = () => {
    return Object.entries(listCourse).map(([propstt, Danhmuc], index) => {
      const { tenDanhMuc, maDanhMuc } = Danhmuc;
      let links = link + maDanhMuc;
      // return <DropdownItem key={propstt}><Link to={links}>{tenDanhMuc}</Link></DropdownItem>;
      return (
        <Link to={links} key={propstt}>
          <DropdownItem>{tenDanhMuc}</DropdownItem>
        </Link>
      );
    });
  };
  useEffect(() => {
    renderisUser();
    console.log(userInfo);
  }, [userInfo])
  const renderisUser = () => {
    if (userInfo) {
      // const username = JSON.parse(
      //   localStorage.getItem("userInfo") ? localStorage.getItem("userInfo") : ""
      // );
      const username = userInfo?.taiKhoan;
      return (
        <>
          <UncontrolledDropdown>
            <DropdownToggle caret className="btn btn-success">
              USER
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Username: {username}</DropdownItem>
              {/* <DropdownItem disabled>Action</DropdownItem> */}
              {/* <DropdownItem>Another Action</DropdownItem> */}
              <DropdownItem divider />
              <DropdownItem onClick={() => removeLocalStorage()}>
                Logout
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </>
      );
    }
    return (
      <>
        <NavItem>
          <a href="http://localhost:3000/login">
            <Button className="btn btn-login">Login</Button>
          </a>
        </NavItem>
        <NavItem>
          <a href="http://localhost:3000/signup">
            <Button className="btn btn-login">Sign Up</Button>
          </a>
        </NavItem>
      </>
    );
  };
  return (
    <>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          <img className="img-logo img-fluid" src={logo} alt="logoNMN" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Category
              </DropdownToggle>
              <DropdownMenu right>{renderCourse()}</DropdownMenu>
            </UncontrolledDropdown>
            <InputGroup className="Search__form">
              <Input
                className="w-100"
                placeholder="Search course"
                type="text"
                value={filter}
                onChange={searchCourse.bind(this)}
              />
              {renderSearch()}
            </InputGroup>
            <NavItem>
              <NavLink href="/cart">
                <i className="fa fa-shopping-cart"></i>
              </NavLink>
            </NavItem>
            {renderisUser()}
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default NavMenu;
