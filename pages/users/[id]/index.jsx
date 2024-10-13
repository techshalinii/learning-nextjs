import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const UserInfoPage = () => {
    const [userInfo, setUserInfo] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const id = router.query.id;
        if (id) {
            async function getUserById(id) {
                const response = await fetch(`https://dummyjson.com/users/${id}`);
                const data = await response.json();
                setUserInfo(data); 
            }
            getUserById(id);
        }
    }, [router.query.id]);

 
    if (!userInfo) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{userInfo.firstName}</h1>
        </div>
    );
}

export default UserInfoPage;
