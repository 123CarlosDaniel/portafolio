import { Box, Container, Typography } from "@mui/material"
import {GitHub, LinkedIn, Twitter, Facebook, Copyright} from "@mui/icons-material"

const Footer = () => {
  return (
    <Box component={"footer"} sx={{marginTop:{xs:"2rem", lg:"0"}}}>
      <Container sx={{display: "flex", flexDirection:"column",gap:"0.5rem"}} >
        <Box sx={{display:"flex", justifyContent:"center", gap:"0.5rem"}}>
          <GitHub color="secondary" fontSize="large" sx={{cursor:"pointer"}}></GitHub>
          <LinkedIn color="secondary" fontSize="large" sx={{cursor:"pointer"}}></LinkedIn>
          <Twitter color="secondary" fontSize="large" sx={{cursor:"pointer"}}></Twitter>
          <Facebook color="secondary" fontSize="large" sx={{cursor:"pointer"}}></Facebook>
        </Box>
        <Box sx={{display:"flex", justifyContent:"center", gap:"0.5rem"}}>
          <Copyright sx={{alignSelf:"center"}}></Copyright>
          <Typography variant="h6" sx={{textAlign:"center"}}>
            Hecho por CDCM
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer