import axios from "axios";
import { useEffect, useState } from "react";
import Post from "./Post";
import Form from "./Form";

const AxiosDemo = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/posts")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Form />
      <Post posts={data} />
    </>
  );
};

export default AxiosDemo;
