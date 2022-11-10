import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getid } from '../Fetch/axios'
import {Box, Stack, Image,Text, Heading} from "@chakra-ui/react"

const Single = () => {
    const params= useParams()
    const [data, setdata] = useState([])
    console.log(params.product_id)
    useEffect(()=>{
        getid({id:params.product_id}).then((res)=>setdata(res.data))
    },[])
    console.log(data)
  return (
    <div>
      {data.map((dat)=>(
        <Stack>
          <Box>
          <Image src={dat.image} w="90%"/>
          </Box>
          <Box>
          <Heading>{dat.name}</Heading>
          <Text>Before: ₹{dat.wasPrice}</Text>
          <Heading>Offer Price: ₹{dat.price}</Heading>
          <Text>Valid for today only... .. .</Text>
          </Box>
          
        </Stack>
      ))}
    </div>
  )
}

export default Single