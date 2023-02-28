import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { FaCode, FaList, FaFlag, FaCloud } from "react-icons/fa";
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

  content: {
    minHeight: "190px",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      minHeight: "0",
    },
  },

  column: {
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "100%",
      padding: "30px 10px",
    },
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
    style={{ backgroundColor: `${chip.color}`, width: "7rem" }}
    label={chip.label}
    color="primary"
    size="medium"
  />
));

export default function Skills() {
  const checked = useWindowPosition("about-page");

  const styles = useStyles();
  return (
    <div className={styles.root} id="skills-page">
      <Container maxWidth="lg">
        <h1 className={styles.title}>Skills</h1>
        <Fade in={checked} {...(checked ? { timeout: 1000 } : {})}>
          <div className={styles.wrapper}>
            <Grid item xs={4} className={styles.column}>
              <FaList className={styles.icon} />
              <h3>Knowledge</h3>
              <div className={styles.content}>
                <ul
                  style={{
                    listStyleType: "none",
                    paddingInlineStart: "0px",
                  }}
                >
                  <li>Full stack Developing </li>
                  <li>Object-oriented programming</li>
                  <li>Basics of version control</li>
                  <li>Basics of Relational Databases</li>
                </ul>
              </div>

              <div className={styles.dividerEllipse} />
            </Grid>

            <Grid item xs={4} className={styles.column}>
              <FaCloud className={styles.icon} />
              <h3>Cloud</h3>
              <div className={styles.content}>
                <ul
                  style={{
                    listStyleType: "none",
                    paddingInlineStart: "0px",
                  }}
                >
                  <li> AWS Amplify</li>
                  <li> Cognito (basics)</li>
                  <li> AppSync (basics)</li>
                  <li> Lambda (basics)</li>
                </ul>

                <ul
                  style={{
                    listStyleType: "none",
                    paddingInlineStart: "0px",
                  }}
                >
                  <li>Google Cloud Platform</li>
                  <li>w/ Firebase</li>
                </ul>
              </div>

              <div className={styles.dividerEllipse} />
            </Grid>

            <Grid item xs={4} className={styles.column}>
              <FaCode className={styles.icon}></FaCode>
              <h3>Coding</h3>
              <div className={styles.content}>
                <div className={styles.iconset}>{chips}</div>
              </div>
              <div className={styles.dividerEllipse} />
            </Grid>
            <Grid item xs={4} className={styles.column}>
              <FaFlag className={styles.icon}></FaFlag>
              <h3>Languages</h3>

              <div className={styles.content}>
                <ul
                  style={{
                    listStyleType: "none",
                    paddingInlineStart: "0px",
                  }}
                >
                  <li>Finnish (Native)</li>
                  <li>English (Intermediate)</li>
                </ul>
              </div>
              <div className={styles.dividerEllipse} />
            </Grid>
          </div>
        </Fade>
      </Container>
    </div>
  );
}
