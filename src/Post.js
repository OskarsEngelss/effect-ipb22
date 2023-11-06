import UserNames from "./UserNames.js";
import UnderPostComment from "./UnderPostComment.js";
import "./Post.css";

function Post(props) {
    const userName = props.userId - 1;

    return (
        <div key={props.index}>
            <div className="actualPost">
                <p>Post ID: {props.id}</p>
                <p>Name: <UserNames userNumber={userName}/></p>
                <h2>{props.title}</h2>
                <p>{props.body}</p>
            </div>   
            <UnderPostComment id={props.id}/>
        </div>
    );
}

export default Post;