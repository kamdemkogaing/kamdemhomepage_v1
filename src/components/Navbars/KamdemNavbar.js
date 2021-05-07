import React from "react";
// nodejs library that concatenates classes
//import classNames from "classnames";
// react components for routing our app without refresh
//import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import KamdemHeader from "./KamdemHeader.js";
import KamdemHeaderLinks from "./KamdemHeaderLinks.js";
import KamdemGridContainer from "../Grid/KamdemGridContainer.js";
import KamdemGridItem from "../GridItem/KamdemGridItem.js";
import KamdemParallax from "../jss/KamdemParallax.js";
import styles from "../jss/KamdemComponents.js";

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
      <KamdemParallax image={require("../img/bg.jpg")}>
        <div className={classes.container}>
          <KamdemGridContainer>
            <KamdemGridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Material Kit React.</h1>
                <h3 className={classes.subtitle}>A Badass Material-UI Kit based on Material Design.</h3>
              </div>
            </KamdemGridItem>
          </KamdemGridContainer>
        </div>
      </KamdemParallax>
    </div>
  );
}

