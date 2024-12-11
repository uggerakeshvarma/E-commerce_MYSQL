import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { SetLocalstorage } from '../JS FILES/auth_rout';
import { getregister_api } from '../JS FILES/product_url';
import './Login.css';

export function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const Logindata = (data) => {
        const { userName, password } = data;

        getregister_api().then((res) => {
            let filterData = res.data.filter(item =>
                item.userName === userName && item.password === password
            );

            if (filterData.length > 0) {
                SetLocalstorage('UserData', filterData);
                alert("User logged in successfully");
                navigate('/');
            } else {
                alert('User does not exist');
            }
        });
    };

    return (
        <div className="login-container">
            <h3>Login</h3>
            <form onSubmit={handleSubmit(Logindata)}>
                <div className="form-group">
                    <label htmlFor="userName">Username</label><br />
                    <input
                        type="text"
                        id="userName"
                        placeholder="Username"
                        {...register("userName", { required: "Username is required" })}
                    />
                    {errors.userName && <span className="error-message">{errors.userName.message}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label><br />
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        {...register("password", { required: "Password is required" })}
                    />
                    {errors.password && <span className="error-message">{errors.password.message}</span>}
                </div>
               <Link to='/Edit_data'> <label>Forget Password</label></Link>
                <button type="submit" className="submit-button">Login</button>
            </form>
        </div>
    );
}
