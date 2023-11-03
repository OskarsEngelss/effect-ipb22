import UserNames from "./UserNames";
import "./Post.css";

function Post(props) {
    const userName = props.userId - 1;

    return (
        <div className="singlePost" key={props.index}>
            <p>Post ID: {props.id}</p>
            <p>Name: <UserNames userNumber={userName}/></p>
            <h2>{props.title}</h2>
            <p>{props.body}</p>
        </div>
    );
}

export default Post;