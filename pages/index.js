// localhost:3000/posts/
import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
function HomePage() {
  return (
    <Fragment>
      {/* 1)hero ==> welcome screen andd present blog
        2)featured posts -->dummy data */}
      <Hero />
      <FeaturedPosts />
    </Fragment>
   )
}
export default HomePage;
