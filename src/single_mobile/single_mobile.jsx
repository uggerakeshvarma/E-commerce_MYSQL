import './single_mobile.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import img from '../Assist/assets/Mobiles/1.jpg';

export function Single_Mobile() {
    const navigate = useNavigate();
    const [singleMobileData, setSingleMobileData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetchSingleMobileData();
    }, [id]);

    async function fetchSingleMobileData() {
        try {
            const res = await axios.get(`http://localhost:3001/singleprice/${id}`);
            setSingleMobileData(res.data);
        } catch (error) {
            console.error("Error fetching mobile data:", error);
        }
    }

    const handleAddToCart = async (itemId) => {
        try {
            await axios.post('http://localhost:3001/savecart', { cart_id: itemId });
            navigate('/cart'); // Navigate to the cart page after adding the item
        } catch (error) {
            console.error("Error adding to cart:", error);
        }
    };

    return (
        <div className="single-men-container">
            {
                singleMobileData.map((item) => 
                    <div className='d-flex' key={item.id}>
                        <div className='single_img2'>
                            <img src={item.Mobile_image ? item.Mobile_image : img} 
                                alt={singleMobileData.description} 
                                className='immg2' />
                        </div>
                        <div className="product-details ms-5">
                            <h1 className='company_name'>{item.Company}</h1> <br />
                            <h2>{item.model}</h2>
                            
                            {/* Displaying Old Price and New Price */}
                            <div className="price-section">
                                <h6 className="old-price">
                                    Old Price: <del>₹{item.old_price}</del>
                                </h6>
                                <h5 className="new-price">
                                    New Price: <span>₹{item.New_price}</span>
                                </h5>
                            </div>

                            <p className='Description'>Description: {item.description}</p>

                            <div className="size-options">
                                <label htmlFor="size">Size</label>
                                <select id="size">
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                    <option value="XL">XL</option>
                                    <option value="XXL">XXL</option>
                                    <option value="3XL">3XL</option>
                                    <option value="4XL">4XL</option>
                                </select>
                                <a href="#" className="size-chart">Size Chart</a>
                            </div>

                            <div className="offers">
                                <p>Available offers</p>
                                <ul>
                                    <li>Bank Offer: Get 10% off up to ₹50 on first Flipkart UPI transaction on order of ₹250 and above <a href="#">T&C</a></li>
                                    <li>Bank Offer: 5% Cashback on Flipkart Axis Bank Card <a href="#">T&C</a></li>
                                    <li>Bank Offer: 10% off up to ₹1,500 on AU Credit Cards Transactions on orders of ₹5,000 and above <a href="#">T&C</a></li>
                                    <li>Combo Offer: Buy 2 or more items save ₹30 <a href="#">See all products</a> <a href="#">T&C</a></li>
                                </ul>
                            </div>

                            <div className="actions">
                                <form id={"cart" + item.id} method='post' action="http://localhost:3001/savecart" className='brr'>
                                    <input type="hidden" value={item.id} name='cart_id' />
                                </form>
                                <button className="add-to-cart" onClick={() => handleAddToCart(item.id)}>Add to cart</button>
                                <button className="buy-now">Buy Now</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}
