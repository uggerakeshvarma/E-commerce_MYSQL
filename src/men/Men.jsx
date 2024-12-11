import './Men.css';
import men from '../Assist/assets/MenWear/1.jpg';
import { useEffect, useState } from 'react';
import { getmenUl } from '../JS FILES/product_url';
import { Link } from 'react-router-dom';
import { CaretRightFill } from 'react-bootstrap-icons';

export function Men() {

    const [mendata, setMenData] = useState([])
    useEffect(() => {
        getmen()
    }, [])
    async function getmen() {
        getmenUl().then((res) => {
            setMenData(res.data)
        })
    }
    return (
        <>

            <div className='all_view'>
                <span>Shirts</span>
                <Link to='/menpage'><span>View ALL <CaretRightFill ></CaretRightFill></span></Link>
            </div>
            <div className='loptop-container'>

                {
                    mendata.slice(0, 5).map((item) => {
                        return (
                            <div className='mobilepage'>
                                <img src={item.men_image} alt="" className='men-img' />

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