import React from 'react'
import {Stack,Text,Image,Box,Heading} from "@chakra-ui/react"

const Datamap = ({id,src,name,price,save}) => {
  return (
    <>
        <Stack  key={id}>
        <Image w="350px" src={src} />
        <Box>{name}</Box>
        <Heading >
          {price}
          </Heading>
        <Box >
          {save}
          </Box>
      </Stack>
    </>
  )
}

export default Datamap