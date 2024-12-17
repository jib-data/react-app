import "./App.css";
import AxiosDemo from "./AxiosAssignment/AxiosDemo";

import Header from "./Header";
import ToDoContainer from "./Todo.js/ToDoContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <ToDoContainer />
    </div>
  );
}

export default App;
