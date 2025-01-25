
import Header from "./components/Header";
import NewArrivals from "./components/NewArrivals";
import OurBlogs from "./components/OurBlogs";
import OurInstagram from "./components/OurInstagram";
import Side from "./components/Side";
import TopPicks from "./components/TopPicks";



function Home() {
  return (
    <>
  
      <Header />
      <Side />
      <TopPicks />
      <NewArrivals />
      <OurBlogs />
      <OurInstagram />
      
    </>
  );
}

export default Home;