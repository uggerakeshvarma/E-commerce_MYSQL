import { useEffect, useState } from 'react';
import './Mobile.css'; // Ensure correct path to the file
import { GetMobile } from '../JS FILES/product_url';
import { Link } from 'react-router-dom';
import store from '../JS FILES/store';
import { Laptop } from '../laptop/laptop';
import { Men_Page } from '../Men_page/Men_page';
import { Men } from '../men/Men';
import { Slick_image } from '../Image courser/Image_courser';
import img1 from '../Assist/assets/banner1-cr-500x150.jpg';
import { SoundBoxes } from '../Soundboxes/soundboxes';
import { Book } from '../Books/Books';
import { Furniture } from '../FORNITURE/furniture';
import { Tv } from '../Tv/Tv';
import { Kitchen } from '../Kitchen/Kitchen';
import { Ac } from '../Ac/Ac';
import { Watch } from '../Watch/Watch';
import { Women } from '../Women/Women';
import { CaretRightFill } from 'react-bootstrap-icons';

export function Mobile() {
    const [mobile1, setMobile] = useState([]);

    useEffect(() => {
        fetchMobiles();

        // Subscribe to store updates
        const unsubscribe = store.subscribe(() => {
            setMobile(store.getState()?.user || []);
        });

        // Cleanup subscription on component unmount
        return () => {
            unsubscribe();
        };
    }, []);

    async function fetchMobiles() {
        try {
            const res = await GetMobile();
            const data = res.data.slice(0, 5); // Slice first five items
            setMobile(data);
        } catch (error) {
            console.error("Error fetching mobiles:", error);
        }
    }

    return (
        <>
            <Slick_image></Slick_image>

            <div>
            <div className='all_view'> 
                <span>Mobile</span>
                <Link to='/mobilepage'><span>View ALL <CaretRightFill ></CaretRightFill></span></Link>
            </div>
            
            <div className='loptop-container'>
            
                {
                    mobile1.map((item) => {
                        return (
                            <div className='mobilepage' key={item.id}>

                                <Link to={`/singlemobile/${item.id}`}>
                                    <img src={item.Mobile_image} alt={item.model} className='pro-img' />
                                </Link>
                                <h6>{item.Company}</h6>
                                <h6>{item.model}</h6>
                                <span className='mobile-d'>
                                    <del>{item.old_price}</del>
                                    <span className='sp'>{item.New_price}</span>
                                </span>
                            </div>
                        )
                    })
                }
            </div>
            </div>
            <div className='disc_imgg'>
                <img src={img1} alt="" />
            </div>
            <div className='mt-5'>
                <Laptop />
                <Men />
                <div className='mt-3'>
                    <SoundBoxes />
                </div>
                <div>
                    <Book />
                </div>
                <div>
                    <Furniture />
                </div>
                <div>
                    <Tv />
                </div>
                <div>
                    <Kitchen />
                </div>
                <div>
                    <Ac />
                </div>

                <div>
                    <Watch />
                </div>
                <div>
                    <Women />
                </div>
            </div>
        </>
    )
}
