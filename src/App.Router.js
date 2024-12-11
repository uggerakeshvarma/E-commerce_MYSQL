import {Route, Routes} from 'react-router-dom'
import { Header } from './Header/Header'
import { Mobile } from './Mobile/Mobile'
import { Add_mobile } from './Add.mobile/Add_mobile'
import { Mobile_Page } from './mobilepage/Mobile_page'
import { Single_Mobile } from './single_mobile/single_mobile'
import { Register } from './Register/Register'
import { Login } from './Login/Login'
import { Cart } from './Cart/Cart'
import { Laptop } from './laptop/laptop'
import { Add_Loptop } from './Add_loptop/Add_Loptop'
import { Laptop_Page } from './Loptop_page/Loptop_page'
import { Single_lptop } from './single_laptop/Single_laptop'
import { Men } from './men/Men'
import { Add_Men, Ass_Men } from './Add_men/add_men'
import { Men_Page } from './Men_page/Men_page'
import { Single_Men } from './single_men/single_men'
import { Add_Books } from './add_books/add_books'
import { Book } from './Books/Books'
import { Book_Page } from './Books/Book_page'
import { Single_Book } from './Books/single_book'
import { Add_Furniture } from './Add_Furniture/Add_Furniture'
import { Furniture } from './FORNITURE/furniture'
import { Furniture_Page } from './FORNITURE/furniture_page'
import { Single_Forniture } from './FORNITURE/single_furniture'
import { Add_Tvs } from './Add_tv/Add_tv'
import { Tv } from './Tv/Tv'
import { Tv_Page } from './Tv/tv_page'
import { Single_Tv } from './Tv/Single_tv'
import { Add_Kitchen } from './Add_kitchen/add_kitchen'
import { Kitchen } from './Kitchen/Kitchen'
import { Kitchen_Page } from './Kitchen/Kitchen_page'
import { Single_Kitchen } from './Kitchen/single_kitchen'
import { Add_Ac } from './Add_Ac/add_Ac'
import { Ac } from './Ac/Ac'
import { Ac_Page } from './Ac/Ac_page'
import { Single_Ac } from './Ac/single_ac'
import { Add_Watch } from './Add_watch/Add_watch'
import { Watch } from './Watch/Watch'
import { Watch_Page } from './Watch/Watch_page'
import { Single_Watch } from './Watch/Single_watch'
import { Add_Women } from './Add_women/Add_women'
import { Women } from './Women/Women'
import { Women_Page } from './Women/Women_page'
import { Single_Women } from './Women/Single_women'
import { Add_soundBoxes } from './Add_soundboxes/Add_soundboxes'
import { SoundBoxes } from './Soundboxes/soundboxes'
import { Soundboxe_Page } from './Soundboxes/SoundBoxes_page'
import { Single_Soundboxes } from './Soundboxes/Single_soundboxes'
import { Slick_image } from './Image courser/Image_courser'
import { Slick_image1 } from './Image courser/Image_courser2'
import { Edit_Data } from './Edit Data/Edit_Profile'




export function AppRoute(){
    return(
        <>
  <Routes>
    <Route path='/Header' element={<Header></Header>}></Route>
    <Route path='/mobile' element={<Mobile></Mobile>}></Route>
    <Route path='/' element={<Mobile></Mobile>}></Route>
    <Route path='/add_mobile' element={<Add_mobile></Add_mobile>}></Route>
    <Route path='/mobilepage' element={<Mobile_Page></Mobile_Page>}></Route>
    <Route path='/singlemobile/:id' element={<Single_Mobile></Single_Mobile>}></Route>
    <Route path='/register' element={<Register></Register>}></Route>
    <Route path='/login' element={<Login></Login>}></Route>
    <Route path='/cart' element={<Cart></Cart>}></Route>
    <Route path='Edit_Data' element={<Edit_Data></Edit_Data>}></Route>

    //laptop

    <Route path='/laptop' element={<Laptop></Laptop>}></Route>
    <Route path='/add_loptop' element={<Add_Loptop></Add_Loptop>}></Route>
    <Route path='/laptoppage' element={<Laptop_Page></Laptop_Page>}></Route>
    <Route path='/singlelaptop/:id' element={<Single_lptop></Single_lptop>}></Route>
    //men
    <Route path='/men' element={<Men></Men>}></Route>
    <Route path='/add_men' element={<Add_Men></Add_Men>}></Route>
    <Route path='/menpage' element={<Men_Page></Men_Page>}></Route>
    <Route path='/sinlemen/:id' element={<Single_Men></Single_Men>}></Route>
    //book
    <Route path='/add_book' element={<Add_Books></Add_Books>}></Route>
    <Route path='/book' element={<Book></Book>}></Route>
    <Route path='/bookpage' element={<Book_Page></Book_Page> }   ></Route>
    <Route path='/singlebook/:id' element={<Single_Book></Single_Book>} ></Route>
    //forniture
    <Route path='/add_forniture' element={<Add_Furniture></Add_Furniture>}></Route>
    <Route path='/furnitur' element={<Furniture></Furniture>}></Route>
    <Route path='/furniture_page' element={<Furniture_Page></Furniture_Page>}></Route>
    <Route path='/siglefuniture/:id' element={<Single_Forniture></Single_Forniture>}></Route>
    //tv
    <Route path='/add_tv' element={<Add_Tvs></Add_Tvs>}></Route>
    <Route path='/tv' element={<Tv></Tv>}></Route>
    <Route path='/tvpage'  element={<Tv_Page></Tv_Page>} ></Route>
    <Route path='/single_page/:id' element={<Single_Tv></Single_Tv>}></Route>


    //kitchen
    <Route path='/add_kitchen' element={<Add_Kitchen></Add_Kitchen>}></Route>
    <Route path='/kitchen' element={<Kitchen></Kitchen>}></Route>
    <Route path='/Kitchenpage' element={<Kitchen_Page></Kitchen_Page>}></Route>
    <Route path='/sinlekitchen/:id'  element={<Single_Kitchen></Single_Kitchen>}></Route>
    //Ac
    <Route path='/Add_ac' element={<Add_Ac></Add_Ac>}></Route>
    <Route path='/Ac' element={<Ac></Ac>}></Route>
    <Route path='/Acpage' element={<Ac_Page></Ac_Page>} ></Route>
   <Route path='/singleac/:id' element={<Single_Ac></Single_Ac>}></Route>

   //watch
   <Route path='/Add_watch' element={<Add_Watch></Add_Watch>}></Route>
   <Route path='/watch' element={<Watch></Watch>}></Route>
   <Route path='/watchpage' element={<Watch_Page></Watch_Page>}></Route>
   <Route path='/singlewatch/:id' element={<Single_Watch></Single_Watch>}></Route>
   //women
   <Route path='/Add_women' element={<Add_Women></Add_Women>}></Route>
   <Route path='/women' element={<Women></Women>}></Route>
   <Route path='/womenpage' element={<Women_Page></Women_Page>}></Route>
   <Route path='/singlewomen/:id' element={<Single_Women></Single_Women>}></Route>

   //soundboxes 
   <Route path='/Add_sound' element={<Add_soundBoxes></Add_soundBoxes>}></Route>
   <Route path='/SoundBoxes' element={<SoundBoxes></SoundBoxes>}></Route>
   <Route path='/soundboxespage' element={<Soundboxe_Page></Soundboxe_Page>}></Route>
   <Route path='/single_soundbxes/:id' element={<Single_Soundboxes></Single_Soundboxes>}></Route>

<Route path='/slicks' element={<Slick_image></Slick_image>}></Route>
<Route path='/slicks2' element={<Slick_image1></Slick_image1>}></Route>
 
 </Routes> 
        </>
    )
}