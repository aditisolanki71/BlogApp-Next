import ReactMarkdown from "react-markdown";
import classes from "./post-content.module.css";
import PostHeader from "./post-header";
import image from "next/image";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
function PostContent(props) {
   const { post } = props;
   console.log("postcntent",post);
   const imagePath = `/images/posts/${post?.slug}/${post?.image}`;
   const customRenderers = {
      // image(image) {
      //   return (
      //     <Image
      //       src={`/images/posts/${post.slug}/${image.src}`}
      //       alt={image.alt}
      //       width={600}
      //       height={300}
      //     />
      //   );
      // },
      paragraph(paragraph) {
        const { node } = paragraph;
  
        if (node.children[0].type === 'image') {
          const image = node.children[0];
  
          return (
            <div className={classes.image}>
              <Image
                src={`/images/posts/${post.slug}/${image.url}`}
                alt={image.alt}
                width={600}
                height={300}
              />
            </div>
          );
        }
  
        return <p>{paragraph.children}</p>;
      },
      code(code) {
         const {language,value} = code;
         return (
            <SyntaxHighlighter 
               style={atomDark} 
               language={language} 
               children={value}
            />
         )
      }
    };
  
   console.log("custom",customRenderers);
   return (
      <article className={classes.content}>
         <PostHeader 
            title={post?.title}
            image={imagePath}
         />
         <ReactMarkdown renderers={customRenderers}>{post?.content}</ReactMarkdown>
      </article>
   )
}
export default PostContent;