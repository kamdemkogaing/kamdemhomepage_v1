import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import KamdemHeader from "components/Navbars/KamdemHeader.js";
// sections for this page
import KamdemHeaderLinks from "components/Navbars/KamdemHeaderLinks.js";
import KamdemGridContainer from "components/Grid/KamdemGridContainer.js";
import KamdemGridItem from "components/GridItem/KamdemGridItem.js";
import KamdemParallax from "assets/jss/KamdemParallax.js";


import styles from "assets/jss/KamdemComponents.js";

const useStyles = makeStyles(styles);

export default function KamdemNavbar(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <KamdemHeader
        brand="Material Kit React"
        rightLinks={<KamdemHeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <KamdemParallax image={require("assets/img/bg4.jpg")}>
        <div className={classes.container}>
          <KamdemGridContainer>
            <KamdemGridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Material Kit React.</h1>
                <h3 className={classes.subtitle}>
                  A Badass Material-UI Kit based on Material Design.
                </h3>
              </div>
            </KamdemGridItem>
          </KamdemGridContainer>
        </div>
      </KamdemParallax>
    </div>
  );
}

