// /posts
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../helpers/posts-util"

function AllPostsPage(props) {
   return (
     <div>
        <AllPosts posts={props.posts}/>
     </div>
    )
 }
 export function getStaticProps() {
    const getAllPost = getAllPosts();
    return {
       props: {
          posts: getAllPost
       },
       revalidate: 100
    }
 }
 export default AllPostsPage;