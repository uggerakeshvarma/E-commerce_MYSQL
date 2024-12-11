import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";


export function Add_Men() {

    const { register, handleSubmit } = useForm();
    const [menadd, setMenadd] = useState([]);

    async function savemen(data) {
        let formData = new FormData(); 

        formData.append('Company', data.Company);
        formData.append('old_price', data.old_price);
        formData.append('New_price', data.New_price);
        formData.append('Size', data.Size);
        formData.append('Description', data.Description);
        formData.append('men_image', menadd);

        const config = {
            headers: { "content-type": "multipart/form-data" }
        };
        await axios.post('http://localhost:3001/savemen', formData, config);
        window.location.reload();
    }

    function Loadmen(event) {
        var reader = new FileReader();
        reader.onload = function () {
            setMenadd(reader.result);
        }
        reader.readAsDataURL(event.target.files[0]);
    }

    return (
        <>
            <form onSubmit={handleSubmit((data) => { savemen(data) })}>
                <h2>ADD Men</h2>
                <input type="text" placeholder="Company" {...register("Company")} /><br />
                <input type="text" placeholder="old_price" {...register('old_price')} /><br />
                <input type="text" placeholder="New_price" {...register('New_price')} /><br />
                <input type="text" placeholder="Size" {...register('Size')} /><br />
                <input type="text" placeholder="Description" {...register('Description')} /><br />
                <input type="file" placeholder="men_image" {...register('men_image')} onChange={(event) => { Loadmen(event) }} /><br />
                <button type="Submit">Submit</button>
            </form>
        </>
    )
}
