import axios from "axios";
import React from "react";
import { useState } from "react";
import UserForm from "../Form/UserForm";
import { useNavigate } from "react-router-dom";

function User() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [errors, setErrors] = useState();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (formValidation(userData)) {
      await axios.post("http://localhost:4000/event", userData);
      navigate("/table");
      setUserData(userData);
      console.log(userData, "pppppppppp");
    }
  };
  const formValidation = (data) => {
    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    const { username, email, password } = data;

    let formErrors = {};
    let isValid = true;
    if (!username) {
      isValid = false;
      formErrors["username"] = "Username is required";
    } else if (!email) {
      isValid = false;
      formErrors["email"] = "Email is required";
    } else if (!password) {
      isValid = false;
      formErrors["password"] = "Password is required";
    } else {
      formErrors["email"] = null;
    }

    setErrors(formErrors);
    return isValid;
  };
  return (
    <div>
      <UserForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        userData={userData}
        errors={errors}
      />
    </div>
  );
}

export default User;
