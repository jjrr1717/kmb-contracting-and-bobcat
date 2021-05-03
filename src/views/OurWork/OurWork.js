import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/OurWork.js";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Carousel from "react-slick";
import Card from "components/Card/Card.js";
import Box from '@material-ui/core/Box';

//images landscape
import image1 from "assets/img/bobcat-0.jpg";
import image2 from "assets/img/fense-0.jpg";
import image3 from "assets/img/snow-removal.jpg";
import image4 from "assets/img/fense-1.jpg";

//images protraits
import image5 from "assets/img/equipment-0.jpg";
import image6 from "assets/img/bucket-0.jpg";
import image7 from "assets/img/now-loading.jpg";
import image8 from "assets/img/trailer-0.jpg";
import image9 from "assets/img/trailer-1.jpg";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);
const images = [
    <div>
        <img src={image1} alt="First slide" className="slick-image" />
    </div>, 
    <div>
        <img src={image2} alt="Second slide" className="slick-image" />
    </div>,
    <div>
        <img src={image3} alt="Third slide" className="slick-image" />
    </div>,
    <div>
        <img src={image4} alt="Fourth slide" className="slick-image" />
    </div>,
    <div>
        <img src={image5} alt="Fourth slide" className="slick-image" />
    </div>,
    <div>
        <img src={image6} alt="Fourth slide" className="slick-image" />
    </div>,
    <div>
        <img src={image7} alt="Fourth slide" className="slick-image" />
    </div>,
        <div>
        <img src={image8} alt="Fourth slide" className="slick-image" />
    </div>,
        <div>
        <img src={image9} alt="Fourth slide" className="slick-image" />
    </div>,
];

export default function OurWork(props) {
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
        rightLinks={<HeaderLinks btnHighlight = "OurWork"/>}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
        
      />
      <Box m={15}>
      </Box>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={2} className={classes.marginAuto}>
          </GridItem>
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                {images} 
              </Carousel>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={2} className={classes.marginAuto}>
          </GridItem>
        </GridContainer>
        </div>
      </div>
      <Footer />
    </div>
  );
}
