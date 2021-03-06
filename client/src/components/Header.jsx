import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  component: {
    background: "#fff",
    color: "black",
  },
  container: {
    justifyContent: "center",
    "& > *": {
      padding: "1rem",
    },
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.component}>
      <Toolbar className={classes.container}>
        <Typography>HOME</Typography>
        <Typography>ABOUT</Typography>
        <Typography>CONTACT</Typography>
        <Typography>LOGIN</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
