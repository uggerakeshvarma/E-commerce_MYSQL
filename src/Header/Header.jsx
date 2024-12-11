import { useEffect, useRef, useState } from 'react';
import './Header.css';
import axios from 'axios';
import store from '../JS FILES/store';
import { type } from '@testing-library/user-event/dist/type';
import { Search } from 'react-bootstrap-icons';
import { removeLocalstorage } from '../JS FILES/auth_rout';
import { Link, useNavigate } from 'react-router-dom';

export function Header() {

    const [cartcount, setCartcount] = useState([])
    const [totalprice, setTotalprice] = useState([])


    useEffect(() => {
        cartcountdata();
        Total_price();
    }, []); 
    
    async function cartcountdata() {
        const res = await axios.get('http://localhost:3001/cartcount');
        setCartcount(res.data[0]);
       
    }
    
    async function Total_price() {
        const res = await axios.get('http://localhost:3001/totalprice');
        setTotalprice(res.data[0]);
    }
    

    const searchMobile = useRef();
    const navigate = useNavigate()

    async function search(dataparams) {
        let formData = new FormData()

        formData.append('Company', searchMobile.current.value);

        const config = {
            headers: { "content-type": "multipart/form-data" }
        }

        const res = await axios.post('http://localhost:3001/search', formData, config);
        store.dispatch({ type: 'mobile', data: res.data })



    }



    const [loginuser, setloginuser] = useState([])

    useEffect(() => {
        login()
    } ,[])
    function login() {
        store.subscribe(() => {
            let log = store.getState()?.log
            if (log != null && log != undefined) {
                setloginuser(true)
            }
            else {
                setloginuser(false)
            }
        })
    }


    function logout() {
        removeLocalstorage("UserData")
        navigate('/login')
    }
    return (

        <>
            <div className="pro-header">
                <div>
                    <Link to='/' className='mm'> <h2 className='e-com'>E-Commerce</h2></Link>
                </div>
                <div className='search-btn'>
                    <input type="text" placeholder="Searche ..." ref={searchMobile} />
                    <Search onClick={() => { search() }} className='saerch'></Search>

                </div>
              
                <div className='d-flex'>
                    <Link to='/cart' className='mm   ' >
                    <h5>Cart :- </h5>
                     </Link>
                    <h2 className='catt_count'>  ${cartcount.cartcount}</h2>
                </div>
                <div className='d-flex'>
                    <span>Total cart Price :- </span>
                 <h2 className='catt_count'>  ${totalprice.totalcartprice}</h2>
                </div>
                <div className='pro-sing d-flex'>
                    <Link to='/register' className='mm'><h4>Register</h4></Link>
                    <Link to='/login' className='mm'><h4>Login</h4></Link>
                </div>
                
                <div>
                    {
                        loginuser == false &&
                        <button onClick={() => { logout() }}> Logout</button>
                    }

                </div>
            </div>
            <div>
                <ul className='Header_prod'> 
                    <Link to='/mobilepage' className='link'><li>Mobiles</li></Link>
                   <Link to='/laptoppage' className='link'> <li>Laptops</li></Link> 
                    <Link to='/menpage' className='link'><li>Men Shirts</li></Link> 
                    <Link to='/bookpage' className='link'><li>Books</li></Link> 
                    <Link  to='/furniture_page' className='link'><li>Furnitur</li></Link> 
                    <Link to='/tvpage' className='link'><li>Tv's</li></Link> 
                    <Link to='/Kitchenpage' className='link'><li>Kitchen</li></Link> 
                    <Link to='/Acpage' className='link'><li>Ac</li></Link> 
                    <Link to='/watchpage' className='link'><li>Watches</li></Link>
                    <Link to='/womenpage' className='link'><li>Women</li></Link>
                    <Link to='/soundboxespage' className='link'><li>Sound Boxes</li></Link>

                </ul>
            </div>
        </>

    )
}