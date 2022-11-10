import { Grid, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { getdata } from '../Fetch/axios'
import Datamap from '../Fetch/data_map'

const keys=[
    {k:"Bluetooth"},
    {k:"electronic"},
    {k:"fashion"},
    {k:"home_decor"},
    {k:"home_improvement"},
    {k:"jewellery"},
    {k:"keyboard"},
    {k:"Kitchen"},
    {k:"Makeup"},
    {k:"men_watch"},
    {k:"mobile"},
    {k:"small"},
    {k:"toys"}
]

const Search = () => {
    const [sea, setsea] = useState(null)
    const [fianl, setfianl] = useState(null)
    const [data, setdata] = useState([])
    console.log(sea,fianl)
    useEffect(()=>{
        getdata({category:fianl,limit:null}).then((res)=>setdata(res.data))
    },[fianl])
    console.log(data)
  return (
    <>
    Search like these :-
    <Grid templateColumns="1fr 1fr 1fr 1fr 1fr 1fr" color="blue">
        {keys.map((ke)=>(
            <div key={ke.k}>
                {ke.k}
            </div>
        ))}
    </Grid>
    <>
    <Input onChange={(e)=>setsea(e.target.value)} placeholder="search" />
    <button onClick={()=>setfianl(sea)}>Search</button>
    </>
    <Grid templateColumns="1fr 1fr 1fr 1fr">
    {data.map((dat)=>(
           <Datamap key={dat.id} id={dat.id} src={dat.image} price={dat.price} save={dat.save} name={dat.name} category={dat.category} />
    ))}
    </Grid>
    </>
  )
}

export default Search