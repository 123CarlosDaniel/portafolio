import { Box, Button, Container, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import imageDev from "../public/webdev.webp";


const Home = () => {
  const [showButton, setShowButton] = useState(false)
  const navigate = useNavigate();
  const handleContact = () => {
    navigate("/contact");
  }

  const handleHoverEnter = (e) => {
    setShowButton(true)
  }
  const handleHoverLeave = (e) => {
    setShowButton(false)
  }
  
  return (
    <Box component={"section"}>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: { md: "space-between", xs: "center" },
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: "1rem", md: "2rem" },
          }}
        >
          <Box
            sx={{
              minHeight: { xs: "30vh", md: "70vh" },
              paddingTop : "2rem",
              width: { md: "40%", xs: "100%" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: { xs: "center", lg: "left" },
            }}
          >
            <Typography variant="h6" sx={{ marginBottom: "1rem"  }}>
              Hi welcome!
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: "#42a5f5",
                fontWeight: "500",
                letterSpacing: "1px",
                marginBottom: "1rem",
              }}
            >
              I'm Pepito
            </Typography>
            <Typography
              paragraph
              sx={{ lineHeight: "1.5", letterSpacing: "0.5px" }}
            >
              <span className="home_highlight">FullStack Web Developer</span>
              <br />
              HTML, CSS, JavaScript ES6+, Bootstrap <br />
              ReactJS, NodeJS, Express, MongoDB, MySQL, <br />
              PostgreSQL, Material UI, etc.
              <br />
            </Typography>
            <Button sx={{width:"8rem", margin:{lg:"0", xs:"0 auto"} }} variant="contained" color="success" onClick={handleContact}>Contact me</Button>
          </Box>
          <Box
            component={"div"}
            sx={{
              width: { md: "50%", xs: "80%" },
              height: { xs: "40vh", md: "60vh" },
              display: "flex",
              alignSelf: "center",
              margin:{ lg:"0", xs:"0 auto"},
              backgroundColor:"black",
              borderRadius: "50px",
              overflow: "hidden",
              position: "relative",
            }}
            id="home_image"
            onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverLeave}
          >
            <img src={imageDev} alt="webdev" className={!showButton ?"img_webdev" : "img_webdev hover"} />
             <div className={showButton ?"active btn-cont":"btn-cont"}>
              <Button sx={{width:"10rem" }} variant="contained" color="error"  onClick={handleContact}>See projects</Button>
             </div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
