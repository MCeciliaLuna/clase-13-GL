import { useEffect } from "react";
import "./App.css";
import Button from "../src/components/Button.jsx";

function App() {
  useEffect(() => {
    const fetchUserByIndex = (index) => {
      fetch(`/api/users/${index}`) //fetch interno
        .then((res) => res.json())
        .then((data) => console.log(data));
    };

    fetchUserByIndex();
  }, []);

  return (
    <>
      <h1>Testeando</h1>
      <Button />
    </>
  );
}

export default App;
