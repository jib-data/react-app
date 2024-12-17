import { useState } from "react";
import Form from "./Form";
import List from "./List";
import ItemCount from "./ItemCount";

let ToDoContainer = () => {
  let [items, setItems] = useState([]);
  let [item, setItem] = useState("");

  let onSubmitHandler = (e) => {
    e.preventDefault();

    if (e.target.value !== "") {
      setItem(e.target.value);
      console.log(items);
      setItems([...items, item]);
    }
    setItem("");
  };

  let onDeleteItem = (deletedItem) => {
    setItems(
      items.filter((item) => {
        return item !== deletedItem;
      })
    );
  };

  return (
    <>
      <h4>Enter Your Daily Task</h4>
      <Form onSubmitHandler={onSubmitHandler} item={item} setItem={setItem} />
      <List items={items} onDeleteItem={onDeleteItem} />
      <ItemCount items={items} />
    </>
  );
};

export default ToDoContainer;
