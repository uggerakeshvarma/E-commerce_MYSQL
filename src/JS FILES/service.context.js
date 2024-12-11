import axios from "axios";


export function Read(url) {
    return axios.get(url)
}

export function save(url, data) {
    return axios.post(url, data)
}

export function update(url , data){
    return axios.put(url, data)
}

export function Deleteitem (url) {
    return axios.delete(url)
}