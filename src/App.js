import ToDo from "./ToDo.js";

function App() {
  const todo = [{
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  }];

  const toDoJSX = todo.map((oneThing, index) => {
    return <ToDo key={index} userId={oneThing.userId} id={oneThing.id} title={oneThing.title} completed={oneThing.completed}/>
  });

  return (
    <>
      {toDoJSX}
    </>
  );
}

export default App;
