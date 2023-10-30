import {useState} from "react";

function ToDo(props) {
    const [completed, setCompleted] = useState(props.completed);

    return (
        <div key={props.index}>
            <p>UserID: {props.userId}</p>
            <p>ID: {props.id}</p>
            <p>Title: {props.title}</p>
            <label>Completed: </label>
            <input type="checkbox" checked={completed} onChange={(event) => {setCompleted(event.target.checked)}}/>
        </div>
    );
}

export default ToDo;