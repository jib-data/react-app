import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";

function App() {
  const name = "Jibril";
  return (
    <div className="App">
      <Header />
      <Body name={name} />

      <Footer />
    </div>
  );
}

export default App;
