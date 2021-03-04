import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Carousel } from "react-responsive-carousel";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { FaArrowLeft, FaArrowRight, FaGithub } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Button from "@material-ui/core/Button";
import { RiLiveLine } from "react-icons/ri";

import { Fade } from "@material-ui/core";
import useWindowPosition from "../hook/useWindowsPosition";
import data from '../static/content/data';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "100px 0",
    marginBottom: "100px",
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
      content: "'Demos | Github'",
      position: "absolute",
      bottom: "-8px",
      left: "50%",
      fontSize: "20px",
      color: "crimson",
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

  margin: {
    margin: theme.spacing(1),
  },

  legend: {
    // transition: "all .5s ease-in-out",
    position: "absolute",
    bottom: "50px",
    left: "50%",
    marginLeft: "-45%",
    width: "90%",
    borderRadius: "10px",
    background: "#000",
    color: "#fff",
    padding: "10px",
    fontSize: "12px",
    textAlign: "center",
    opacity: "0.8",
    boxSizing: "0",
    transition: "opacity .35s ease-in-out",
    [theme.breakpoints.down("xs")]: {
      fontSize: "9px",
      height: "32%",
    },
  },

  linkIcon: {
    fontSize: "1.4rem",
    float: "right",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.6rem",
      paddingTop: "2px",
    },
  },

  label: {
    minHeight: "2.4rem",
  },
}));

export default function Projects(theme) {

  const checked = useWindowPosition("about-page");


  const arrowStyles = {
    opacity: 0.9,
    position: "absolute",
    zIndex: 2,
    top: "calc(50% - 15px)",
    width: 45,
    height: 45,
    cursor: "pointer",
    backgroundColor: "var(--black)",
  };

  const indicatorStyles = {
    background: "#fff",
    width: 12,
    height: 12,
    display: "inline-block",
    margin: "0 8px",
  };

  const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText("#db2c2c"),
      backgroundColor: "var(--black)",
      margin: "0rem 0.5rem",
      border: "1px solid",

      [theme.breakpoints.down("xs")]: {
        fontSize: "8px",
        height: "20%",
      },
      "&:hover": {
        backgroundColor: "var(--crimson)",
      },
    },
  }))(Button);

  const classes = useStyles();
  const createCarouselItemImage1 = data.project.map((project) => (
    <div key={project.index}>
      <img src={project.imageUrl} alt="project"/>
      <div className={classes.legend}>
        <h3 style={{ marginTop: "0" }}>{project.title}</h3>
        <p className={classes.label}>{project.label}</p>
        <ColorButton variant="contained">
          <a
            href={project.github}
            alt="icon"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none", color: "var(--white)" }}
          >
            Github &nbsp;
            <FaGithub className={classes.linkIcon} />
          </a>
        </ColorButton>

        {project.livedemo === "#" ? (
          <div></div>
        ) : (
          <ColorButton variant="contained" >
            <a
              href={project.livedemo}
              alt="icon"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "var(--white)" }}
            >
              Live Demo &nbsp;
              <RiLiveLine className={classes.linkIcon} />
            </a>
          </ColorButton>
        )}
      </div>
    </div>
  ));

  return (
    <div className={classes.root} id="projects-page">
      <Grid>
      <Fade in={checked} {...(checked ? { timeout: 1000 } : {})}>
        <Container maxWidth="md">
          <Grid item xs={12}>
            <h1 className={classes.title}>Projects</h1>
          </Grid>
          <Grid container spacing={3}>
            <Carousel
              statusFormatter={(current, total) =>
                `Current slide: ${current} / Total: ${total}`
              }
              renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    style={{ ...arrowStyles, left: 15 }}
                  >
                    <FaArrowLeft style={{ fontSize: "1rem", color: "var(--white)" }} />
                  </button>
                )
              }
              renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    style={{ ...arrowStyles, right: 15 }}
                  >
                    <FaArrowRight style={{ fontSize: "1rem", color: "var(--white)" }} />
                  </button>
                )
              }
              renderIndicator={(onClickHandler, isSelected, index, label) => {
                if (isSelected) {
                  return (
                    <li
                      style={{ ...indicatorStyles, background: "#000" }}
                      aria-label={`Selected: ${label} ${index + 1}`}
                      title={`Selected: ${label} ${index + 1}`}
                    />
                  );
                }
                return (
                  <li
                    style={indicatorStyles}
                    onClick={onClickHandler}
                    onKeyDown={onClickHandler}
                    value={index}
                    key={index}
                    role="button"
                    tabIndex={0}
                    title={`${label} ${index + 1}`}
                    aria-label={`${label} ${index + 1}`}
                  />
                );
              }}
            >
              {createCarouselItemImage1}
            </Carousel>
          </Grid>
        </Container>
        </Fade>
      </Grid>
    </div>
  );
}
