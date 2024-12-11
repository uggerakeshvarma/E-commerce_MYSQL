import { useEffect, useState } from 'react';
import './Edit_Profile.css';

export function Edit_Data() {
    const [user, setUser] = useState({
        id: '',
        userName: '',
        Email: '',
        PhoneNumber: '',
        password: ''
    });

    useEffect(() => {
        getUser();
    }, []);

    function getUser() {
        const data = localStorage.getItem("UserData");
        if (data) {
            const parsedData = JSON.parse(data);
            if (parsedData && parsedData.length > 0) {
                setUser(parsedData[0]);
            } else {
                console.error("Parsed data is not in expected format.");
            }
        } else {
            console.error("No user data found in localStorage.");

        }
    }

    return (
        <>
            <form method='post' action="http://localhost:3001/update_data" className='mt-5'>
            <h4>Update Details</h4>
                <input type="hidden" name="id" value={user.id} />
                <div>
                    <label htmlFor="userName">UserName</label>
                    <input 
                        type="text" 
                        name="userName" 
                        id="userName" 
                        placeholder='UserName' 
                        value={user.UserName} 
                        onChange={(e) => setUser({...user, userName: e.target.value})} 
                    />
                </div>
                <div>
                    <label htmlFor="Email">Email</label>
                    <input 
                        type="email" 
                        name="Email" 
                        id="Email" 
                        placeholder='Email' 
                        value={user.Email} 
                        onChange={(e) => setUser({...user, Email: e.target.value})} 
                    />
                </div>
                <div>
                    <label htmlFor="PhoneNumber">PhoneNumber</label>
                    <input 
                        type="tel" 
                        name="PhoneNumber" 
                        id="PhoneNumber" 
                        placeholder='PhoneNumber' 
                        value={user.PhoneNumber} 
                        onChange={(e) => setUser({...user, PhoneNumber: e.target.value})} 
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder='Password' 
                        value={user.password} 
                        onChange={(e) => setUser({...user, password: e.target.value})} 
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    );
}
