import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import { makeStyles } from '@material-ui/styles';

import footerAdornment from "../../assets/Footer Adornment.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

const useStyles = makeStyles(theme => (
  {
    footer: {
      background: theme.palette.common.blue,
      width:"100%",
      zIndex:1302,
      position:"relative"
    },
    adornment:{
      width:"25em",
      verticalAlign:"bottom",
      [theme.breakpoints.down("md")]:{
        width:"21em"
      },
      [theme.breakpoints.down("xs")]:{
        width:"15em"
      }
    },
    mainContainer:{
      position:"absolute"
    },
    link: {
      color: "white",
      fontFamily: "Arial",
      fontSize: "0.75rem",
      fontWeight: "bold",
      textDecoration: "none"
    },    
    gridItem: {
      margin:"3em"
    },
    icon: {
      height: "4em",
      width: "4em",
      [theme.breakpoints.down("xs")]: {
        height: "2.5em",
        width: "2.5em"
      }
    },
    socialContainer: {
      position: "absolute",
      marginTop: "-6em",
      right: "1.5em",
      [theme.breakpoints.down("xs")]: {
        right: "0.6em"
      }
    }
  }
))
const Footer =  (props) => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify="center" className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item component={Link} to="/" onClick={()=>{props.setValue(0);}} className={classes.link}>Home</Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item component={Link} to="/services" onClick={()=>{props.setValue(1);props.setSelectedIndex(0);}} className={classes.link}>Services</Grid>
              <Grid item component={Link} to="/customSoftware" onClick={()=>{props.setValue(1);props.setSelectedIndex(1);}} className={classes.link}>Custom Software Development</Grid>
              <Grid item component={Link} to="/app" onClick={()=>{props.setValue(1);props.setSelectedIndex(2);}} className={classes.link}>Mobile App Development</Grid>
              <Grid item component={Link} to="/web" onClick={()=>{props.setValue(1);props.setSelectedIndex(3);}} className={classes.link}>Website Development</Grid>
            </Grid>          
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item component={Link} to="/revolution" onClick={()=>{props.setValue(2);}} className={classes.link}>The Revolution</Grid>
              <Grid item component={Link} to="/revolution" onClick={()=>{props.setValue(2);}} className={classes.link}>Vision</Grid>
              <Grid item component={Link} to="/revolution" onClick={()=>{props.setValue(2);}} className={classes.link}>Technology</Grid>
              <Grid item component={Link} to="/revolution" onClick={()=>{props.setValue(2);}} className={classes.link}>Process</Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item component={Link} to="/about" onClick={()=>{props.setValue(3);}} className={classes.link}>About us</Grid>
              <Grid item component={Link} to="/about" onClick={()=>{props.setValue(3);}} className={classes.link}>History</Grid>
              <Grid item component={Link} to="/about" onClick={()=>{props.setValue(3);}} className={classes.link}>Team</Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item component={Link} to="/contact" onClick={()=>{props.setValue(4);}} className={classes.link}>Contact us</Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        alt="black decorative slash"
        src={footerAdornment}
        className={classes.adornment}
      />
      <Grid className={classes.socialContainer} spacing={2} justify="flex-end" container>
        <Grid item>
          <img
            alt="facbook icon"
            src={facebook}
            className={classes.icon} />
        </Grid>
        <Grid item>
          <img
            alt="twitter icon"
            src={twitter}
            className={classes.icon} />          
        </Grid>
        <Grid item>
          <img
            alt="instagram icon"
            src={instagram}
            className={classes.icon} />          
        </Grid>
      </Grid>
    </footer>
  )
}

export default Footer;
