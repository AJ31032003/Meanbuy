import { Box ,Grid,GridItem } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {getdata} from '../Fetch/axios'
import Datamap from '../Fetch/data_map'

const Category = () => {
    const [data, setdata] = useState([])
    const [cat, setcat] = useState(null)

    useEffect(()=>{
        getdata({category:cat,limit:null}).then((res)=>setdata(res.data))    
    },[cat])
    console.log(cat)

  return (
    <div>
        <Box bg="black" color="white">
            <Grid templateColumns="repeat(8,150px)" templateRows="repeat(5,25px)" gap="20px">
                <GridItem>
                <GridItem cursor="pointer" onClick={()=>setcat("Kitchen")}>Kitchen</GridItem>
                <GridItem cursor="pointer"onClick={()=>setcat("fashion")}>Fashion</GridItem>
                </GridItem>
                <GridItem>
                    <GridItem cursor="pointer" onClick={()=>setcat("home_decor")}>Home decor</GridItem>
                    <GridItem cursor="pointer" onClick={()=>setcat("electronic")}>Electronic</GridItem>
                </GridItem>
                <GridItem>
                    <GridItem cursor="pointer" onClick={()=>setcat("jewellery")}>Jewellery</GridItem>
                    <GridItem cursor="pointer" onClick={()=>setcat("Bluetooth")}>Bluetooth</GridItem>
                </GridItem>
                <GridItem>
                    <GridItem cursor="pointer" onClick={()=>setcat("home_improvement")}>Home Improvement</GridItem>
                    <GridItem cursor="pointer" onClick={()=>setcat("keyboard")} >Keyboard</GridItem>
                </GridItem>
                <GridItem>
                    <GridItem cursor="pointer" onClick={()=>setcat("Makeup")}>Makeup</GridItem>
                    <GridItem cursor="pointer" onClick={()=>setcat("men_watch")}>Men's Watch</GridItem>
                </GridItem>
                <GridItem>
                    <GridItem cursor="pointer" onClick={()=>setcat("mobile")}>Mobile Accesories</GridItem>
                    <GridItem cursor="pointer" onClick={()=>setcat("small")}>Small Appliances</GridItem>
                </GridItem>
                <GridItem>
                    <GridItem cursor="pointer" onClick={()=>setcat("toys")}>Toys</GridItem>
                </GridItem>
            </Grid>          
        </Box>
        <Grid templateColumns="1fr 1fr 1fr 1fr" gap="10px">
            
            {data.map((dat)=>(
                <Datamap key={dat.id} id={dat.id} src={dat.image} price={dat.price} save={dat.save} name={dat.name} category={dat.category} />
            ))}
        </Grid>
    </div>
  )
}

export default Category