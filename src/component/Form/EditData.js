import axios from "axios";
import React from "react";
import { useState } from "react";
import UserForm from "./UserForm";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function EditData() {
  const navigate = useNavigate();
  useEffect(() => {
    getEditData();
  }, []);

  const { id } = useParams();
  const [userData, setUserData] = useState({});

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const getEditData = async () => {
    await axios.get(`http://localhost:4000/event/${id}`).then((res) => {
      console.log(res.data, "uuuuuuuu");
      setUserData(res.data);
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userData) {
      await axios
        .put(`http://localhost:4000/event/${id}`, userData)
        .then((res) => {
          setUserData(res.data);
        });
    }
    navigate("/table");
  };

  return (
    <>
      <UserForm
        handleChange={handleChange}
        userData={userData}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default EditData;
