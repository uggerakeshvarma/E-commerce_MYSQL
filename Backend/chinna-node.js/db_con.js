let mysql = require('mysql2');

let con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'chinna_E_commarce',
    password: 'Chinnaa@1432'
})


function startConnection() {
    con.connect((err) => {
        if (err) throw err;
        console.log('connected.......')
    })
}


async function getMobile() {
    startConnection();
    let data = await con.promise().query(`SELECT * FROM mobile;`)
    return data[0]
}

// save mobile
async function Savemobile(Company, model, old_price, New_price, description, Mobile_image) {
    let data = await con.promise().query(`insert into  Mobile (Company,model,old_price,New_price,description,Mobile_image)
values  ('${Company}',  '${model}', ${old_price}, ${New_price}, '${description}', '${Mobile_image}'  )`)
    return data[0]
}

//single mobile 


async function Single_Mobile(id) {
    startConnection();
    let data = await con.promise().query(`select * from mobile where  id='${id}' `);
    return data[0];
}

//save register

async function saveregister(userName, Email, PhoneNumber, password) {
    startConnection();
    let data = await con.promise().query(`insert into  register (userName,Email,PhoneNumber,password)
values   ( '${userName}', '${Email}', ${PhoneNumber}, '${password}'   )  `)
    return data[0]
}

//get  Register
async function GetRegister() {
    startConnection();
    let data = await con.promise().query(`SELECT * FROM register;`)
    return data[0]

}

//cart
async function savecart(cart_id) {
    startConnection()
    let data = await con.promise().query(`insert into cart   (cart_id) values (${cart_id})  `)
    return data[0]
}

//get cart
async function getcart() {
    startConnection()
    let data = await con.promise().query(` select c.id,Company,New_price,Mobile_image,c.quantity from mobile as p
    join
    cart  as c  on p.id = c.cart_id 
 `)
    return data[0]
}


// cart delete
async function Cart_delete(id) {
    startConnection();
    let data = await con.promise().query(`delete  from cart  where id=${id}`)
}

//cart  count 
async function cartcount() {
    startConnection()
    let data = await con.promise().query(`select count(id)as cartcount  from cart;`)
    return data[0]
}

//cart total price
async function total_price() {
    startConnection();
    let data = await con.promise().query(`select sum(New_price) as  totalcartprice from mobile as p join cart  as c on  p.id = c. cart_id ;`)
    return data[0]
}
//search mobile 

async function search(Company) {
    startConnection();
    let data = await con.promise().query(`select * from mobile where Company like '%${Company}%'   `)
    return data[0]

}

//save loptop
async function saveLoptop(company, model, old_price, new_price, Disciption, loptop_image) {
    startConnection()
    let data = await con.promise().query(`insert into  loptop (company,model,old_price,new_price,Disciption,loptop_image)
values  ('${company}', '${model}',${old_price},${new_price},'${Disciption}','${loptop_image}'  )`)
    return data[0]
}

//get loptop
async function getloptop() {
    startConnection();
    let data = await con.promise().query(`select * from loptop `)
    return data[0]
}


//single laptop
async function single_laptop(id) {
    startConnection();
    let data = await con.promise().query(`select * from loptop where id= '${id}' `)
    return data[0]
}

//men
async function savemen(Company, old_price, New_price, Size, Description, men_image) {
    startConnection()
    let data = await con.promise().query(`INSERT INTO men  (Company, old_price, New_price, Size, Description, men_image)
values('${Company}', ${old_price}, ${New_price}, '${Size}', '${Description}', '${men_image}' )
`)
    return data[0]
}
// get men

async function getmen() {
    startConnection();
    let data = await con.promise().query(`SELECT * FROM men;`)
    return data[0]

}

//single man
async function singleMen(id) {
    startConnection();
    let data = await con.promise().query(`select * from  men where id='${id}'  `)
    return data[0]
}

//books



async function savebooks(Company, model, old_price, New_price, description, Books_image) {
    let data = await con.promise().query(`insert into  books (Company,model,old_price,New_price,description,Books_image)
values  ('${Company}',  '${model}', ${old_price}, ${New_price}, '${description}', '${Books_image}'  )`)
    return data[0]
}

//getbook

async function Getbook() {
    startConnection()
    let data = await con.promise().query(`SELECT * FROM books;`)
    return data[0]
}

async function singlebook(id) {
    startConnection()
    let data = await con.promise().query(` select * from  books where id='${id}' `)
    return data[0]
}

//save furniture

async function savefurniture(Company, model, old_price, New_price, description, Furniture_image) {
    let data = await con.promise().query(`insert into  furniture (Company,model,old_price,New_price,description,Furniture_image)
values  ('${Company}',  '${model}', ${old_price}, ${New_price}, '${description}', '${Furniture_image}'  )`)
    return data[0]
}
async function getFurniture() {
    startConnection()
    let data = await con.promise().query(`SELECT * FROM furniture;`)
    return data[0]
}

async function single_furniture(id) {
    startConnection()
    let data = await con.promise().query(`  SELECT * FROM furniture where id='${id}' `)
    return data[0]
}

//tv

async function savetv(Company, model, old_price, New_price, description, tv_image) {
    let data = await con.promise().query(`insert into  tvs (Company,model,old_price,New_price,description,tv_image)
values  ('${Company}',  '${model}', ${old_price}, ${New_price}, '${description}', '${tv_image}'  )`)
    return data[0]
}
async function gettv() {
    startConnection()
    let data = await con.promise().query(`SELECT * FROM tvs;`)
    return data[0]
}

async function single_tv(id) {
    startConnection()
    let data = await con.promise().query(`  SELECT * FROM tvs where id='${id}' `)
    return data[0]
}

//Kitchen

async function savekitchen(Company, model, old_price, New_price, description, Kitchen_image) {
    let data = await con.promise().query(`insert into  kitchen (Company,model,old_price,New_price,description,Kitchen_image)
values  ('${Company}',  '${model}', ${old_price}, ${New_price}, '${description}', '${Kitchen_image}'  )`)
    return data[0]
}
async function getkitchen() {
    startConnection()
    let data = await con.promise().query(`SELECT * FROM kitchen;`)
    return data[0]
}

async function single_kitchen(id) {
    startConnection()
    let data = await con.promise().query(`  SELECT * FROM kitchen where id='${id}' `)
    return data[0]
}

//Ac

async function saveAc(Company, model, old_price, New_price, description, Ac_image) {
    let data = await con.promise().query(`insert into  ac (Company,model,old_price,New_price,description,Ac_image)
values  ('${Company}',  '${model}', ${old_price}, ${New_price}, '${description}', '${Ac_image}'  )`)
    return data[0]
}
async function getAc() {
    startConnection()
    let data = await con.promise().query(`SELECT * FROM ac;`)
    return data[0]
}

async function single_Ac(id) {
    startConnection()
    let data = await con.promise().query(`  SELECT * FROM ac where id='${id}' `)
    return data[0]

}

//Watch

async function savewatch(Company, model, old_price, New_price, description, Watch_image) {
    let data = await con.promise().query(`insert into  watches (Company,model,old_price,New_price,description,Watch_image)
values  ('${Company}',  '${model}', ${old_price}, ${New_price}, '${description}', '${Watch_image}'  )`)
    return data[0]
}
async function getwatch() {
    startConnection()
    let data = await con.promise().query(`SELECT * FROM watches;`)
    return data[0]
}

async function single_watch(id) {
    startConnection()
    let data = await con.promise().query(`  SELECT * FROM watches where id='${id}' `)
    return data[0]

}

//women

async function savewomen(Company, model, old_price, New_price, description, women_image) {
    let data = await con.promise().query(`insert into  women (Company,model,old_price,New_price,description,women_image)
values  ('${Company}',  '${model}', ${old_price}, ${New_price}, '${description}', '${women_image}'  )`)
    return data[0]
}
async function getwomen() {
    startConnection()
    let data = await con.promise().query(`SELECT * FROM women;`)
    return data[0]
}

async function single_women(id) {
    startConnection()
    let data = await con.promise().query(`  SELECT * FROM women where id='${id}' `)
    return data[0]

}

//women

async function savesoundboxes(Company, model, old_price, New_price, description, soundbox_image) {
    let data = await con.promise().query(`insert into  soundboxes (Company,model,old_price,New_price,description,soundbox_image)
values  ('${Company}',  '${model}', ${old_price}, ${New_price}, '${description}', '${soundbox_image}'  )`)
    return data[0]
}
async function getsoundboxes() {
    startConnection()
    let data = await con.promise().query(`SELECT * FROM soundboxes;`)
    return data[0]
}

async function single_soundboxes(id) {
    startConnection()
    let data = await con.promise().query(`  SELECT * FROM soundboxes where id='${id}' `)
    return data[0]

}


//update profile

async function update_data(userName, Email, PhoneNumber, password, id) {
    startConnection()
    let data = await con.promise().query(`update register set userName = '${userName}', Email = '${Email}', PhoneNumber = '${PhoneNumber}', password = '${password}' where id = ${id};`)
    return data[0]

}




module.exports = {
    //get mobile
    getMobileData: async () => getMobile(),
    //savemobile 
    SavemobileData: async (Company, model, old_price, New_price, description, Mobile_image) =>
        Savemobile(Company, model, old_price, New_price, description, Mobile_image),


    //singilemobile
    Single_MobileData: async (id) => Single_Mobile(id),
    single_laptopData: async (id) => single_laptop(id),

    // saveregister
    saveregisterData: async (userName, Email, PhoneNumber, password) => saveregister(userName, Email, PhoneNumber, password),
    //get register
    GetRegisterData: async () => GetRegister(),

    //save cart
    savecartDat: async (cart_id) => savecart(cart_id),
    //get cart
    getcartData: async () => getcart(),
    //caer delete 
    Cart_deletedata: async (id) => Cart_delete(id),

    //cartcount 
    cartcountData: async () => cartcount(),
    //total price
    total_priceData: async () => total_price(),

    //Search
    searchData: async (Company) => search(Company),

    //loptop save
    saveLoptopData: async (company, model, old_price, new_price, Disciption, loptop_image) =>
        saveLoptop(company, model, old_price, new_price, Disciption, loptop_image),
    //get loptop
    getloptopData: async () => getloptop(),

    //save men
    savemenData: async (Company, old_price, New_price, Size, Description, men_image) => savemen(Company, old_price, New_price, Size, Description, men_image),
    getmenData: async () => getmen(),
    singleMenData: async (id) => singleMen(id),

    //savbook
    savebooksdata: async (Company, model, old_price, New_price, description, Books_image) => savebooks(Company, model, old_price, New_price, description, Books_image),
    GetbookData: async () => Getbook(),
    singlebookData: async (id) => singlebook(id),

    //save furniture 
    savefurnitureData: async (Company, model, old_price, New_price, description, Furniture_image) => savefurniture(Company, model, old_price, New_price, description, Furniture_image),
    getFurnitureData: async () => getFurniture(),
    single_furnituredata: async (id) => single_furniture(id),

    //save tvs

    savetvData: async (Company, model, old_price, New_price, description, tv_image) => savetv(Company, model, old_price, New_price, description, tv_image),
    gettvData: async () => gettv(),
    single_tvdata: async (id) => single_tv(id),

    //kitchen

    savekitchenData: async (Company, model, old_price, New_price, description, Kitchen_image) => savekitchen(Company, model, old_price, New_price, description, Kitchen_image),
    getkitchenData: async () => getkitchen(),
    single_kitchenData: async (id) => single_kitchen(id),

    //Ac
    saveAcData: async (Company, model, old_price, New_price, description, Ac_image) => saveAc(Company, model, old_price, New_price, description, Ac_image),
    getAcData: async () => getAc(),
    single_AcData: async (id) => single_Ac(id),

    //watches
    savewatchData: async (Company, model, old_price, New_price, description, Watch_image) => savewatch(Company, model, old_price, New_price, description, Watch_image),
    getwatchData: async () => getwatch(),
    single_watchData: async (id) => single_watch(id),
    //women
    savewomenData: async (Company, model, old_price, New_price, description, women_image) => savewomen(Company, model, old_price, New_price, description, women_image),
    getwomenData: async () => getwomen(),
    single_womenData: async (id) => single_women(id),

    //soundboxes
    savesoundbox_imageData: async (Company, model, old_price, New_price, description, soundbox_image) => savesoundboxes(Company, model, old_price, New_price, description, soundbox_image),
    getsoundbox_imageData: async () => getsoundboxes(),
    single_soundbox_imagedata: async (id) => single_soundboxes(id),


    //update data 
    update_dataData: async (userName, Email, PhoneNumber, password, id) => update_data(userName, Email, PhoneNumber, password, id)



}