import { useNavigate, useLocation } from "react-router-dom";
import { Container, Tab, Tabs, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Book, Email, Home, Person } from "@mui/icons-material";
import "./styles.css";
const LinkTab = (props) => {
  const navigate = useNavigate();
  return (
    <Tab
      component="a"
      onClick={(e) => {
        e.preventDefault();
        navigate(props.href);
      }}
      {...props}
    />
  );
};

const Nav = () => {
  const [value, setValue] = useState(0);
  const location = useLocation();
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setValue(0);
        break;
      case "/about":
        setValue(1);
        break;
      case "/projects":
        setValue(2);
        break;
      case "/contact":
        setValue(3);
        break;
      default:
        setValue(0);
    }
  }, [location.pathname]);

  return (
    <Container sx={{ display: "flex", justifyContent: "space-between" }}>
      <Typography
        variant="h4"
        sx={{ verticalAlign: "center", lineHeight: "2.2", fontWeight: "500", letterSpacing: "1px" }}
      >
        <span className="nav_title">C</span>D
        <span className="nav_title">C</span>M
      </Typography>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
      >
        <LinkTab icon={<Home />} iconPosition="start" label="Home" href="/" />
        <LinkTab
          icon={<Person />}
          iconPosition="start"
          label="About me"
          href="/about"
        />
        <LinkTab
          icon={<Book />}
          iconPosition="start"
          label="Projects"
          href="/projects"
        />
        <LinkTab
          icon={<Email />}
          iconPosition="start"
          label="Contact me"
          href="/contact"
        />
      </Tabs>
    </Container>
  );
};

export default Nav;
