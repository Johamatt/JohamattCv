import { AppBar, IconButton, Toolbar, Button } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { Link } from "react-scroll";

import data from "../static/content/data";
import { ThemeProvider } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";
import amber from "@material-ui/core/colors/amber";

const themeColor = createTheme({
  palette: {
    primary: {
      main: amber[300],
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "var(--black)",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  title: {
    flexGrow: 1,
  },

  menuLinks: {
    marginRight: theme.spacing(1),
    "& a": {
      borderBottom: "1px solid red",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },

  dot: {
    height: "8px",
    width: "8px",
    backgroundColor: "red",
    borderRadius: "50%",
    display: "inline-block",
  },
}));
export default function Navbar(props) {
  const styles = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const links = data.link.map((link) => (
    <MenuItem key={link.id}>
      <Link
        key={link.id}
        activeClass="active"
        to={link.to}
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        onClick={handleClose}
      >
        {link.label}
      </Link>
    </MenuItem>
  ));

  const linksFullWidth = data.link.map((link) => (
    <Button color="inherit" key={link.id} className={styles.menuLinks}>
      <Link to={link.to} spy={true} smooth={true} offset={-100} duration={500}>
        {link.label}
      </Link>
    </Button>
  ));

  return (
    <ThemeProvider theme={themeColor}>
      <nav className={styles.root}>
        {/* Appbar color must be changed through themeprovider*/}
        <AppBar color={themeColor.primary} position="relative">
          <Toolbar>
            <Typography variant="h6" className={styles.title}>
              Johannes Mattila <div className={styles.dot}></div>
            </Typography>
            <div>
              <IconButton
                edge="start"
                className={styles.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={() => handleClose()} // ?
              >
                {links}
              </Menu>
            </div>

            {linksFullWidth}
            <div className={styles.menuLinks}></div>
          </Toolbar>
        </AppBar>
      </nav>
    </ThemeProvider>
  );
}
