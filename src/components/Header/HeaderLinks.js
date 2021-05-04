import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import { Link } from 'react-router-dom';

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  let ourWork = classes.navLink;
  let aboutUs = classes.navLink;
  let contactUs = classes.navLink;
  console.log(props.btnHighlight);

  switch(props.btnHighlight){
    case 'OurWork':
      ourWork = classes.activePage;
      break;
    case 'AboutUs':
      aboutUs = classes.activePage;
      break;
    case 'ContactUs':
      contactUs = classes.activePage;
  }

  
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          to="/our-work" 
          target="_blank"
          //className={classes.navLink}
          className={ourWork}
          component={Link}
        >
        My Work
        {/* <Link to='/our-work' className={ourWork}>My Work</Link> */}
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          to="/about-us"
          target="_blank"
          className={aboutUs}
          component={Link}
        >
          About Me
        </Button>
        {/* <Link to='/about-us' className={aboutUs}>About Me</Link> */}
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          to="/contact-us"
          target="_blank"
          className={contactUs}
          component={Link}
        >
          Contact Me
        </Button>
        {/* <Link to='/contact-us' className={contactUs}>Contact Me</Link> */}
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/KMBContractingandbobcat"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
