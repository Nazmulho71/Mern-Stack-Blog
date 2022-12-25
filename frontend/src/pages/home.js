import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/home.css";

function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    let config = {
      method: "get",
      url: "http://localhost:8000/api/blogs",
      headers: {},
    };

    axios(config)
      .then((res) => setBlogs(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="home bg-white border rounded-1">
      <div className="d-flex align-items-center justify-content-between mb-4">
        <p className="fw-bold m-0 opacity-50">NEW ON BLOG</p>
        <button className="btn btn-outline-primary">Write a Blog</button>
      </div>

      {blogs.map((blog, i) => (
        <div key={i}>
          <h4 className="fw-bold">{blog.title}</h4>

          <div className="d-flex align-items-center mt-3">
            <img
              src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
              alt=""
              height={200}
              className="me-4 rounded-1"
            />

            <p className="m-0">
              {blog.content}{" "}
              <span
                className="fw-bold text-primary"
                type="button"
                onClick={() => window.location.replace("/blog")}
              >
                Read more
              </span>
            </p>
          </div>

          <hr className="my-4" />
        </div>
      ))}
    </div>
  );
}

export default Home;
