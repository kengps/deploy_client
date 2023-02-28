import React, { useEffect, useState } from "react";
import NavbarComponent from "./NavbarComponent";
import axios from "axios";
import SweetAl from "sweetalert2";
import { authenticate, getUser } from "../service/authorize";
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const history = useNavigate();
  //const props = useParams();

  console.log("asd" + history);

  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const { username, password } = state;

  const inputValue = (name) => (event) => {
    setState({ ...state, [name]: event.target.value });
    //console.log(name, "=", event.target.value);
  };

  // }
  const submitForm = async (event) => {
    event.preventDefault();
    //console.log({title , content , author});
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_API}/login`,
        { username, password }
      );
      SweetAl.fire("แจ้งเตือน", "เข้าสู่ระบบสำเร็จ", "success");
      // ถ้าlogin สำเร็จ

      authenticate(response, () => history("/create"));
    } catch (error) {
      SweetAl.fire("แจ้งเตือน", error.response.data.error, "error");
    }
  };

  //ทำการตรวจสอบว่ามีการล็อคอินเข้ามาแล้วหรือยัง หากมีแล้วจะไม่สามารถเข้า login ได้อีก
  useEffect(() => {
    getUser() && history("/");
  }, []);
  return (
    <div className="container p-5">
      <NavbarComponent />
      <hr />
      <h1>เข้าสู่ระบบ | Admin </h1>
      {JSON.stringify(state)}
      <form onSubmit={submitForm}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={inputValue("username")}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={inputValue("password")}
          />
        </div>
        <hr />
        <input type="submit" className="btn btn-primary" value="Submit" />
      </form>
      <br />
    </div>
  );
};

export default LoginComponent;
