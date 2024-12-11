import './Men_page.css';
import { useEffect, useState } from 'react';
import { getmenUl } from '../JS FILES/product_url';
import { Link } from 'react-router-dom';
import addimage from '../Assist/assets/1919789.png';

export function Men_Page() {

    const [mendata1, setMenData1] = useState([]);
    const [selectmen, setSelectmen] = useState([]);

    useEffect(() => {
        getmen1();
    }, []);

    async function getmen1() {
        try {
            const res = await getmenUl();
            setMenData1(res.data);
        } catch (error) {
            console.error("Error fetching men data:", error);
        }
    }

    const handlemen = (Company) => {
        if (selectmen.includes(Company)) {
            setSelectmen(selectmen.filter(item => item !== Company));
        } else {
            setSelectmen([...selectmen, Company]);
        }
    };

    const menspage = [...new Set(mendata1.map(menn => menn.Company))];

    const filterData = selectmen.length === 0
        ? mendata1
        : mendata1.filter((menn) => selectmen.includes(menn.Company));

    return (
        <>
            <div className='d-flex'>
                <div className="select-page">
                    {menspage.map((Company, index) => (
                        <div key={index} className='pro-input'>
                            <span >
                                <input
                                    type="checkbox"
                                    checked={selectmen.includes(Company)}
                                    onChange={() => handlemen(Company)}
                                />
                                {Company} <br />
                            </span>
                        </div>
                    ))}
                </div>

                <div className='pageSection'>
                    {filterData.map((item) => (
                        <div key={item.id} className='mobilepage'>
                            <Link to={`/sinlemen/${item.id}`}><img src={item.men_image} alt={item.model} className='menpage-img' /></Link>
                            <div className="men-details">
                                <span className=''>{item.Company}</span>

                            </div>
                            <span className='price ms-4'>
                                <del>{item.old_price}</del> <h5>${item.New_price}</h5>
                            </span>
                        </div>
                    ))}

                    <div className='mobilepage'>
                        <Link to='/add_men'>
                            <img src={addimage} alt="" />
                            <button className='mt-2'>Add Shirt</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
