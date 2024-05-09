import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeaturedJobs from "../FeaturedJob/FeaturedJobs";

function Home() {
  return (
    <div className="min-h-screen">
      <Banner />
      <CategoryList />
      <FeaturedJobs />
    </div>
  );
}

export default Home;
