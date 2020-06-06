import PostPreview from "./post-preview";

export default function PostList({ posts, ...props }) {
  return (
    <>
      {posts.map((post) => (
        <PostPreview
          key={post.slug}
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
          slug={post.slug}
          location={post.location}
          excerpt={post.excerpt}
        />
      ))}
    </>
  );
}
