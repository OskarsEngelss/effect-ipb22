import { useEffect, useState} from "react";
import UnderPostCommentSingle from "./UnderPostCommentSingle.js";
import "./UnderPostComment.css";

function UnderPostComment(props) {
    const [comments, setComments] = useState([]);
    const [underPostComments, setUnderPostComments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getComments() {
            const response = await fetch("https://jsonplaceholder.typicode.com/comments");
            const data = await response.json();
            
            setComments(data);
            setLoading(false);
        }

        getComments();
    }, []);

    const underPostCommentJSX = comments.map((comment) => {
        if (comment.postId == props.id) {
            return (
                <div>
                    <UnderPostCommentSingle name={comment.name} body={comment.body}/>
                </div>
            )
        }
    });

    return (
        <div className="commentsDiv">
            <h2>Comments:</h2>
            {underPostCommentJSX}
        </div>
    );
}

export default UnderPostComment;