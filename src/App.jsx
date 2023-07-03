import { useEffect } from "react";
import "./App.css";

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
    </>
  );
}

export default App;
