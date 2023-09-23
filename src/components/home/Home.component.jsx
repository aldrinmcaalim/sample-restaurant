import { Fragment } from "react";
import { IoFastFoodSharp } from "react-icons/io5";
import { SiFoodpanda } from "react-icons/si";
import { BiSolidFoodMenu } from "react-icons/bi";

const Home = () => {
  return (
    <Fragment>
      <nav className="nav">
        <div className="logo-container">
          <span className="logo">Logo</span>
        </div>
        <div className="links-container">
          <a href="#">Menu</a>
          <a href="#">Sign In</a>
          <a href="#">Cart</a>
        </div>
      </nav>
      <div className="hero">
        <h1>Sample Restaurant</h1>
        <h3>Tasty Food</h3>
      </div>
      <div className="offers">
        <span className="offer">
          <IoFastFoodSharp />
          Delicious Food
        </span>
        <span className="offer">
          <SiFoodpanda />
          Incredible Experience
        </span>
        <span className="offer">
          <BiSolidFoodMenu />
          Quality Menu
        </span>
      </div>
      <footer className="footer">
        <p>&#8482;Sample Restaurant &copy;{new Date().getFullYear()}</p>
      </footer>
    </Fragment>
  );
};

export default Home;
