import ToDo from "./ToDo.js";
import Comment from "./Comment.js";
import Spinner from "./Spinner.js";
import { useEffect, useState } from "react";

function App() {
  const [toDo, setToDo] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function getToDo() {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/4");
      const data = await response.json();
      
      setToDo(data);
      setLoading(false);
    }

    getToDo();
  }, []);

  return (
    <>
      {loading === false ? <ToDo {...toDo}/> : <Spinner componentToLoad={"ToDo"}/>}
      <Comment />
    </>
  );
}

export default App;
