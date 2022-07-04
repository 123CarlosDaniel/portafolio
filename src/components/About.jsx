import { Box, Container, Typography } from "@mui/material";

const About = () => {
  return (
    <Box component={"section"} sx={{ minHeight: "70vh", paddingTop: "2rem" }}>
      <Container>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h4">Knowledge and skills</Typography>
          <Box sx={{ display: "flex", flexDirection: {md: "row", xs:"column"} }}>
            <Box sx={{ textAlign: "left", width: { xs: "100%", lg: "50%" } }}>
              <Typography variant="h6" sx={{ textAlign: "center" }}>
                Back end knowledge
              </Typography>
              <Box>
                <ul>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>MongoDB</li>
                  <li>Mongoose</li>
                  <li>MySQL</li>
                  <li>PostgreSQL</li>
                  <li>Auth with JWT and Passport</li>
                  <li>Golang</li>
                  <li>Basic Python</li>
                  <li>Deploy on Heroku</li>
                </ul>
              </Box>
            </Box>
            <Box sx={{ textAlign: "left", width: { xs: "100%", lg: "50%" } }}>
              <Typography variant="h6" sx={{ textAlign: "center" }}>
                Front end knowledge
              </Typography>
              <Box>
                <ul>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>MongoDB</li>
                  <li>Mongoose</li>
                  <li>MySQL</li>
                  <li>PostgreSQL</li>
                  <li>Auth with JWT and Passport</li>
                  <li>Golang</li>
                  <li>Basic Python</li>
                  <li>Deploy on Heroku</li>
                </ul>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
