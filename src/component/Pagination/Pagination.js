import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Post from "../User/Post";
import PaginationPage from "./PaginationPage";

function PaginationForm() {
  const [posts, setPosts] = useState([]);
  //const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      //setLoading(true);
      const res = await axios.get(" http://localhost:4000/event");
      setPosts(res.data);
      //   setLoading(false);
    };

    fetchPosts();
  }, []);
  //   console.log(posts, "pppppppppppppppp");
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h4>Pagination Component </h4>

      <Post posts={currentPosts} />
      <PaginationPage
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
}

export default PaginationForm;
