import {useState} from "react";

function ToDo(props) {
    const [complete, setCompleted] = useState(props.completed);

    return (
        <div key={props.index}>
            <p>UserID: {props.userId}</p>
            <p>ID: {props.id}</p>
            <p>Title: {props.title}</p>
            <label>Completed: </label>
            <input type="checkbox" checked={complete} onChange={(event) => {setCompleted(event.target.complete)}}/>
        </div>
    );
}

export default ToDo;