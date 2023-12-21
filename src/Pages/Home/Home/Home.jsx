import { Helmet } from "react-helmet-async";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Fashion Store || Home</title>
      </Helmet>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
