const BlogList = ({ blogs, title, handleDelete }) => {
  return (
    <div className="blog-list">
      <h1> {title} </h1>
      {blogs.map((blog) => (
        <div className="blog" id={blog.id}>
          <h1> {blog.title} </h1>
          <p>Written {blog.body} </p>
          <p> {blog.id} </p>
          <p> {blog.author} </p>
          <button onClick={() => handleDelete(blog.id)}>delete blog</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
