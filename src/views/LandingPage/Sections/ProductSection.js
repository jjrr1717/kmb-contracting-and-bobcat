import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import whiteLogo from "assets/img/kmb-logo-white.jpg"
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <img src={whiteLogo} alt="KMB Logo" height="auto" width="100%"/>
          <h2 className={classes.title}>24/7 Snow Removal</h2>
          <h4 className={classes.title}>
            Services
          </h4>
          <Typography className={classes.description}>
            We do commercial and residential snow removal, landscaping, yard maintenance,
            gravel pads, re-gravel driveways, basement filling, hauling, dump runs, deliver gravel,
            chain link fencing, wooden fencing, and general contracting.
          </Typography>
          <h4 className={classes.title}>
            Equipment
          </h4>
          <Typography className={classes.description}>
            We have a skid steer with multiple bits for augering, a graphal bucket, and pallet forks.
            A tri axle gooseneck dump trailer and a 24{"'"} flat desk goodneck trailer, as well as a 3
            ton exacavator.
          </Typography>
        </GridItem>
      </GridContainer>
    </div>
  );
}
