import React from "react";
import logo from "../Images/Logo.png"
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={logo} width={200} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse align-items-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

            <li>
              <a href="/">
                <h1 className="head-logog">City of Passau</h1>

              </a>

            </li>

          </ul>
          <form
            className="d-flex align-items-center gap-3/home/psreact/Pictures/sccout/src/Compenents/imgUrl.js"
            role="search"
          >

            <div id="google_translate_element"></div>

            <a href="/login" className="btn btn-outline-success ms-3" type="submit">
              Login
            </a>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;

