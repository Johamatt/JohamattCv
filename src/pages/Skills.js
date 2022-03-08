import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { FaCode, FaList, FaFlag } from "react-icons/fa";
import Chip from "@material-ui/core/Chip";
import data from "../static/content/data";
import useWindowPosition from "../hook/useWindowsPosition";
import { Fade } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#111",
    "& p, a, h1, h2, h4, h5, ,li,span": {
      color: "white",
    },
    "& h3": {
      color: "white",
      margin: "0",
      marginBottom: "30px",
    },

    flexGrow: 1,
    padding: "100px 0",
  },

  divider: {
    background: "#db2c2c",
    width: "100%",
    height: "1px",
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
      background: "#111",
      content: "'what I provide'",
      position: "absolute",
      bottom: "-8px",
      left: "50%",
      fontSize: "20px",
      color: "crimson",
      padding: "0 5px",
      transform: "translateX(-50%)",
    },
    "&:before": {
      background: "#fff",
      content: "''",
      position: "absolute",
      bottom: "0px",
      left: "50%",
      width: "180px",
      height: "3px",
      transform: "translateX(-50%)",
    },
  },

  wrapper: {
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      maxWidth: "100%",
    },
  },

  languagecol: {

    [theme.breakpoints.down("xs")]: {
      maxWidth: "100%",
      padding: "30px 10px",
    },
  },

  knowledgecol: {
    [theme.breakpoints.down("xs")]: {
      maxWidth: "100%",
      padding: "30px 10px",
    },
  },

  dividerEllipse: {
    background:
      "radial-gradient(ellipse at center, #db2c2c 0%, rgba(255, 255, 255, 0) 70%)",
    width: "100%",
    height: "1.5px",
  },

  icon: {
    fontSize: "2rem",
    color: "red",
  },

  skillcontentColumn: {
    minHeight: "170px",
  },

  iconset: {
    "& > *": {
      margin: theme.spacing(0.5),
      display: "inlineBlock",
    },
  },
}));

const chips = data.chip.map((chip) => (
  <Chip
    key={chip.id}
    style={{ backgroundColor: `${chip.color}`,width: '7rem' }}
    label={chip.label}
    color="primary"
    size="medium"
  />
));

export default function Skills() {
  const checked = useWindowPosition("about-page");

  const classes = useStyles();
  return (
    <div className={classes.root} id="skills-page">
      <Grid>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={12}>
              <h1 className={classes.title}>Skills</h1>
            </Grid>

            <Fade in={checked} {...(checked ? { timeout: 1000 } : {})}>
              <Grid item xs={12} className={classes.wrapper}>
                {/* LEFT COLUMN*/}
                <Grid
                  item
                  xs={4}
                  className={classes.knowledgecol}
                  style={{ textAlign: "center" }}
                >
                  <Grid item xs={12}>
                    <FaList className={classes.icon}></FaList>
                    <h3>Knowledge</h3>
                  </Grid>
                  <Grid item xs={12} className={classes.skillcontentColumn}>
                    <ul
                      style={{
                        listStyleType: "none",
                        paddingInlineStart: "0px",
                      }}
                    >
                      <li>Full stack Developing </li>
                      <li>Basics of version control</li>
                      <li>Basics of Relational Database Design (RDD)</li>
                      <li>Object-oriented programming (OOP)</li>
                      <li>Microsoft Office basics</li>
                      <li>UX design </li>
                    </ul>
                    
                  </Grid>
                  <div className={classes.dividerEllipse} />
                </Grid>

                <Grid
                  item
                  xs={4}
                  style={{ maxWidth: "100%", textAlign: "center" }}
                >
                  <Grid item xs={12} style={{}}>
                    <FaCode className={classes.icon}></FaCode>
                    <h3>Coding</h3>
                  </Grid>

                  <Grid item xs={12} className={classes.skillcontentColumn}>
                    <Grid item xs={12} className={classes.iconset}>
                      {chips}

                      
                    </Grid>
                  </Grid>
                  <div className={classes.dividerEllipse} />
                </Grid>

                {/* RIGHT COLUMN*/}
                <Grid
                  item
                  xs={4}
                  className={classes.languagecol}
                  style={{ textAlign: "center" }}
                >
                  <Grid item xs={12} style={{ textAlign: "center" }}>
                    <FaFlag className={classes.icon}></FaFlag>
                    <h3>Languages</h3>
                  </Grid>

                  <Grid item xs={12} className={classes.skillcontentColumn}>
                    <ul
                      style={{
                        listStyleType: "none",
                        paddingInlineStart: "0px",
                        minHeight: "120px",
                      }}
                    >
                      <li>Finnish (Native)</li>
                      <li>English (Intermediate)</li>
                    </ul>
                  </Grid>
                  <div className={classes.dividerEllipse} />
                </Grid>
              </Grid>
            </Fade>
          </Grid>
        </Container>
      </Grid>
    </div>
  );
}
