import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import Paper from '@material-ui/core/Box';
import { Typography } from "@material-ui/core";
import LocalPhoneSharpIcon from '@material-ui/icons/LocalPhoneSharp';
import EmailSharpIcon from '@material-ui/icons/EmailSharp';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import styles from "assets/jss/material-kit-react/views/contactUsPage.js";



const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function ContactUs(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="white"
        routes={dashboardRoutes}
        brand="KMB Contracting & Bobcat Inc"
        rightLinks={<HeaderLinks btnHighlight = "ContactUs"/>}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/truck-skid-steer.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <GridContainer
            direction="row"
            justify="center"
            alignItems="center"
        >


            <GridItem xs={12} sm={12} md={4}>
              <div className={classes.container}>
                <Paper elevation={20}>
                  <Typography variant="h1" className={classes.title}><LocationOnIcon/></Typography> <br/>
                  <Typography variant="h6" className={classes.title}>Strathmore, AB</Typography>
                </Paper>
              </div>
            </GridItem>



            <GridItem xs={12} sm={12} md={4}>
              <div className={classes.container}>
                <Paper elevation={20}>
                  <Typography variant="h1" className={classes.title}><LocalPhoneSharpIcon/></Typography> <br/>
                  <Typography variant="h6" className={classes.title}>403-361-0174</Typography>
                </Paper>
                </div>
            </GridItem>

            <GridItem xs={12} sm={12} md={4}>
              <div className={classes.container}>
                <Paper elevation={20}>
                  <Typography variant="h1" className={classes.title}><EmailSharpIcon/></Typography> <br/>
                  <Typography variant="h6" className={classes.title}>kmbcontracting2020@gmail.com</Typography>
                </Paper>
              </div>
            </GridItem>
          </GridContainer>
      </div>
      <Footer />
    </div>
  );
}
