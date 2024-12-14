import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import Post from "./Post";

function App() {
  const name = "Jibril";
  return (
    <div className="App">
      <Header />
      <Body name={name} />
      <Post />
      <Footer />
    </div>
  );
}

export default App;
