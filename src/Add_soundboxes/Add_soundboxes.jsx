import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";


export function Add_soundBoxes() {

    const { register, handleSubmit } = useForm();
    const [soundBoxesadd, setsoundBoxesadd] = useState([]);

    async function savesound(data) {
        let formData = new FormData();

        formData.append('Company', data.Company);
        formData.append('model', data.model);
        formData.append('old_price', data.old_price);
        formData.append('New_price', data.New_price);
        formData.append('description', data.description);
        formData.append('soundbox_image', soundBoxesadd);

        const config = {
            headers: { "content-type": "multipart/form-data" }
        };
        await axios.post('http://localhost:3001/savesound', formData, config);
        window.location.reload();
    }

    function loadsound(event) {
        var reader = new FileReader();
        reader.onload = function () {
            setsoundBoxesadd(reader.result);
        }
        reader.readAsDataURL(event.target.files[0]);
    }

    return (
        <>
            <form onSubmit={handleSubmit((data) => { savesound(data) })}>
                <h2>ADD Mobile</h2>
                <input type="text" placeholder="Company" {...register("Company")} /><br />
                <input type="text" placeholder="model" {...register('model')} /><br />
                <input type="text" placeholder="old_price" {...register('old_price')} /><br />
                <input type="text" placeholder="New_price" {...register('New_price')} /><br />
                <input type="text" placeholder="description" {...register('description')} /><br />
                <input type="file" placeholder="Mobile_image" {...register('Mobile_image')} onChange={(event) => { loadsound(event) }} /><br />
                <button type="Submit">Submit</button>
            </form>
        </>
    )
}
