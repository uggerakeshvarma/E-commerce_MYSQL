import './Loptop_page.css';
import { useEffect, useState } from 'react';
import { getloptopurl } from '../JS FILES/product_url';
import { Link } from 'react-router-dom';
import addimage from '../Assist/assets/1919789.png';

export function Laptop_Page() {
    const [laptopPage, setLaptopPage] = useState([]);
    const [selectedLaptops, setSelectedLaptops] = useState([]);

    useEffect(() => {
        getloptopurl().then((res) => {
            setLaptopPage(res.data);
        });
    }, []); // Add an empty dependency array to fetch data once

    const handleLaptop = (company) => {
        if (selectedLaptops.includes(company)) {
            setSelectedLaptops(selectedLaptops.filter(item => item !== company));
        } else {
            setSelectedLaptops([...selectedLaptops, company]);
        }
    };

    const laptopModels = [...new Set(laptopPage.map(lap => lap.company))];
    const filteredData = selectedLaptops.length === 0
        ? laptopPage
        : laptopPage.filter((lap) => selectedLaptops.includes(lap.company));

    return (
        <>
            <div className='d-flex'>
                <div className='select-page'>
                    {laptopModels.map((company, index) => (
                        <div key={index} className='pro-input'>
                            <input
                                type="checkbox"
                                checked={selectedLaptops.includes(company)}
                                onChange={() => handleLaptop(company)}
                            />
                            {company}
                        </div>
                    ))}
                </div>

                <div className='pageSection'>
                    {filteredData.map((item) => (
                        <div key={item.id} className='mobilepage'>
                            <Link to={`/singlelaptop/${item.id}`}><div className='image'>
                                <img src={item.loptop_image} alt={item.model} />
                            </div></Link>
                            <div className="laptop_details">
                                <h6>{item.company}</h6>
                                <span className='price ms-4'>
                                    <del>{item.old_price}</del> <h5>${item.new_price}</h5>
                                </span>
                            </div>
                        </div>
                    ))}

                    <div className='mobilepage'>
                        <Link to='/add_loptop'>
                            <img src={addimage} alt="" />
                            <button className='mt-2'>Add Laptop</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
