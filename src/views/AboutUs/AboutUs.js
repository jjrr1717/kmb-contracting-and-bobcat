import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/AboutUs.js";
import { Typography } from "@material-ui/core";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Box from '@material-ui/core/Box';
import image1 from "assets/img/fense-kurtis.jpg";


const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function AboutUs(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true
  };
  return (
    <div>
      <Header
        color="white"
        routes={dashboardRoutes}
        brand="KMB Contracting & Bobcat Inc"
        rightLinks={<HeaderLinks btnHighlight = "AboutUs"/>}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Box m={20}>
      </Box>
        <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer style={{margin: "3px"}}>
              <GridItem xs={12} sm={12} md={6} className={classes.marginAuto}>
                  <img src={image1} alt="First slide" className="slick-image" style={{width: "95%", height: "auto"}} />
              </GridItem>
              <GridItem container 
                        direction="column"
                        justify="center"
                        alignItems="flex-start" 
                        xs={12} sm={12} md={6} 
              >
                  <Typography variant="h4" className={classes.title}>
                      Hi, my name is Kurtis Bressler 
                  </Typography>
                  <Typography className={classes.description}>
                      I am the owner of KMB Contracting & Bobcat. Having a skid steer company has always been a lifelong dream of mine. My Grandfather taught me how to run the equipment at a young age.  
                      I have over 17 years of experience running heavy equipment from rough grade to final grade. KMB will get your job done safely and as efficiently as possible.     
                  </Typography> 
              </GridItem>
          </GridContainer>
        </div>
        </div>
      <Footer />
    </div>
  );
}
