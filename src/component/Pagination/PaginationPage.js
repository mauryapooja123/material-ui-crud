import {
  TableCell,
  TableRow,
  TextField,
  TableBody,
  TableHead,
} from "@mui/material";
import Pagination from "@mui/material/Pagination";
import React from "react";

const PaginationPage = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    // <Pagination count={8}>
    //   {/* {console.log(pageNumbers, "kkkkkkkkkkkkk")}
    //   {console.log(totalPosts, "kkkkkkkklllllllllllll")} */}

    //   <TableRow>
    //     {pageNumbers.map((number) => (
    //       <TableCell key={number}>
    //         <TextField onClick={() => paginate(number)}>{number}</TextField>
    //       </TableCell>
    //     ))}
    //   </TableRow>
    // </Pagination>
    // <Pagination count={8}>
    //   {pageNumbers.map((number) => (
    //     <TableRow key={number}>
    //       <p onClick={() => paginate(number)}>{number}</p>
    //     </TableRow>
    //   ))}
    // </Pagination>
    // <TableHead>
    //   {pageNumbers.map((number) => (
    //     <TableCell>
    //       <TableRow onClick={() => paginate(number)}>{number}</TableRow>
    //     </TableCell>
    //   ))}
    // </TableHead>
    // <Pagination count={8}>

    //    {pageNumbers.map((number) => (
    //     <TableCell>
    //       <TableRow >{number}</TableRow>
    // </TableCell>
    //    ))}

    // </Pagination>

    <ul className="pagination">
      {pageNumbers.map((number) => (
        <li key={number} className="page-item">
          <p onClick={() => paginate(number)} className="page-link">
            {number}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default PaginationPage;
