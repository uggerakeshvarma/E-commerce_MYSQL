import './laptop.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { getloptopurl } from '../JS FILES/product_url';
import store from '../JS FILES/store';
import { Link } from 'react-router-dom';
import { CaretRightFill } from 'react-bootstrap-icons';

export function Laptop() {
    const [Loptopdata, setLoptopdata] = useState([]);

    useEffect(() => {
        Loptops();
    }, []);

    function Loptops() {
        getloptopurl().then((res) => {
            setLoptopdata(res.data);
        });
    }

    

    return (
        <>

            <div className='all_view'>
                <span>Laptop</span>
                <Link to='/laptoppage'><span>View ALL <CaretRightFill ></CaretRightFill></span></Link>
            </div>
            <div className='loptop-container'>
                {
                    Loptopdata.slice(0, 5).map((item) => {
                        return (
                            <div key={item.id} className='laptop-card'>
                                <div className='laptop-image'>
                                    <img src={item.loptop_image} alt={item.model} />
                                </div>
                                <div className="loptop-details">
                                    <h5>{item.company}</h5>
                                 
                                    <span>
                                        <del>${item.old_price}</del>
                                        <h6>${item.new_price}</h6>
                                    </span>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </>
    );
}
