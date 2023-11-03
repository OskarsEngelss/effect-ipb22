import { useEffect, useState} from "react";

function UserNames(props) {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getUsers() {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();
            
            setUsers(data);
            setLoading(false);
        }

        getUsers();
    }, []);

    return (
        <>
            {loading === false ? users[props.userNumber].name : ""}
        </>
    );
}

export default UserNames;