import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { IoCart } from "react-icons/io5";
import { SiIfood } from "react-icons/si";

const Navigation = () => {
  return (
    <Fragment>
      <nav className="nav">
        <Link to="/" className="logo-container">
          <span className="logo">
            <SiIfood />
          </span>
        </Link>
        <div className="links-container">
          <Link to="/menu">Menu</Link>
          <Link to="/auth">Sign In</Link>
          <IoCart />
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
