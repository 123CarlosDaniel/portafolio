import { Box, Button, Container, Grid, Paper, styled, Typography } from "@mui/material";
import img1 from "../public/img1.jpg";
const projects = [
  {
    title: "Projects",
    description: "Projects",
    img: img1,
  },
];
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const navigate = (link) => {
  window.open(link, "_blank");
}
const Projects = () => {
  return (
    <Box>
      <Container sx={{ minHeight: "100vh" }}>
        <Typography variant="h4" textAlign={"center"}>
          My projects
        </Typography>
        <Box sx={{marginTop:"2rem"}}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={4}>
              <Item elevation={3}>
                <Box position={"relative"}>
                  <Typography variant="h6">titulo</Typography>
                  <img src={img1} alt="" />
                  <div className="btn-cont">
                  <Button variant="contained" color="warning" onClick={()=>navigate("https://www.youtube.com/")}>Ver proyecto</Button>
                  </div>
                </Box>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;
