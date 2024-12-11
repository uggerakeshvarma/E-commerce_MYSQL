import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form"


export function Add_Loptop(){
const [addLoptop, setaddLoptop] = useState([])
    const {
register,
handleSubmit
    }= useForm()


    async function saveloptop(data) {
     let   formData = new FormData();

     

    formData.append("company" , data.company);
    formData.append('model', data.model);
    formData.append('old_price' , data.old_price);
    formData.append('new_price' , data.new_price);
    formData.append('Disciption', data.Disciption);
    formData.append('loptop_image', addLoptop);


      const config = {
        headers: {'content-type': "multipart/form-data"}
      }

      const res = await axios.post('http://localhost:3001/saveloptop', formData, config)
      window.location.reload()
    }

    function Loadloptop(event){
       var reader = new FileReader();
        reader.onload = function(){
            setaddLoptop(reader.result)
        }

        reader.readAsDataURL(event.target.files[0])
    }

    return(
        <>
        <div>

        company,model,old_price,new_price,Disciption,loptop_image
         

          <form onSubmit={handleSubmit((data) => {saveloptop(data)})}>
          <h3>Add Loptop</h3>
            <input type="text" name="" id="" placeholder="company"  {...register('company')} /><br />
            <input type="text" name="" id="" placeholder="model" {...register('model')}  />
            <input type="text" name="" id="" placeholder="old_price" {...register('old_price')}  />
            <input type="text" name="" id="" placeholder="new_price" {...register('new_price')}  />
            <input type="text" name="" id="" placeholder="Disciption"  {...register('Disciption')}  />
            <input type="file" name="" id=""  {...register('loptop_image')}  onChange={(event) => {Loadloptop(event)}} />
            <button type="submit">submit</button>
          </form>
        </div>
        </>
    )
}