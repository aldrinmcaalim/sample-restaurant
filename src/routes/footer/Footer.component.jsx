import { Fragment } from "react";
import { Outlet } from "react-router-dom";

const Footer = () => {
  const getCurrentYear = () => {
    console.log("Footer Component Line 5 Here");
    return new Date().getFullYear();
  };

  return (
    <Fragment>
      <Outlet />
      <footer className="footer">
        <p>&#8482;Sample Restaurant &copy;{getCurrentYear()}</p>
      </footer>
    </Fragment>
  );
};

export default Footer;
