import { FiDelete } from 'react-icons/fi';
import './Cart.css';
import { useEffect, useState } from 'react';
import { getcart_api } from '../JS FILES/product_url';
import { Dash, Plus } from 'react-bootstrap-icons';
import Cart_pop from '../cart_popup/cart_popup';
import axios from 'axios';
import { Cart_Delete } from '../cart_popup/cart_delete/cart_delet';

export function Cart() {
    const [cart, setCart] = useState([]);
    const [showDeletePop, setShowDeletePop] = useState(false);
    const [deleteCartId, setDeleteCartId] = useState(null);
    const [pagesize, setpagesize] = useState(3)
    const [cartpagenumber, setpagenumber] = useState([])
    const [totalcart, settotalcart] = useState([])

    useEffect(() => {
        gocartpage()
    }, []);

    function gocartpage() {
        getcart_api().then((res) => {
            settotalcart(res.data)

            let pNumber = res.data.length / pagesize
            let pNumberArry = [];
            for (let i = 1; i <= pNumber; i++) {
                pNumberArry.push(i)
            }
            setpagenumber(pNumberArry)

            let data = res.data.slice(0, pagesize)
            setCart(data);
        });
    }

    function gotopage(num) {
        let startindex = pagesize * (num - 1)
        let endindex = pagesize * num;
        let res = totalcart.slice(startindex, endindex)
        setCart(res)
    }




    // Increment quantity
    function increment(item, index) {
        let data = [...cart];
        data[index].quantity = item.quantity + 1;
        setCart(data);
    }

    // Decrement quantity
    function decrement(item, index) {
        if (item.quantity > 1) { // Ensure quantity doesn't go below 1
            let data = [...cart];
            data[index].quantity = item.quantity - 1;
            setCart(data);
        }
    }

    async function deletecart() {
        if (deleteCartId) {
            const config = {
                headers: { 'Content-Type': 'multipart/form-data' }
            };

            const newForm = new FormData();
            newForm.append("id", deleteCartId);

            try {
                const res = await axios.post("http://localhost:3001/deletecart", newForm, config);
                if (res.status === 200) {
                    setCart(cart.filter(item => item.id !== deleteCartId));
                }
            } catch (error) {
                console.error("Error deleting cart item:", error);
            } finally {
                setShowDeletePop(false);
            }
        }
    }




    return (
        <>
            <div>
                <h2 className='cart-container'>Cart</h2>
                <table className='table-border'>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, index) => (
                            <tr key={item.id}>
                                <td>
                                    <img src={item.Mobile_image} alt={item.model} />
                                    <h6>{item.Company}</h6>
                                </td>
                                <td>{item.New_price}</td>
                                <td>
                                    <div className='quantity'>
                                        <span><Dash onClick={() => decrement(item, index)} /></span>
                                        <span>{item.quantity}</span>
                                        <span><Plus onClick={() => increment(item, index)} /></span>
                                    </div>
                                </td>
                                <td>{item.New_price * item.quantity}</td>
                                <td>
                                    <FiDelete onClick={() => { setDeleteCartId(item.id); setShowDeletePop(true); }} className="fiDelete" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <div>
                            <div class="btn-group" role="group" aria-label="Basic example">
                                {
                                    cartpagenumber && cartpagenumber.map((item) =>
                                        <button type='button' class="btn btn-success" onClick={() => { gotopage(item) }} >{item}</button>
                                    )
                                }
                            </div>
                        </div>
                    </tfoot>
                </table>


                <Cart_pop open={showDeletePop} title={"Delete Item"} closemodel={() => setShowDeletePop(false)}>
                    <Cart_Delete deletecart={() => { deletecart(); setShowDeletePop(false) }} ></Cart_Delete>
                </Cart_pop>
            </div>
        </>
    );
}
