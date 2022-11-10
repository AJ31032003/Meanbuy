import React from 'react'
import {Stack,Image,Box,Heading} from "@chakra-ui/react"
import { Link } from 'react-router-dom'

const Datamap = ({id,src,name,price,save}) => {
  return (
    <>
        <Link to={`/category/${id}`}>
        <Stack  key={id}>
        <Image w="100%" src={src} />
        <Box>{name}</Box>
        <Heading >
          ₹ {price}
          </Heading>
        <Box >
          {save}
          </Box>
      </Stack>
        </Link>
    </>
  )
}

export default Datamap