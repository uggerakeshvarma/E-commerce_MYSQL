
import men from '../Assist/assets/MenWear/1.jpg';
import { useEffect, useState } from 'react';
import { getmenUl } from '../JS FILES/product_url';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { CaretRightFill } from 'react-bootstrap-icons';

export function Watch() {

    const [watch, setwatch] = useState([])
    useEffect(() => {
        getmen()
    }, [])
    async function getmen() {
        const res = await axios.get("http://localhost:3001/getwatch")
        setwatch(res.data)
    }
    return (
        <>

            <div className='all_view'>
                <span>Watch</span>
                <Link to='/watchpage'><span>View ALL <CaretRightFill ></CaretRightFill></span></Link>
            </div>
            <div className='loptop-container'>

                {
                    watch.slice(0, 5).map((item) => {
                        return (
                            <div className='mobilepage'>
                                <img src={item.Watch_image} alt="" className='men-img' />

                               
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