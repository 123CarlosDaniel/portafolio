import { Box, Container, Typography } from "@mui/material"
import MyForm from "./Form"

const Contact = () => {
  return (
    <Box sx={{minHeight:"70vh"}}>
      <Container>
        <Box >
          <Typography variant="h4" textAlign={"center"} sx={{marginBottom:"1.2rem"}}>Contact me</Typography>
          <MyForm></MyForm>
        </Box>
      </Container>
    </Box>
  )
}

export default Contact