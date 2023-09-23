import { Fragment } from "react";
import { IoFastFoodSharp } from "react-icons/io5";
import { SiFoodpanda } from "react-icons/si";
import { BiSolidFoodMenu } from "react-icons/bi";
import Navigation from "../../routes/navigation/Navigation.component";
import Footer from "../../routes/footer/Footer.component";

const Home = () => {
  return (
    <Fragment>
      <Navigation />
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
      <Footer />
    </Fragment>
  );
};

export default Home;
