import logo from "./logo.svg";
import "./App.css";
import HelloWorld from "./components/Hello-World";
import MussumIpsum from "./components/Mussum-Ipsum";

// function HelloWorld() {
//   return <h1>HelloWorld</h1>;
// }

function App() {
  return (
    <div className="App">
      <HelloWorld />

      <MussumIpsum />
    </div>
  );
}

export default App;
