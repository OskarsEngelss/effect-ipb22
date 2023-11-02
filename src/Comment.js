import { useState, useEffect } from "react";
import Spinner from "./Spinner.js";

function Comment() {
    const [comment, setComment] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getComment() {
            const response = await fetch("https://jsonplaceholder.typicode.com/comments/1");
            const data = await response.json();
            
            setComment(data);
            setLoading(false);
        }
            getComment();
    }, []);

    const addedInfo = 
        <div>
            <h2>{comment.name}</h2>
            <p>{comment.body}</p>
            <p>{comment.email}</p>
        </div>

    return (
        <>
            {loading === false ? addedInfo : <Spinner componentToLoad={"comment"}/>}
        </>
    );
}

export default Comment;