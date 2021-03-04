import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { IoPerson, IoMailSharp, IoCallSharp } from "react-icons/io5";
import useWindowPosition from "../hook/useWindowsPosition";
import Container from "@material-ui/core/Container";
import { Fade } from "@material-ui/core";
import Button from "@material-ui/core/Button";
// import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Slide from "@material-ui/core/Slide";
import { FaUniversity, FaClipboardList, FaSmile } from "react-icons/fa";
import Chip from "@material-ui/core/Chip";
import Popper from '@material-ui/core/Popper';

const useStyles = makeStyles((theme) => ({

  root: {
    flexGrow: 1,
    padding: "100px 0",
    backgroundColor: "var(--white)",
  },

  title: {
    position: "relative",
    textAlign: "center",
    fontSize: "40px",
    fontWeight: "500",
    marginBottom: "60px",
    paddingBottom: "20px",
    margin: "0",
    padding: "0",
    boxSizing: "border-box",
    textDecoration: "none",
    "&:after": {
      background: "#fff",
      content: "'who i am'",
      position: "absolute",
      bottom: "-8px",
      left: "50%",
      fontSize: "20px",
      color: "var(--crimson)",
      padding: "0 5px",
      transform: "translateX(-50%)",
    },
    "&:before": {
      background: "#111",
      content: "''",
      position: "absolute",
      bottom: "0px",
      left: "50%",
      width: "180px",
      height: "3px",
      transform: "translateX(-50%)",
    },
  },

  portfolioButton: {
    width: "7rem",
    marginTop: "10px",
    background: "crimson",
    transition: "all 0.3s ease",
  },

  icon: {
    fontSize: "2rem",
  },

  hrEllipse: {
    background:
      "radial-gradient(ellipse at center, #dddddd 0%, rgba(255, 255, 255, 0) 70%)",
    width: "100%",
    height: "1.5px",
  },

  wrapper: {
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      maxWidth: "100%",
    },
  },

  rightcol: {
    [theme.breakpoints.down("xs")]: {
      maxWidth: "100%",
    },
  },
  rightcolData: {
    padding: "0.5rem 1rem",
  },

  leftcol: {
    marginBottom: "1rem",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "100%",
      padding: "30px 10px",
    },
  },
}));

export default function About() {
  const classes = useStyles();
  const checked = useWindowPosition("header");
  const [checkedSlider, setCheckedSlider] = React.useState(true);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const handleChange = () => {
    setCheckedSlider((prev) => !prev);
  };

  return (
    <div className={classes.root} id="about-page">
      <Grid>
        <Container maxWidth="md">
          <Grid container spacing={3}>
            {/* TOP */}
            <Grid item xs={12}>
              <h1 className={classes.title}>About me</h1>
              <hr />
            </Grid>

            {/* LEFT & CENTER & RIGHT WRAP*/}
            <Grid item xs={12} className={classes.wrapper}>
              <Fade in={checked} {...(checked ? { timeout: 1000 } : {})}>
                {/* LEFT COLUMN*/}
                <Grid item xs={5} className={classes.leftcol}>
                  <Grid item xs={12}>
                    <Grid item xs={12}>
                      <h3 className={classes.educationTitle}>
                        <FaUniversity className={classes.icon}></FaUniversity>{" "}
                        Education
                      </h3>
                      <hr />
                    </Grid>

                    <Grid item xs={12} className={classes.education}>
                      <Grid item xs={12}>
                        <Chip size="small" label="2020 - " disabled />
                        <h3>Haaga-helia Ammattikorkeakoulu</h3>
                        <p>
                          Bachelor's Degree in Business Information Technology
                        </p>
                        <div className={classes.hrEllipse} />
                      </Grid>
                    </Grid>
                    <Grid item xs={12} className={classes.education}>
                      <Grid item xs={12} style={{ paddingTop: "0.5rem" }}>
                        <Chip size="small" label="2014 - 2017" disabled />
                        <h3>Keskuspuiston ammattiopisto</h3>
                        <p style={{ paddingBottom: "1rem" }}>
                          Business undergraduate Diploma in Business
                          Administration
                        </p>
                        <div className={classes.hrEllipse} />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Fade>

              <Grid item xs={2}></Grid>

              <Fade in={checked} {...(checked ? { timeout: 1000 } : {})}>
                {/* RIGHT COLUMN*/}
                <Grid item xs={5} className={classes.rightcol}>
                  <Grid item xs={12}>
                    <h3>
                      <FaClipboardList
                        className={classes.icon}
                      ></FaClipboardList>
                      Information
                    </h3>
                    <hr />
                  </Grid>

                  <p>
                    A inquisitive, quick and contiuous learner who is proficient 
                    to plan and execute a variety of technology in the 
                    Web Application Development. Coding enthusiast since 2017, 
                    currently a full-time information technology student.
                  </p>

                  <Grid item xs={12} className={classes.rightcolData}>
                      <IoPerson></IoPerson>
                      <span> Johannes Mattila</span>
                      <br />
                      <IoMailSharp></IoMailSharp>
                      <span> Johamatt94@gmail.com</span>
                      <br />
                      <IoCallSharp></IoCallSharp>
                      <span> 0452391139</span>
                    </Grid>

                  {/* <Slide direction="left" in={checkedSlider} timeout={750}>
                    <Button
                      onClick={handleChange}
                      className={classes.portfolioButton}
                      variant="contained"
                      color="primary"
                      endIcon={
                        <ChevronRightIcon
                          className={classes.icon}
                        ></ChevronRightIcon>
                      }
                    >
                      CV PDF
                    </Button>
                  </Slide> */}
                </Grid>
              </Fade>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </div>
  );
}
