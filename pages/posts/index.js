import AllPosts from "../../components/posts/all-posts";
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
 
// /posts
function AllPostsPage() {
   return (
     <div>
        <AllPosts posts={DUMMY_POSTS}/>
     </div>
    )
 }
 export default AllPostsPage;