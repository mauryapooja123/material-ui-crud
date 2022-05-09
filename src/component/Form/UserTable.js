import React from "react";
import {
  Table,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import { Container } from "@mui/material";

function UserTable(props) {
  const navigate = useNavigate();
  return (
    <>
      <Container maxWidth="sm">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell>email</TableCell>
              <TableCell>Password</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data.map((data) => (
              <TableRow>
                <TableCell>{data.username}</TableCell>
                <TableCell>{data.email}</TableCell>
                <TableCell>{data.password}</TableCell>
                <TableCell>
                  <CreateIcon
                    variant="contained"
                    type="submit"
                    onClick={() => navigate(`/edit/${data.id}`)}
                  ></CreateIcon>

                  <DeleteIcon
                    variant="contained"
                    type="submit"
                    onClick={() => props.handelDelete(data.id)}
                  >
                    delete
                  </DeleteIcon>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    </>
  );
}

export default UserTable;
