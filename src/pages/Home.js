import CreateTour from "../components/Home-CreateTour/CreateTour";
import DestinationCategory from "../components/Home-Destination/destination";
import HomeMain from "../components/Home-MainSection/HomeMain";
import Comment from "../components/Home-comment/comment";

const Home = () => {
    return (
      <>
        <HomeMain />
        <CreateTour />
        <DestinationCategory />
        <Comment />
      </>
    );
}
 
export default Home;