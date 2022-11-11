import React from 'react'
import {Stack,Image,Box,Heading, Button} from "@chakra-ui/react"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { putcart } from './axios'

const Datamap = ({id,src,name,price,save}) => {
  const [final, setfinal] = useState({
    id:"",
    image:"",
    name:"",
    price:"",
    save:""
  })
  const handleAdd=async ({id,src,name,price,save})=>{
    
    setfinal({...final,id:id,image:src,name:name,save:save,price:price})
    
  }
  useEffect(()=>{
    if(final.image!=""){
      handleSubmit(final)
      alert("Product has been added to cart.")
    }
  },[handleAdd])
  const handleSubmit=(e)=>{
    putcart(e)
  }
  return (
    <>
        <Stack  key={id}>
        <Link to={`/category/${id}`}>
        <Image w="100%" src={src} />
        <Box>{name}</Box>
        <Heading >
          ₹ {price}
          </Heading>
        <Box >
          {save}
          </Box>
        </Link>
          <Button onClick={()=>handleAdd({id,src,name,price,save})}>Add to Cart</Button>
      </Stack>
    </>
  )
}

export default Datamap