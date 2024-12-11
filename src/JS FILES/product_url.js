import { Read } from "./service.context";

const moblieurl = 'http://localhost:3001/getmpbile'
export function GetMobile() {
    return Read(moblieurl)
}


const getregisterurl = 'http://localhost:3001/getregister'
 export function getregister_api(){
    return Read(getregisterurl)
}

//get cart

const getcarturl ='http://localhost:3001/getcart'

export function getcart_api(){
    return Read(getcarturl)
}

//loptop
const getlaptop = 'http://localhost:3001/getloptop'

export function getloptopurl(){
    return Read(getlaptop)
}

//men 
const getmenurl = 'http://localhost:3001/getmen'

export function getmenUl(){
    return Read(getmenurl)
}