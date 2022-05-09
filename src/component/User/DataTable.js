import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import UserTable from "../Form/UserTable";

function DataTable() {
  useEffect(() => {
    getData();
  });
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await axios.get("http://localhost:4000/event");
    setData(res.data);
  };

  const handelDelete = async (id) => {
    const res = await axios.delete(`http://localhost:4000/event/${id}`);
    console.log(res.data, ";lllllllllllll");
    getData();
  };
  return (
    <div>
      <UserTable data={data} handelDelete={handelDelete} />
    </div>
  );
}

export default DataTable;
