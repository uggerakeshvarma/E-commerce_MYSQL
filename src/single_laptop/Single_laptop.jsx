import React, { useEffect, useState } from 'react';
import laptop from '../Assist/assets/Computers/1.jpg'; // Default image
import './Single_laptop.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export function Single_lptop() {
    const [singlelaptopdata, setsinglelaptopdata] = useState({});
    const { id } = useParams();

    useEffect(() => {
        singlelaptop();
    }, [id]); // Added `id` as a dependency to rerun the effect if it changes

    async function singlelaptop() {
        try {
            const res = await axios.get(`http://localhost:3001/single_laptop/${id}`);
            setsinglelaptopdata(res.data[0]);
        } catch (error) {
            console.error("Error fetching laptop data:", error);
        }
    }

    function handleAddToCart() {
        document.getElementById("cart" + singlelaptopdata.id).submit();
    }

    return (
       <>
         <div className="single-men-container">
            <div className='d-flex'>
                <div className='single_img2'>
                    <img src={singlelaptopdata.loptop_image ? singlelaptopdata.loptop_image : laptop} 
                         alt={singlelaptopdata.Description} 
                         className='immg' />
                </div>
                <div className="product-details   ms-5">
                    <h1 className='company_name'>{singlelaptopdata.company}</h1> <br />
                    <h2>{singlelaptopdata.model}</h2>
                    
                    {/* Displaying Old Price and New Price */}
                    <div className="price-section">
                        <h6 className="old-price">
                            Old Price: <del>₹{singlelaptopdata.old_price}</del>
                        </h6>
                        <h5 className="new-price">
                            New Price: <span>₹{singlelaptopdata.new_price}</span>
                        </h5>
                    </div>

                    <p  className='Description'>Description: {singlelaptopdata.Disciption}</p>

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
                        <form id={"cart" + singlelaptopdata.id} method='post' action="http://localhost:3001/savecart" className='brr'>
                            <input type="hidden" value={singlelaptopdata.id} name='cart_id' />
                        </form>
                        <button className="add-to-cart" onClick={handleAddToCart}>Add to cart</button>
                        <button className="buy-now">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
       </>
    );
}
