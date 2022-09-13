import fs from "fs";
import path from "path";
import matter from "gray-matter";
//point to overall project not only helper, add posts  which should point
const postsDirectory = path.join(process.cwd(), "posts")


export function getPostData(fn) {
   const fileName = path.join(postsDirectory, fn);
   //rread content of file
   //su[ppoert all unicode]
   const fileContent = fs.readFileSync(fileName,"utf-8");
   //we pass string,filecontent is string
   //matter will return obj with 2 pproperty ..data as js object and content as string
   const { data, content } = matter(fileContent);
   const postSlug = fileName.replace(/\.md$/, ''); //remove file extension
   const postData = {
      slug: postSlug,
      ...data,
      content: content,
   };
   return postData;
}
export function getAllPosts() {
   //read block wie data
   //return aray of strings(filename)
   const postFiles = fs.readdirSync(postsDirectory);
   // for(const postFile of postFiles) {
   //    const postData = getPostData(postFile);
   // }
   const allPosts = postFiles.map(postFile => {
      return getPostData(postFile);
   });
   console.log("all posts",allPosts);
   const sortedPosts = allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1);
   return sortedPosts;
}

export function getFeaturedPosts() {
   const allPosts = getAllPosts();
   console.log("alll",allPosts);
   const featuredPosts = allPosts.filter(post => post.isFeatured);
   console.log("featured",featuredPosts);
   return featuredPosts;
}