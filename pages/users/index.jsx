import { useEffect, useState } from "react";
import Link from "next/link";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then(res => res.json());


const UserPage = () => {

    const {data, error} =useSWR('https://dummyjson.com/users', fetcher)
    console.log('data', data)

    // const [users, setUsers] =useState([]);
    // console.log('Users', users)

    // useEffect(()=> {
    //     async function fetchUsers() {
    //         const data = await fetch('https://dummyjson.com/users')
    //         setUsers(await data.json());
    //     }
    //     fetchUsers()
    // }, [])

    if(error){
        return <h1>Error occured</h1>
    }
    if(!data) return <h1>Loading...</h1>

    return (
        <div>
            <h1>Users</h1>
            {
                data.users &&
                data.users.map((user) => <Link href={`/users/${user.id}`} key={user.id}>
                    <div>{user.firstName}</div>
                </Link>)
            }
        </div>
    )
}
export default UserPage;