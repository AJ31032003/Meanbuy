import { HStack,Image, Box, Text, Button, Heading, Flex, Spacer } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { getcart, rem } from './Fetch/axios'


const Cart = () => {
    const [data, setdata] = useState([])
    const [final, setfinal] = useState({
        id:"",
        image:"",
        name:"",
        price:"",
        save:"",
        wasPrice:""
      })
      const [tot, settot] = useState(0)
    useEffect(()=>{
        getcart().then((res)=>setdata(res.data))
    },[])
    // console.log(data)
    const handleDelete=async (e)=>{
        setfinal({...final,id:e.id,image:e.image,name:e.name,price:e.price,save:e.save,wasPrice:e.wasPrice})

    }
    useEffect(()=>{
        if(final.image!=""){
            console.log("hi")
            del(final)
            getcart().then((res)=>setdata(res.data))
            setfinal({...final,
                id:"",
                image:"",
                name:"",
                price:"",
                save:"",
                wasPrice:""
              })
              total=total-Number(final.price)
        }
        // getcart().then((res)=>setdata(res.data))
    },[handleDelete])
    
    const del=(e)=>{
        rem(e.id)
    }
    // console.log(data.price)
    let total=0

  return (
    <>
    <div>Cart</div>
    <Flex>
        <Box>

    {data.map((dat)=>(
        <HStack key={dat.id}>
            {total=total+Number(dat.price)}
            <Image src={dat.image}/>
            <Box>
                <Text>
                {dat.name}
                </Text>
                <Text>
                   ₹ {dat.price}
                </Text>
            </Box>
            <Button onClick={()=>handleDelete(dat)}>Remove</Button>
        </HStack>
    ))}
    </Box>
    <Spacer/>
    <Box>
    <Text>Cart Total: {total}</Text>
        <NavLink to={`/buy/${total}`}>
        <Button>Checkout</Button>
        </NavLink>
        
    </Box>
    </Flex>
    </>
  )
}

export default Cart