import { useNavigate } from 'react-router-dom';
import './Register.css';

export function Register() {
    const navigate = useNavigate()
    return (
        <div className="register-container">
            <form action="http://localhost:3001/saveregister" method='post'>
                <div className="form-group">
                    <label htmlFor="userName">User Name</label><br />
                    <input type="text" name="userName" id="userName" placeholder='Username' />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label><br />
                    <input type="email" name="Email" id="email" placeholder='Email' />
                </div>
                <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number</label><br />
                    <input type="number" name="PhoneNumber" id="phoneNumber" placeholder='Phone Number' />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label><br />
                    <input type="password" name="password" id="password" placeholder='Password' />
                </div>
                <button type="submit" className="submit-button">Register</button>
            </form>
        </div>
    );
}
