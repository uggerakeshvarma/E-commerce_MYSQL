import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";


export function Add_Ac() {

    const { register, handleSubmit } = useForm();
    const [Acadd, setAcadd] = useState([]);

    async function saveAc(data) {
        let formData = new FormData();

        formData.append('Company', data.Company);
        formData.append('model', data.model);
        formData.append('old_price', data.old_price);
        formData.append('New_price', data.New_price);
        formData.append('description', data.description);
        formData.append('Ac_image', Acadd);

        const config = {
            headers: { "content-type": "multipart/form-data" }
        };
        await axios.post('http://localhost:3001/saveAc', formData, config);
        window.location.reload();
    }

    function loadAc(event) {
        var reader = new FileReader();
        reader.onload = function () {
            setAcadd(reader.result);
        }
        reader.readAsDataURL(event.target.files[0]);
    }

    return (
        <>
            <form onSubmit={handleSubmit((data) => { saveAc(data) })}>
                <h2>ADD Mobile</h2>
                <input type="text" placeholder="Company" {...register("Company")} /><br />
                <input type="text" placeholder="model" {...register('model')} /><br />
                <input type="text" placeholder="old_price" {...register('old_price')} /><br />
                <input type="text" placeholder="New_price" {...register('New_price')} /><br />
                <input type="text" placeholder="description" {...register('description')} /><br />
                <input type="file" placeholder="Mobile_image" {...register('Ac_image')} onChange={(event) => { loadAc(event) }} /><br />
                <button type="Submit">Submit</button>
            </form>
        </>
    )
}
