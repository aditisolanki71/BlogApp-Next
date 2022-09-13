// localhost:3000/posts/
import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
const DUMMY_POSTS = [
  { 
    slug: "getting-started-with-nextjs", 
    title: "Getting started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt: "Next JS is a React Framework for Production - it makes building fullstack React apps and sites a breeze", 
    date: "2022-09-13"
  },
  { 
    slug: "getting-started-with-nextjs2", 
    title: "Getting started with NextJS2",
    image: "getting-started-nextjs.png",
    excerpt: "Next JS is a React Framework for Production - it makes building fullstack React apps and sites a breeze", 
    date: "2022-09-14"
  },
  { 
    slug: "getting-started-with-nextjs3", 
    title: "Getting started with NextJS3",
    image: "getting-started-nextjs.png",
    excerpt: "Next JS is a React Framework for Production - it makes building fullstack React apps and sites a breeze", 
    date: "2022-09-15"
  },
  { 
    slug: "getting-started-with-nextjs4", 
    title: "Getting started with NextJS4",  
    image: "getting-started-nextjs.png",
    excerpt: "Next JS is a React Framework for Production - it makes building fullstack React apps and sites a breeze", 
    date: "2022-09-16"
  },
];
function HomePage() {
  return (
    <Fragment>
      {/* 1)hero ==> welcome screen andd present blog
        2)featured posts -->dummy data */}
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS}/>
    </Fragment>
   )
}
export default HomePage;
