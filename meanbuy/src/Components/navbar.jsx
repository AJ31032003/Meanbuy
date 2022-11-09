import React from 'react'
import {Box,HStack,Text,Image,Input, Flex,Link} from "@chakra-ui/react"
import { Navigate, NavLink} from "react-router-dom"

const links=[
  {
      to:"/Category",
      title:"Category"
  },
  {
      to:"/flashsale",
      title:"Flash Sale"
  },
  {
      to:"/bestdeals",
      title:"Best deals"
  },
  {
    to:"/shopbrand",
    title:"Shop By Brand"
  },
  {
    to:"/trending",
    title:"Trending"
  },{
    to:"new",
    title:"New Arrivals"
  }
]
const Navbar = () => {
  return (
    <>
    <div>
        <Box color='white' bg="black" w="100%" h="25px" >
             <Text ml="30%">
             Upto Rs.500 off on Prepaid Purchases use coupon code - PREPAID 
             </Text>
             </Box>
        <HStack spacing={20} >
            <Image src="https://d64lkarmo2mrq.cloudfront.net/baselogo.png" w="200px"ml="20px"/>
            <Input placeholder='Search' w="20%"/>
            <Flex fontSize={15}>
                <Link href='https://www.meanbuy.com/in/merchant/signup'>Seller's Corner </Link>
                <Link href='https://www.meanbuy.com/in/contact'>| Feedback </Link>
                <Link href='https://www.meanbuy.com/in/blog'>| Blog </Link>
                <Link href='https://www.meanbuy.com/in/shipping_return'>| Delivery's Info </Link>
            </Flex>
            <Box>
                <Link>Login / </Link>
                <Link>SignUp</Link>
                <Text>Welcome User</Text>
            </Box>
            <Image w="50px" src='https://cdn-icons-png.flaticon.com/512/891/891462.png'/>
        </HStack>
        
    </div>
    <Box>
        {links.map((link)=>(
          <NavLink key={link.to} to={link.to}>
          ★ {link.title} 
          </NavLink>
      
        ))}
        </Box>
    </>
  )
}

export default Navbar