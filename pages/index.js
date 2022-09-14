// localhost:3000/posts/
import { Fragment } from "react";
import Head from "next/head";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../helpers/posts-util";
function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Aditi's Blog</title>
        <meta name="description" content="Post about Programming" />
      </Head>
      {/* 1)hero ==> welcome screen andd present blog
        2)featured posts -->dummy data */}
      <Hero />
      <FeaturedPosts posts={props.posts}/>
    </Fragment>
   )
}
//we can use getSErversideProps here but it doesn;t make sense it just slow down the app here
//posts are stable,most post will nvr be change
export function getStaticProps() {
  const FeaturedPosts = getFeaturedPosts();
  return {
    props: {
      posts : FeaturedPosts
    },
    //re-render after deployment
    revalidate: 60
  }
}
export default HomePage;
