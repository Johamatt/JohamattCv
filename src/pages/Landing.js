import { React, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  IconButton,
  Collapse,
  Grid,
  Container,
  Button,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link as Scroll } from "react-scroll";
import Typical from "react-typical";
import video from "../static/media/Black-headervid.mp4";
import MoonSwitch from "../components/Switch";

import { FaGithub, FaLinkedin } from "react-icons/fa";


const useStyles = makeStyles((theme) => ({
  //*** ROOT ***//
  root: {
    backgroundColor: "var(--black)",
    height: "100vh",
    flexGrow: "1",
      
  },
  bgvideo: {
    height: "100%",
    width: "100%",
    position: "absolute",
    objectFit: "fill",
    opacity: 0.05,
  },

  //** RIGHT + LEFT COL */
  topGrid: {
    margin: "8rem 0rem 0rem 1rem",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      marginTop: '5rem',
      width: '100%'

    },
  },

  //** RIGHT COL **/

  rightCol: {
    textAlign: 'right',
    order:2,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      order:1,
      maxWidth: '90%',

    },
  },

  //** LEFT COL ***//

  leftCol: {
    order:1,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      order:2,

    },
  },


  h2: {
    color: "#EEEEEF",
    fontFamily: "Lato",
    fontSize: "3.75rem",
    fontWeight: "900",
    [theme.breakpoints.down("md")]: {
      fontSize: "3.3rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.9167rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.375rem",
    },
    
  },
  dividerEllipse: {
    background:
    "radial-gradient(ellipse at center, #db2c2c 0%, rgba(255, 255, 255, 0) 70%)",
    width: "100%",
    height: "1.5px",
  },

  typical: {
    display: "inline",
    color: "var(--crimson)",
    [theme.breakpoints.down("xs")]: {
      display: "block",
      marginTop: "0",
    },
  },

  icon: {
    color: "var(--white)",
    fontSize: "3rem",

    [theme.breakpoints.down("md")]: {
      fontSize: "2.7rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.4rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.3rem",
    },
  },

  //**BOTTOM GRID**//

  bottomGrid: {
    textAlign: "center",

  },

  downArrow: {
    color: "var(--white)",
    fontSize: "4rem",
    background: "rgba(0, 0, 0, 0.5)",
    borderRadius: "50%",
    [theme.breakpoints.down("sm")]: {
      fontSize: '3rem'
    },
  },
  animatedIcon: {
    color: "var(--white)",
    fontSize: "3rem",
    borderRadius: "50%",
    animation: `$float 8s infinite ${theme.transitions.easing.easeInOut}`,
    [theme.breakpoints.down("sm")]: {
      fontSize: '1rem'
    },
  },
  "@keyframes float": {
    "0%": {
      boxShadow: "0 5px 15px 0px rgba(0,0,0,0.6)",
      transform: "translatey(0px)",
    },
    "50%": {
      boxShadow: "0 25px 15px 0px rgba(0,0,0,0.2)",
      transform: "translatey(-20px)",
    },
    "100%": {
      boxShadow: "0 5px 15px 0px rgba(0,0,0,0.6)",
      transform: "translatey(0px)",
    },
  },
}));

export default function Header() {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  const classes = useStyles();
  return (
    <div className={classes.root} id="header">
      <video className={classes.bgvideo} muted loop autoPlay>
        <source src={video} type="video/mp4" />
        <source src={video} type="video/ogg" />
        Your browser does not support the video tag.
      </video>

      <Grid>
        <Container maxWidth="lg">
          <Collapse
            in={checked}
            {...(checked ? { timeout: 2000 } : {})}
            collapsedHeight={50}
          >
            <Grid container spacing={4} className={classes.topGrid} >
              {/* LEFT COL */}
              <Grid item xs={6} className={classes.leftCol}>
                <Grid>
                  <h2 className={classes.h2}>
                    Welcome to my portfolio, <br /> I'm{" "}
                    <Typical
                      className={classes.typical}
                      steps={["Coder", 1000, "Student", 1000]}
                      loop={Infinity}
                      wrapper="p"
                    />
                  </h2>
                  <div className={classes.dividerEllipse} />
                  <br />
                </Grid>
                <Grid>
                  <Button
                    
                    variant="text"
                    color="primary"
                    target="_blank"
                    href="https://github.com/johamatt"
                  >
                    <FaGithub className={classes.icon} />
                  </Button>
                  <Button          
                      
                    variant="text"
                    color="primary"
                    target="_blank"
                    href="https://www.linkedin.com/in/johannes-mattila-17972a209/"
                  >
                    <FaLinkedin className={classes.icon}   />
                  </Button>
                </Grid>
              </Grid>
    
          
              {/* RIGHT COL*/}
          /*
              <Grid item xs={5} className={classes.rightCol}>
                <Grid>
                  <MoonSwitch />
                </Grid>
              </Grid>
            </Grid>
          </Collapse>
          */

          {/*BOTTOM BUTTON */}
          <Grid item xs={12} className={classes.bottomGrid}>
            <Scroll to="about-page" smooth={true} offset={-50}>
              <IconButton className={classes.animatedIcon}>
                <ExpandMoreIcon className={classes.downArrow} />
              </IconButton>
            </Scroll>
          </Grid>
        </Container>
      </Grid>
    </div>
  );
}
