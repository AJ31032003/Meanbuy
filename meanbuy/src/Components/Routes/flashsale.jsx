import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Datamap from '../Fetch/data_map'
import { getdata } from '../Fetch/axios'
import { Grid,Center,Image } from '@chakra-ui/react'

const Flashsale = () => {
  const [flash, setflash] = useState([])
  // const [loading, setloading] = useState(false)
  useEffect(()=>{
    // setloading(true)
    getdata({category:"flashsale",limit:null}).then((res)=>setflash(res.data)) 
    // setloading(false)   
  },[])
  // console.log(flash)
  if(flash.length===0){
    return(
      <Center>
                <Image src='https://i.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.webp' alt="..Loading"/>
            </Center>
    )
  }
  return (
    <Grid templateColumns={["repeat(2,1fr)","repeat(3,1fr)","repeat(4,1fr)"]} gap="10px">
    {flash.map((dat)=>(
        <Datamap key={dat.id} id={dat.id} src={dat.image} price={dat.price} save={dat.save} name={dat.name} category={dat.category} />
     ))}
    </Grid>
  )
}

export default Flashsale