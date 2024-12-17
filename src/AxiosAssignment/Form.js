import axios from "axios";
import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

let Form = () => {
  let [userName, setUserName] = useState("");
  let [userEmail, setUserEmail] = useState("");
  let [userBody, setUserBody] = useState("");
  let [deleteId, setDeleteId] = useState("");

  let onNameChange = (e) => {
    setUserName(e.target.value);
  };
  let onEmailChange = (e) => {
    setUserEmail(e.target.value);
  };
  let onBodyChange = (e) => {
    setUserBody(e.target.value);
  };
  let onDeleteChangeHandler = (e) => {
    setDeleteId(e.target.value);
  };

  // Post request
  let onPostSubmit = async (e) => {
    setUserName("");
    setUserEmail("");
    setUserBody("");
    e.preventDefault();
    if (userName !== "" && userEmail !== "" && userBody !== "") {
      let formData = {
        id: 11,
        name: userName,
        email: userEmail,
        body: userBody,
      };

      axios
        .post("http://localhost:8000/posts", JSON.stringify(formData))
        .then((response) => {
          console.log(response);
        })
        .catch((error) => console.log(error));
    }
  };
  // Delete request
  let onDelete = () => {
    setDeleteId("");
    axios
      .delete(`http://localhost:8000/posts/${deleteId}`)
      .then((response) => {
        console.log(response.status);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Put request
  let onPut = (e) => {
    setUserName("");
    setUserEmail("");
    setUserBody("");
    e.preventDefault();
    if (userName !== "" && userEmail !== "" && userBody !== "") {
      let formData = {
        id: 11,
        name: userName,
        email: userEmail,
        body: userBody,
      };

      axios
        .put("http://localhost:8000/posts", JSON.stringify(formData))
        .then((response) => {
          console.log(response);
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <>
      <form onPostSubmit={onPostSubmit}>
        <h3>Enter Form Details</h3>
        <Input data={userName} onChange={onNameChange} />
        <Input data={userEmail} onChange={onEmailChange} />
        <Input data={userBody} onChange={onBodyChange} />
        <Button onSubmit={onPostSubmit} />
      </form>
      <Input data={deleteId} onChange={onDeleteChangeHandler} />
      <button onClick={onDelete}>Click to Delete</button>
      <button onClick={onPut}>Update Item</button>
    </>
  );
};
export default Form;
