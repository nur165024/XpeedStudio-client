/**
 * Title: user form submit
 * description: user form submit get .txt file get data and calculate total number
 * name: Nure Alam
 * date: 15/2/2022
 */
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const UserForm = () => {
  // react route dom redirect
  let navigate = useNavigate();
  // react hook
  const [calculateTitle, setCalculateTitle] = useState("");
  const [calculateNumber, setCalculateNumber] = useState(0);
  const [filePath, setFilePath] = useState("");

  // image upload
  const handleChange = (e) => {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    axios
      .post("http://localhost:5000/image/upload", formData, {})
      .then((res) => {
        setCalculateNumber(res.data.data.calculateNumber);
        setFilePath(res.data.data.filePath);
      });
  };

  // form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    // object user data
    const userData = {
      calculateTitle,
      calculateNumber,
      filePath,
    };
    // user calculate data call api
    axios.post("http://localhost:5000/user", userData, {}).then((res) => {
      console.log(res.data);
      if (res.data.status) {
        navigate("/");
      } else {
        return 0;
      }
    });
  };

  return (
    <div className="container">
      {/* header */}
      <div style={{ marginBottom: 25 }}>
        <Link to={"/"} style={{ color: "red" }}>
          Back
        </Link>
      </div>
      {/* user form */}
      <form
        onSubmit={handleSubmit}
        method="post"
        encType="multipart/form-data"
        style={{ border: "1px solid", padding: 20 }}
      >
        <div>
          <label htmlFor="title">Calculation Title</label>
          <br />
          <input
            type="text"
            name="calculateTitle"
            id="title"
            placeholder="Calculation Title"
            onChange={(e) => setCalculateTitle(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="txtFile">Upload TxtFile</label>
          <br />
          <input type="file" onChange={handleChange} name="file" id="txtFile" />
        </div>
        <br />
        <button type="submit">Calculate</button>
      </form>
    </div>
  );
};

export default UserForm;
