import { useEffect, useState} from "react";
import Post from "./Post.js";
import Spinner from "./Spinner.js";

function PostList() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getPosts() {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            
            setPosts(data);
            setLoading(false);
        }

        getPosts();
    }, []);

    const postsJSX = posts.map((post, index) => {
        return (
            <Post key={index} {...post} />
        )
    });

    return (
        <>
            {loading === false ? postsJSX : <Spinner componentToLoad={"Posts"}/>}
        </>
    );
}

export default PostList;