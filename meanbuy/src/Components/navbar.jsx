import React from 'react'
import {Box,HStack,Text,Image,Input, Flex,Link} from "@chakra-ui/react"

const Navbar = () => {
  return (
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
            <Image src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCAAiACgDASIAAhEBAxEB/8QAGgABAAIDAQAAAAAAAAAAAAAAAAMGBAUHAv/EACUQAAEEAQIGAwEAAAAAAAAAAAEAAgMEEQVBEhQhMVFhBhMigf/EABgBAAMBAQAAAAAAAAAAAAAAAAACBAMB/8QAIBEAAgICAQUBAAAAAAAAAAAAAAECAwQREyExQVFxFP/aAAwDAQACEQMRAD8A7bPYhrtDp5o4mk4Be4NBP9XsEEZByCo7NeG1EY542vadnDOPY9qgXJr9GzJVdbsD6jwjEjh0238KLKy3jaco7TLMbFWRtJ6aOiKC1cq02tdcswwNe7haZZA0E+BndUnSHX9QvxwC5ZDc5e4Su6NHdbz5Tp9u1LFLVqc0OVnrlnG1paZA3Dv0QMDBzv17FNi5X6IuSjpC5ONwSUXLZYUUFGF1elXgkdxPjiaxzvJAxlFY+5IuxOqvyr7Wo3Q2OjckEhJMj3AtHYDHrCtCx4KVavNLNDE1kkpy9w3U19PK4rwiim7iUn5ZqdNLqmpNqGChA94y4ROcXkY9rfLHNKsbguGJvMAYD/SyE1FbrTi/fT4cusVjTXrr9CIi2MQiIgAiIgAiIgD/2Q=='/>
        </HStack>
    </div>
  )
}

export default Navbar