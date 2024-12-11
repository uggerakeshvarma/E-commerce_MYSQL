let express = require('express')
let cors = require('cors')
let formidable = require('express-formidable')
let db_con = require('./db_con')

//use
let app = express()
app.use(cors())
app.use(formidable())

//posrt
app.listen(3001)


app.get('/getmpbile', async (req, res) => {
    let data = await db_con.getMobileData();
    res.write(JSON.stringify(data))
    res.end()
})
//save mobile
app.post('/savemobile', async (req, res) => {
    let data = await db_con.
        SavemobileData(req.fields.Company, req.fields.model, req.fields.old_price, req.fields.New_price, req.fields.description, req.fields.Mobile_image)
        res.redirect("http://localhost:3000/login")
    res.end()
})

//single mobile api
app.get("/singleprice/:id", async (req, res) => {
    let data = await db_con.Single_MobileData(req.params.id);
    res.write(JSON.stringify(data))
    res.end();
})


app.post("/saveregister", async (req, res) => {
    let data = await db_con.saveregisterData(req.fields.userName, req.fields.Email, req.fields.PhoneNumber, req.fields.password);

    res.end()
})

//  //get register api

app.get("/getregister", async (req, res) => {
    let data = await db_con.GetRegisterData()
    res.write(JSON.stringify(data))
    res.end()
})

// save cart api
app.post("/savecart", async (req, res) => {
    const { cart_id } = req.fields
    let data = await db_con.savecartDat(cart_id)
    res.redirect("http://localhost:3000/cart")
    res.end()
})

//getcart api

app.get("/getcart", async (req, res) => {
    let data = await db_con.getcartData()
    res.write(JSON.stringify(data));
    res.end()
})

//delete cart api
app.post('/deletecart', async (req, res) => {
    const { id } = req.fields
    let data = await db_con.Cart_deletedata(id)
    res.end()
})

//cart count api
app.get('/cartcount', async (req, res) => {
    let data = await db_con.cartcountData();
    res.write(JSON.stringify(data))
    res.end()
})

//total ptice
app.get('/totalprice', async (req, res) => {
    let data = await db_con.total_priceData()
    res.write(JSON.stringify(data));
    res.end()
})

app.post('/search', async (req, res) => {
    let data = await db_con.searchData(req.fields.Company)
    res.write(JSON.stringify(data));
    res.end()
})

//save loptop api
app.post('/saveloptop', async (req, res) => {
    const { company, model, old_price, new_price, Disciption, loptop_image } = req.fields
    let data = await db_con.saveLoptopData(company, model, old_price, new_price, Disciption, loptop_image)
    res.end()
})
app.get("/getloptop", async (req, res) => {
    let data = await db_con.getloptopData()
    res.write(JSON.stringify(data));
    res.end()
})


//single laptop
app.get('/single_laptop/:id', async (req, res) => {
    let data = await db_con.single_laptopData(req.params.id)
    res.write(JSON.stringify(data));
    res.end()
})

//savemen api

app.post('/savemen', async (req, res) => {
    const { Company, old_price, New_price, Size, Description, men_image } = req.fields
    let data = await db_con.savemenData(Company, old_price, New_price, Size, Description, men_image)
    res.end()
})



//getmen
app.get('/getmen', async (req, res) => {
    let data = await db_con.getmenData()
    res.write(JSON.stringify(data))
    res.end()
})

app.get('/singlemen/:id', async (req, res) => {
    let data = await db_con.singleMenData(req.params.id)
    res.write(JSON.stringify(data))
    res.end()
})
//save ooks api

app.post('/savebook', async (req, res) => {
    const { Company, model, old_price, New_price, description, Books_image } = req.fields
    let data = await db_con.savebooksdata(Company, model, old_price, New_price, description, Books_image)
    res.end()
})

app.get('/getbook', async (req, res) => {
    let data = await db_con.GetbookData()
    res.write(JSON.stringify(data))
    res.end()
})


app.get("/singbook/:id", async (req, res) => {
    let data = await db_con.singlebookData(req.params.id)
    res.write(JSON.stringify(data));
    res.end()
})

//save furniture api

app.post('/savefurniture', async (req, res) => {
    const { Company, model, old_price, New_price, description, Furniture_image } = req.fields
    let data = await db_con.savefurnitureData(Company, model, old_price, New_price, description, Furniture_image)
    res.end()
})

app.get('/getfurniture', async (req, res) => {
    let data = await db_con.getFurnitureData()
    res.write(JSON.stringify(data))
    res.end()
})


app.get("/singefurniture/:id", async (req, res) => {
    let data = await db_con.single_furnituredata(req.params.id)
    res.write(JSON.stringify(data));
    res.end()
})


//tv

app.post('/savetv', async (req, res) => {
    const { Company, model, old_price, New_price, description, tv_image } = req.fields
    let data = await db_con.savetvData(Company, model, old_price, New_price, description, tv_image)
    res.end()
})

app.get('/gettv', async (req, res) => {
    let data = await db_con.gettvData()
    res.write(JSON.stringify(data))
    res.end()
})


app.get("/singletv/:id", async (req, res) => {
    let data = await db_con.single_tvdata(req.params.id)
    res.write(JSON.stringify(data));
    res.end()
})

//kitchen
app.post('/savekitchen', async (req, res) => {
    const { Company, model, old_price, New_price, description, Kitchen_image } = req.fields
    let data = await db_con.savekitchenData(Company, model, old_price, New_price, description, Kitchen_image)
    res.end()
})

app.get('/getkitchen', async (req, res) => {
    let data = await db_con.getkitchenData()
    res.write(JSON.stringify(data))
    res.end()
})


app.get("/singlekitchen/:id", async (req, res) => {
    let data = await db_con.single_kitchenData(req.params.id)
    res.write(JSON.stringify(data));
    res.end()
}) 


//Ac
app.post('/saveAc', async (req, res) => {
    const { Company, model, old_price, New_price, description, Ac_image } = req.fields
    let data = await db_con.saveAcData(Company, model, old_price, New_price, description, Ac_image)
    res.end()
})

app.get('/getac', async (req, res) => {
    let data = await db_con.getAcData()
    res.write(JSON.stringify(data))
    res.end()
})


app.get("/singleAc/:id", async (req, res) => {
    let data = await db_con.single_AcData(req.params.id)
    res.write(JSON.stringify(data));
    res.end()
})

//Watch
app.post('/savewatch', async (req, res) => {
    const { Company, model, old_price, New_price, description, Watch_image } = req.fields
    let data = await db_con.savewatchData(Company, model, old_price, New_price, description, Watch_image)
    res.end()
})

app.get('/getwatch', async (req, res) => {
    let data = await db_con.getwatchData()
    res.write(JSON.stringify(data))
    res.end()
})


app.get("/singlewatch/:id", async (req, res) => {
    let data = await db_con.single_watchData(req.params.id)
    res.write(JSON.stringify(data));
    res.end()
})



//women
app.post('/savewomen', async (req, res) => {
    const { Company, model, old_price, New_price, description, women_image } = req.fields
    let data = await db_con.savewomenData(Company, model, old_price, New_price, description, women_image)
    res.end()
})

app.get('/getwomen', async (req, res) => {
    let data = await db_con.getwomenData()
    res.write(JSON.stringify(data))
    res.end()
})


app.get("/singlewomen/:id", async (req, res) => {
    let data = await db_con.single_womenData(req.params.id)
    res.write(JSON.stringify(data));
    res.end()
})



//sound boxes
app.post('/savesound', async (req, res) => {
    const { Company, model, old_price, New_price, description, soundbox_image } = req.fields
    let data = await db_con.savesoundbox_imageData(Company, model, old_price, New_price, description, soundbox_image)
    res.end()
})

app.get('/getsound', async (req, res) => {
    let data = await db_con.getsoundbox_imageData()
    res.write(JSON.stringify(data))
    res.end()
})


app.get("/singlesound/:id", async (req, res) => {
    let data = await db_con.single_soundbox_imagedata(req.params.id)
    res.write(JSON.stringify(data));
    res.end()
})


//update data api

app.post("/update_data" , async (req,res) => {
    const {userName,Email,PhoneNumber,password,id} = req.fields;
    let data = await db_con.update_dataData(userName,Email,PhoneNumber,password,id)
    res.end()
})
