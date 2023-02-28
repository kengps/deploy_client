import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavbarComponent from "./NavbarComponent";

const SingleComponent = () => {
  const slug = useParams();
  const props = slug.slug;
  console.log("props" + props);

  const [blog, setBlog] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API}/blog/${props}`
        );
        setBlog(response.data);
        // console.log('single '+ response.data.slug + JSON.stringify(response));
      } catch (err) {
        alert(err);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="container">
      <NavbarComponent />
      <h3>{blog.title}</h3>
      <div dangerouslySetInnerHTML={{ __html: blog.content }} />
     {/* <p>{blog.content}</p> */}
      <p>
        เผยแพร่โดย : {blog.author} เมื่อ{" "}
        {new Date(blog.createdAt).toLocaleString()}
      </p>
    </div>
  );
};

export default SingleComponent;
