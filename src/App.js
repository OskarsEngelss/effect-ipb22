import ToDo from "./ToDo.js";
import { useEffect, useState } from "react";

function App() {
  const [toDo, setToDo] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    async function getToDo() {
      setLoading(true);

      const response = await fetch("https://jsonplaceholder.typicode.com/todos/4");
      const data = await response.json();
      
      setToDo(data);
      setLoading(false);
    }

    getToDo();
  }, []);

  return (
    <>
      {loading === false ? <ToDo {...toDo}/> : <p>No info to load..</p>}
    </>
  );
}

export default App;
