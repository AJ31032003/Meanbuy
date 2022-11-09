import axios from "axios"


export const getdata=({category,limit})=>{
    return axios.get("http://localhost:8000/data",{
        params:{
            category:category,
            _limit:limit
        }
    })
}
