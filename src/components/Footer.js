import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";


export default function Footer() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: "30px 0px",
      backgroundColor: "#111",
      color: "white",
      width: '100%',
      display: "flex",
    },

    leftGrid: {
      display: 'inline',
      textTransform: "uppercase",
      fontSize: "20px",
      margin: "0px 50px 0px 50px",
      color: "#474747;",
      "& span": {
        color: "white",
      },
      [theme.breakpoints.down("xs")]: {
        flexDirection: "column",
        maxWidth: "100%",
      },
    },
  }));

  const classes = useStyles();
  return (
    <Grid item xs={12} className={classes.root}>
      <Grid item xs={4} className={classes.leftGrid}>
        <p>©2022 <span>Johannes Mattila</span></p>
      </Grid>
    </Grid>
  );
}
