import { useState, useEffect } from "react";
import BlogList from "./homeComponents/blogLists";

const PropDemo = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My name Bhanu",
      body: "Lorem impsum....",
      author: "bhanu",
      id: 1,
    },
    {
      title: "My name Rajeev",
      body: "Lorem Ipsum...",
      author: "rejeev gupta",
      id: 2,
    },
    {
      title: "My name Mohsin",
      body: "Lorem Ipasum ...",
      author: "bhanu",
      id: 3,
    },
  ]);
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("use Effect ran");
  });
  return (
    <div className="propdemo">
      <BlogList blogs={blogs} title="सभी खबरें" handleDelete={handleDelete} />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "bhanu")}
        title="देश खबरें"
      />
    </div>
  );
};

export default PropDemo;
