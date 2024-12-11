
import men from '../Assist/assets/MenWear/1.jpg';
import { useEffect, useState } from 'react';
import { getmenUl } from '../JS FILES/product_url';
import img1 from '../Assist/assets/banner1.jpg';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { CaretRightFill } from 'react-bootstrap-icons';
import addimage from '../Assist/assets/1919789.png';

export function SoundBoxes() {

    const [sound, setsound] = useState([])
    useEffect(() => {
        getmen()
    }, [])
    async function getmen() {
        const res = await axios.get("http://localhost:3001/getsound")
        setsound(res.data)
    }
    return (
        <>

            <div className='slick_img'>
                <img src={img1} alt="" />
            </div>

            <div className='all_view'>
                <span>Sound Boxes</span>
                <Link to='/soundboxespage'><span>View ALL <CaretRightFill ></CaretRightFill></span></Link>
            </div>
            <div className='loptop-container'>


                {
                    sound.slice(0, 5).map((item) => {
                        return (
                            <div className='mobilepage'>
                                <img src={item.soundbox_image} alt="" className='men-img' />

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