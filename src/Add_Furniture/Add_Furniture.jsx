import axios from "axios"
import { useState } from "react"
import { useForm } from "react-hook-form"



export function Add_Furniture() {
    const {
        register, handleSubmit
    } = useForm()

    const [addfurniture, setAddfurniture] = useState([])

    async function savefurniture(data) {
        let formdata = new FormData()

        formdata.append("Company", data.Company);
        formdata.append("model", data.model);
        formdata.append("old_price", data.old_price);
        formdata.append("New_price", data.New_price);
        formdata.append("description", data.description);
        formdata.append("Furniture_image", addfurniture);


        const config = {
            headers: { "content-type": "multipart/form-data" }
        }

        const res = await axios.post("http://localhost:3001/savefurniture", formdata, config)
        window.location.reload()
    };

    function loadfuniture(event) {
        var reader = new FileReader()
        reader.onload = function () {
            setAddfurniture(reader.result)
        }
        reader.readAsDataURL(event.target.files[0])
    }


    return (
        <>
            <form onSubmit={handleSubmit((data) => {savefurniture(data)})}>
                <h3>Add Forniture</h3>
                <input type="text" name="" id="" placeholder="Company"  {...register("Company")} /><br />
                <input type="text" name="" id="" placeholder="model" {...register("model")} /><br />
                <input type="text" name="" id="" placeholder="old_price" {...register("old_price")} /><br />
                <input type="text" name="" id="" placeholder="Noe_price" {...register("New_price")} /><br />
                <input type="text" name="" id="" placeholder="Descriptoin"  {...register("description")}/><br />
                <input type="file" name="" id=""  {...register("Furniture_image")} onChange={(event) => {loadfuniture(event)}} /><br />
                <button>Add Image</button>


            </form>
        </>
    )
}