import React, { useState } from 'react'
import { useEffect } from 'react'
import { getdata } from '../Fetch/axios'
import { Grid } from '@chakra-ui/react'
import Datamap from '../Fetch/data_map'


const Trending = () => {
    const [data, setdata] = useState([])
    useEffect(()=>{
        getdata({category:"trending",limit:null}).then((res)=>setdata(res.data))
    },[])
    console.log(data)
  return (
    <>
    <Grid templateColumns="1fr 1fr 1fr 1fr" gap="20px">
        {data.map((dat)=>(
            <Datamap key={dat.id} id={dat.id} src={dat.image} price={dat.price} save={dat.save} name={dat.name} category={dat.category} />
        ))}
    </Grid>
    </>
  )
}

export default Trending