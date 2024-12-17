let Form = ({ onSubmitHandler, item, setItem }) => {
  let onChange = (e) => {
    setItem(e.target.value);
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <input placeholder="Enter task" value={item} onChange={onChange} />
    </form>
  );
};

export default Form;
