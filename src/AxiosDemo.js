import axios from "axios";
import { useEffect, useState } from "react";
import Comment from "./Comment";

const AxiosDemo = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <Comment comments={data} />;
};

export default AxiosDemo;
