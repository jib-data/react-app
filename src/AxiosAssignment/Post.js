const Post = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <div key={post.id}>
          <p>{post.name}</p>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  );
};
export default Post;
