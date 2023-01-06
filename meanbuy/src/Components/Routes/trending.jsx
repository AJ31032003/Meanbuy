import React, { useState } from 'react'
import { useEffect } from 'react'
import { getdata } from '../Fetch/axios'
import { Center, Grid, Heading , Image } from '@chakra-ui/react'
import Datamap from '../Fetch/data_map'


const Trending = () => {
    const [data, setdata] = useState([])
    useEffect(()=>{
        getdata({category:"trending",limit:null}).then((res)=>setdata(res.data))
    },[])
    console.log(data)
    if(data.length===0){
      return(
        <Center>
            <Image src='https://i.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.webp' alt="..Loading"/>
        </Center>
      )
    }
  return (
    <>
    <Heading mt="20px">
    <Center>Trending Now:-</Center>
    </Heading>
    <Grid templateColumns={["repeat(2,1fr)","repeat(3,1fr)","repeat(4,1fr)"]} gap="20px" mt="40px">
        {data.map((dat)=>(
            <Datamap key={dat.id} id={dat.id} src={dat.image} price={dat.price} save={dat.save} name={dat.name} category={dat.category} />
        ))}
    </Grid>
    </>
  )
}

export default Trending