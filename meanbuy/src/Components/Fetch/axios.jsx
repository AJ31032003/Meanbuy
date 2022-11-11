import axios from "axios"


export const getdata=({category,limit})=>{
    return axios.get("http://localhost:8000/data",{
        params:{
            category:category,
            _limit:limit
        }
    })
}

export const getid=({id})=>{
    return axios.get(`http://localhost:8000/data?id=${id}`)
}

export const getcart=()=>{
    return axios.get("http://localhost:8080/data")
}

export const putcart=(data)=>{
    // console.log(data)
    return axios.post("http://localhost:8080/data",data).then((res)=>console.log(res))
}

export const rem=(data)=>{
    // console.log(data)
    return axios({
        method:"delete",
        baseURL:"http://localhost:8080",
        url:`/data/${data}`
    })
} 
