import GetPosts from '../utils/getPosts';
import BlogCard from '../components/blogCard';

export default async function Page() {
  const data = await GetPosts();
  console.log(data)
  return (
    <div className="container flex flex-col sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto justify-center items-center gap-4">
      {data.map((blog) => (
        <BlogCard
          key={blog.posts.title}
          slug={blog.posts.slug}
          title={blog.posts.title}
          date={blog.posts.date}
          authors={blog.posts.authors}
          metaTitle={blog.posts.metaTitle}
          imageURL={blog.posts.socialImage}
          height={blog.posts.socialImageHeight}
          width={blog.posts.socialImageWidth}
        />
      ))}
    </div>
  );
}
