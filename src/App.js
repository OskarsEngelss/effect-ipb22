import ToDo from "./ToDo.js";

function App() {
  const toDo = [{
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  }];

  const toDoJSX = toDo.map((oneThing, index) => {
    return <ToDo key={index} {...oneThing}/>
  });

  return (
    <>
      {toDoJSX}
    </>
  );
}

export default App;
