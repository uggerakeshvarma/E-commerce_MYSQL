import { useEffect, useState } from 'react';
import './Mobile_page.css';
import { GetMobile } from '../JS FILES/product_url';
import { Link } from 'react-router-dom';
import store from '../JS FILES/store';
import  addimage from '../Assist/assets/1919789.png';

export function Mobile_Page() {
    const [mobilepages, setMobilepage] = useState([]);
    const [selectedCompanies, setSelectedCompanies] = useState([]);

    useEffect(() => {
        mobilepagebind();
    }, []);

    async function mobilepagebind() {
        const res = await GetMobile();
        setMobilepage(res.data);
    }

    const handlephone = (company) => {
        if (selectedCompanies.includes(company)) {
            setSelectedCompanies(selectedCompanies.filter(item => item !== company));
        } else {
            setSelectedCompanies([...selectedCompanies, company]);
        }
    };

    const companies = [...new Set(mobilepages.map(mobile => mobile.Company))];

    const filterData = selectedCompanies.length === 0
        ? mobilepages
        : mobilepages.filter((mobile) => selectedCompanies.includes(mobile.Company));









    return (
        <>
            <div className='d-flex'>
                <div className="select-page">
                    {companies.map((company, index) => (
                        <div className='pro-input' key={index}>
                            <span>
                                <input
                                    type="checkbox"
                                    checked={selectedCompanies.includes(company)}
                                    onChange={() => handlephone(company)}
                                />
                                {company}

                                <br />
                            </span>
                        </div>
                    ))}
                </div>

                <div className="pageSection">
                    {filterData.map((item) => (
                        <div className="mobilepage" key={item.id}>
                            <Link to={`/singlemobile/${item.id}`} className='mm'>
                                <img src={item.Mobile_image} alt="" className='image' />
                                <br />
                                <span>{item.Company}</span>
                                <br />
                                <span className='price'>
                                    <del>{item.old_price}</del> <h5>{item.New_price}</h5>
                                </span>
                            </Link>
                        </div>
                    ))}
                    <div className='mobilepage'>
                       <Link to='/add_mobile'>
                       <img src={addimage} alt="" />
                    <button className='mt-2'>Add Mobile</button>
                    </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
