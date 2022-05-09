import React from "react";

import { Table, TableCell, TableRow } from "@mui/material";
const Post = (props) => {
  return (
    <>
      <p>
        {props.posts.map((post, i) => (
          <TableRow key={i}>
            <TableCell>
              #{post.id} {post.username}
            </TableCell>
            <TableCell>{post.password}</TableCell>
          </TableRow>
        ))}
      </p>
    </>
  );
};

export default Post;
