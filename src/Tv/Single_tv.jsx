import { Heart } from 'react-bootstrap-icons';
import men from '../Assist/assets/MenWear/12.jpg';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export function Single_Tv() {
    const [singletvdata, setsingletvdata] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        singlebook();
    }, [id]);

    async function singlebook() {
        try {
            const res = await axios.get(`http://localhost:3001/singletv/${id}`);
            setsingletvdata(res.data[0]);
        } catch (error) {
            console.error("Error fetching single book data:", error);
        }
    }

    if (!singletvdata) {
        return <div>Loading...</div>;
    }


    function handleAddToCart() {
        document.getElementById("cart" + singletvdata.id).submit();
    }

    return (
        <div className="single-book-container">
            <div className='d-flex'>
                <div className='single_img'>
                    <img src={singletvdata.tv_image || men} alt={singletvdata.description} className='immh' />
                </div>
                <div className="product-details ms-5">
                    <h1 className='company_name'>{singletvdata.Company}</h1>
                    <h2 className='model-1'>{singletvdata.model}</h2>
                    <h6 className='old_price'>Old Price: <del>₹{singletvdata.old_price}</del></h6>
                    <p className='new_price'>New Price: <span>₹{singletvdata.New_price}</span></p>
                    <p className='model-1'>Description: {singletvdata.description}</p>

                    {/* Size options might not be relevant for a book, consider removing or replacing */}
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
                        <form id={"cart" + singletvdata.id} method='post' action="http://localhost:3001/savecart" className='brr'>
                            <input type="hidden" value={singletvdata.id} name='cart_id' />
                        </form>
                       
                        <button className="add-to-cart" onClick={handleAddToCart}>Add to cart</button> 
                        <button className="buy-now">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}