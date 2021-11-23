import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("/movies")
      .then((resp) => resp.json())
      .then((movies) => console.log(movies));
  }, []);
  return <h1>Hello from React</h1>;
}

export default App;
