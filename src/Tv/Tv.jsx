
import men from '../Assist/assets/MenWear/1.jpg';
import { useEffect, useState } from 'react';
import { getmenUl } from '../JS FILES/product_url';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { CaretRightFill } from 'react-bootstrap-icons';

export function Tv() {

    const [tv, settv] = useState([])
    useEffect(() => {
        getmen()
    }, [])
    async function getmen() {
        const res = await axios.get("http://localhost:3001/gettv")
        settv(res.data)
    }
    return (
        <>

            <div className='all_view'>
                <span>TV's</span>
                <Link to='/tvpage'><span>View ALL <CaretRightFill ></CaretRightFill></span></Link>
            </div>
            <div className='loptop-container'>

                {
                    tv.slice(0, 5).map((item) => {
                        return (
                            <div className='mobilepage'>
                                <img src={item.tv_image} alt="" className='men-img' />

                             
                                <div className="loptop-details">
                                    <h5>{item.Company}</h5>
                                 
                                    <span>
                                        <del>${item.old_price}</del>
                                        <h6>${item.New_price}</h6>
                                    </span>
                                </div>

                            </div>
                        )
                    })
                }
                


            </div>
        </>
    )
}