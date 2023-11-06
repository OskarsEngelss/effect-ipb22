function UnderPostCommentSingle(props) {
    return (
        <>
            <p>User: {props.name}</p>
            <p>Comment: {props.body}</p>
        </>
    );
}

export default UnderPostCommentSingle;