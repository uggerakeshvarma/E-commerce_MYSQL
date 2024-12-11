import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import addimage from '../Assist/assets/1919789.png';


export function Watch_Page() {
    const [Watch_Page1, setWatch_page] = useState([]);
    const [selectedLaptops, setSelectedLaptops] = useState([]);

    useEffect(() => {
        bookpage();
    }, []);

    async function bookpage() {
        try {
            const res = await axios.get("http://localhost:3001/getwatch");
            setWatch_page(res.data);
        } catch (error) {
            console.error("Error fetching book data:", error);
        }
    }

    const handlebook = (Company) => {
        setSelectedLaptops(prevSelectedLaptops =>
            prevSelectedLaptops.includes(Company)
                ? prevSelectedLaptops.filter(item => item !== Company)
                : [...prevSelectedLaptops, Company]
        );
    };

    const laptopModels = [...new Set(Watch_Page1.map(book => book.Company))];
    const filteredData = selectedLaptops.length === 0
        ? Watch_Page1
        : Watch_Page1.filter((book) => selectedLaptops.includes(book.Company));

    return (
        <div className='d-flex'>
            <div className='select-page'>
                {laptopModels.map((Company, index) => (
                    <div key={index} className='pro-input'>
                        <input
                            type="checkbox"
                            checked={selectedLaptops.includes(Company)}
                            onChange={() => handlebook(Company)}
                        />
                        {Company}
                    </div>
                ))}
            </div>

            <div className='pageSection'>
                {filteredData.map((item) => (
                    <div key={item.id} className='mobilepage'>
                        <Link to={`/singlewatch/${item.id}`}>
                            <div className='image'>
                                <img src={item.Watch_image} alt={item.model} />
                            </div>
                        </Link>
                        <div className="laptop_details">
                            <h6>{item.Company}</h6>
                            <span className='price ms-4'>
                                <del>${item.old_price}</del>
                                <h5>${item.New_price}</h5>
                            </span>
                        </div>
                    </div>
                ))}

                <div className='mobilepage'>
                    <Link to='/Add_watch'>
                        <img src={addimage} alt="" />
                        <button className='mt-2'>Add Watch</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
