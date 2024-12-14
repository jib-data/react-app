import { useState } from "react";

const Body = (props) => {
  const [name, setName] = useState("");
  const onClickHandler = () => {
    setName(props.name);
  };
  return (
    <>
      <h3>Hello everybody, my name is {name}</h3>
      <p>And Oh, I am rendering from the body!</p>
      <button onClick={onClickHandler}>Add Name</button>
    </>
  );
};

export default Body;
