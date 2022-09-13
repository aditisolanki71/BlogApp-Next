// http://localhost:3000/posts/getting-started-with-nextjs

import PostContent from "../../components/post-detail/post-content";
import { getPostData , getPostsFiles} from "../../helpers/posts-util"
function PostDetailPage(props) {
   return (
      <PostContent post={props.post}/>
    )
 }
 export function getStaticProps(context) {
    const { params } = context;
    const { slug } = params;
    const postData = getPostData(slug);
    return {
       props: {
          post: postData
       },
       revalidate: 600
    }
 }
 export function getStaticPaths() {
    //get all file name with extension
   const postFileNames = getPostsFiles();
   const slugs = postFileNames.map(fileName => fileName.replace(/\.md$/, '')); //remove file extension
   return {
      //empty array and fallback,data will be false pre-render all post is not difficult and define all path in advance
      //get all paths first
      //pre-generate single post page for all post page in advance
      paths: slugs.map(slug => ({ params: { slug:slug }})),
      fallback: false
   }
   //  return {
   //     //empty array and fallback,data will be prepare and fetch whn page render
   //     paths: [],
   //     fallback: true
   //  }
   //  return {
   //    //empty array and fallback,data will be prepare and fetch whn page render and till waiting time show previous page
   //    paths: [],
   //    fallback: 'blocking'
   // }
   //  return {
   //    paths: [{params: {slug: }}],
   // }

 }
 export default PostDetailPage;