import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

export default function Footer() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: "30px 0px",
      backgroundColor: "#ffd54f",
      width: "100%",
      display: "flex",
    },
    leftGrid: {
      display: "inline",

      margin: "0px 50px",
      color: "#474747",
      "& p": {
        color: "black",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontSize: "20px",
      },
      [theme.breakpoints.down("xs")]: {
        flexDirection: "column",
        maxWidth: "100%",
      },
    },
  }));

  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <div className={classes.leftGrid}>
        <p>Johannes Mattila</p>
      </div>
    </Grid>
  );
}
