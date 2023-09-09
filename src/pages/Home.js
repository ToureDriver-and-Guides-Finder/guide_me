import Footer from "../components/Footer";
import CreateTour from "../components/Home-CreateTour/CreateTour";
import DestinationCategory from "../components/Home-Destination/destination";
import HomeMain from "../components/Home-MainSection/HomeMain";
import Comment from "../components/Home-comment/comment";
import NavBar from "../components/Navbar";

const Home = () => {
    return (
      <>
        <NavBar />
        <HomeMain />
        <CreateTour />
        <DestinationCategory />
        <Comment />
        <Footer />
      </>
    );
}
 
export default Home;