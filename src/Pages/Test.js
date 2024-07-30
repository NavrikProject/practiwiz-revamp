import axios from "axios";
import React, { useState } from "react";

const Test = () => {
  const [image, setImage] = useState(null); // Initialize state to null
  const [name, setName] = useState(null); // Initialize state to
  const SendBackend = async (event) => {
    event.preventDefault();
    if (!image) {
      console.log("No file selected");
      return;
    }
    try {
      const data = new FormData();
      data.append("file", image);
      data.append("name", name);
      const response = await axios.post(
        "http://localhost:1337/api/v1/mentor/registration/test",
        data
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={SendBackend} encType="multipart/form-data">
        <input
          type="file"
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        />
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Test;
