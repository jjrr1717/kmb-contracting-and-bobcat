import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";


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
          href="/our-work" 
          target="_blank"
          //className={classes.navLink}
          className={ourWork}
        >
          My Work
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          href="/about-us"
          target="_blank"
          className={aboutUs}
        >
          About Me
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          href="/contact-us"
          target="_blank"
          className={contactUs}
        >
          Contact Me
        </Button>
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
