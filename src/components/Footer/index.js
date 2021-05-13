import React from "react";
import logo from "../../assets/img/logoNMN.png";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-widgets">
        <div className="container">
          <div className="row">
            <div className="logo col-3">
              <div className="img">
                <img
                  src={logo}
                  className="img-logo img-fluid mb-2"
                  alt="logoNMN"
                />
              </div>
              <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
                quam nisi dolorem atque sed, porro assumenda eum ab aut
                delectus, fugiat, praesentium quos corporis corrupti ad. Fugiat
                perferendis quibusdam distinctio.
              </div>
            </div>
            <div className="nav-menu col-3">
              <div className="title">
                <h4>Important</h4>
              </div>
              <ul>
                <li>
                  <a href="">Udemy for Business</a>
                </li>
                <li>
                  <a href="">Enseigner sur Udemy</a>
                </li>
                <li>
                  <a href="">Contactez-nous</a>
                </li>
              </ul>
            </div>
            <div className="contact-info col-3">
              <div className="title">
                <h4>Contact For me</h4>
              </div>
              <ul>
                <li>
                  <span>
                    <i className="fa fa-map-marker-alt"></i>
                    <h6>Location:</h6>
                  </span>
                  <p>1344 Joes Road, Kinderhook, NY, New York 12106.</p>
                </li>
                <li>
                  <span>
                    <i className="far fa-paper-plane"></i>
                    <h6>Phone:</h6>
                  </span>
                  <p>123-456-7890, 123-456-0101</p>
                </li>
                <li>
                  <span>
                    <i className="fas fa-phone"></i>
                    <h6>Email:</h6>
                  </span>
                  <p>hello@schooling.com</p>
                </li>
              </ul>
            </div>
            <div className="join col-3">
              <div className="join-container">
                <div className="join-content">
                    <h4>Become Teacher</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores, fugiat.
                  </p>
                  <button className="btn btn-join">John With Us</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="site-info">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-6">
              <p>© 2018, All Rights Reserved.</p>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="footer-social text-right">
                <ul>
                  <li>
                    <a href="#" target="_blank">
                      <i className="fab fa-facebook" />
                      <span>Our Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="fab fa-twitter" />
                      <span>Our Twitter</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
