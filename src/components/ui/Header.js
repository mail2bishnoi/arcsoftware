import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';


function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles(theme =>({
 toolbarMixin:{
   ...theme.mixins.toolbar,
   marginBottom: "3em",
   [theme.breakpoints.down('md')]: {
    marginBottom: "2em"
   },
   [theme.breakpoints.down('xs')]: {
    marginBottom:"1.25em"
   }
 },
 logo:{
   height: "8em",
   [theme.breakpoints.down('md')]: {
     height: "7em",
   },
   [theme.breakpoints.down('xs')]: {
     height:"5.5em",
   }
 },
 tabContainer: {
  marginLeft: "auto"
},
tab: {
  ...theme.typography.tab,
  minWidth: 10,
  marginLeft: "25px",
},
button: {
  ...theme.typography.estimate,
  borderRadius:"50px",
  marginLeft:"50px",
  marginRight:"25px",
  textTransform:"none",
  "&:hover": {
    backgroundColor: theme.palette.secondary.light
  }
},
logoContainer: {
  padding: "0px"
},
menu: {
  background: theme.palette.common.blue,
  borderRadius:0
},
menuItem: {
  ...theme.typography.tab,
  color:"white",
  opacity:0.7,
  '&:hover':{
    opacity: 1
  }
},
drawerIconContainer: {
  marginLeft:"auto",
  '&:hover': {
    backgroundColor:"transparent"
  }
},
drawerIcon: {
  height:"50px",
  width:"50px",
  color:"white",
  opacity:0.7
},
drawer: {
  background: theme.palette.common.blue,
},
drawerItem: {
  ...theme.typography.tab,
  color: "white",
  opacity: 0.7
},
drawerItemEstimate: {
  backgroundColor: theme.palette.common.orange
},
drawerItemSelected: {
  "& .MuiListItemText-root": {
    opacity: 1
  }
},
appBar:{
  zIndex: theme.zIndex.modal + 1,
}
}))

const Header = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  const [openDrawer, setOpenDrawer] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    props.setSelectedIndex(i);
  }

  const menuOptions = [
    {name: 'services', link: '/services'},
    {name: 'Custom Software Development', link: '/customSoftware'},
    {name: 'iOS/Android App Development', link: '/app'},
    {name: 'Website Development', link: '/web'}
  ];

  useEffect(()=> {
    switch(window.location.pathname) {
      case '/home':
        if(props.value !== 0) {
          props.setValue(0);
        }
        break;
      case '/services':
        if(props.value !== 1){
          props.setValue(1);
          props.setSelectedIndex(0);
        }
        break;
      case '/customSoftware':
        if(props.value !== 1){
          props.setValue(1);
          props.setSelectedIndex(1);
        }
        break;
      case '/app':
        if(props.value !== 1){
          props.setValue(1);
          props.setSelectedIndex(2);
        }
        break;
      case '/web':
        if(props.value !== 1){
          props.setValue(1);
          props.setSelectedIndex(3);
        }
        break;
      case '/revolution':
        if(props.value !== 2 ){
          props.setValue(2);
        }
        break;
      case '/about':
        if(props.value !== 3){
          props.setValue(3);
        }
        break;
      case '/contact':
          if(props.value !== 4){
            props.setValue(4);
          }
          break;        
      default:
        break;
    }
  }, [props.value, props]);

  const handleChange = (event, newValue) => {
    props.setValue(newValue);
  }

  const tabs = (
    <>
    <Tabs value={props.value} onChange={handleChange} className={classes.tabContainer}>
      <Tab className={classes.tab} label="Home" component={Link} to="/" />
      <Tab 
        className={classes.tab} 
        label="Services"
        component={Link} 
        to="/services"
        onMouseOver={event => handleClick(event)} />
      <Tab className={classes.tab} label="The Revolution" component={Link} to="/revolution" />
      <Tab className={classes.tab} label="About Us" component={Link} to="/about" />
      <Tab className={classes.tab} label="Contact Us" component={Link} to="/contact" />
  </Tabs>
  <Button variant="contained" color="secondary" className={classes.button} component={Link} to="/estimate" >Free Estimate</Button>    
  </>
  );

  const drawer = (
    <>
      <SwipeableDrawer 
        disableBackdropTransition={!iOS} 
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{paper:classes.drawer}}
        >
          <div className={classes.toolbarMixin} />
          <List disablePadding>
            <ListItem 
              onClick={()=>{setOpenDrawer(false);props.setValue(0)}}
              classes={{ selected: classes.drawerItemSelected }}
              selected={props.value === 0}
              component={Link} 
              to="/" 
              divider 
              button 
              disableRipple
            >
              <ListItemText className={classes.drawerItem} disableTypography>Home</ListItemText>
            </ListItem>
            <ListItem 
              onClick={()=>{setOpenDrawer(false);props.setValue(1)}}
              classes={{ selected: classes.drawerItemSelected }}
              selected={props.value === 1}              
              component={Link} 
              to="/services" 
              divider 
              button 
              disableRipple
            >
              <ListItemText className={classes.drawerItem} disableTypography>Services</ListItemText>
            </ListItem>
            <ListItem 
              onClick={()=>{setOpenDrawer(false);props.setValue(2)}}
              classes={{ selected: classes.drawerItemSelected }}
              selected={props.value === 2}              
              component={Link} 
              to="/revolution" 
              divider 
              button 
              disableRipple
            >
              <ListItemText className={classes.drawerItem} disableTypography>The Revolution</ListItemText>
            </ListItem>
            <ListItem 
              onClick={()=>{setOpenDrawer(false);props.setValue(3)}}
              classes={{ selected: classes.drawerItemSelected }}
              selected={props.value === 3}
              component={Link} 
              to="/about" 
              divider 
              button 
              disableRipple
            >
              <ListItemText className={classes.drawerItem} disableTypography>About us</ListItemText>
            </ListItem>
            <ListItem 
              onClick={()=>{setOpenDrawer(false);props.setValue(4)}}
              classes={{ selected: classes.drawerItemSelected }}
              selected={props.value === 4}
              component={Link} 
              to="/contact" 
              divider 
              button 
              disableRipple
            >
              <ListItemText className={classes.drawerItem} disableTypography>Contact Us</ListItemText>
            </ListItem>
            <ListItem 
              onClick={()=>{setOpenDrawer(false);props.setValue(5)}}       
              classes={{root: classes.drawerItemEstimate}}
              component={Link} to="/estimate" 
              divider 
              button 
              disableRipple>
              <ListItemText className={classes.drawerItem} disableTypography>Free Estimate</ListItemText>
            </ListItem>             
          </List>
      </SwipeableDrawer>
      <IconButton 
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );
  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar disableGutters>
            <Button className={classes.logoContainer} onClick={()=>props.setValue(0)} component={Link} to="/" disableRipple>
              <img alt="Company Logo" src={logo} className={classes.logo} />
            </Button>
            {matches ? drawer: tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMixin} />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={openMenu}
        MenuListProps={{
          onMouseLeave: handleClose
        }}
        classes={{paper:classes.menu}}
        style={{ zIndex:1302 }}
        elevation={0}
      >
        {menuOptions.map((option,index)=> {
          return <MenuItem 
                    key={`${option}${index}`} 
                    classes={{root: classes.menuItem}} 
                    onClick={(event)=>{ handleMenuItemClick(event,index); props.setValue(1); }} 
                    component={Link} to={option.link} 
                    selected={index===props.selectedIndex && props.value === 1}>
                      {option.name}
                  </MenuItem>
        })}
      </Menu>
    </>
  );
}

export default Header;