import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";

// core components
import KamdemGridContainer from "../Grid/KamdemGridContainer.js";
import KamdemGridItem from "../GridItem/KamdemGridItem.js";

import KamdemTabs from "../Tabs/KamdemTabs.js";
import TabsStyle from "./KamdemSectionTabsStyle.js";

const useStyles = makeStyles(TabsStyle);

function KamdemSectionTabs() {
  const classes = useStyles();
  return (
    <div className={classNames(classes.main, classes.mainRaised)}>
      <div className={classes.section}>
        <div className={classes.container}>
          <div id="nav-tabs">
            <h3>Über mich</h3>
            <KamdemGridContainer>
              <KamdemGridItem xs={12} sm={12} md={6}>
                <h5>
                  <small>WAS BIETE ICH AN</small>
                </h5>
                <KamdemTabs
                  headerColor="primary"
                  tabs={[
                    {
                      tabName: "Über mich",
                      tabIcon: Face,
                      tabContent: (
                        <p className={classes.textLeft}>
                          Danke, dass Du auf meine Seite schaust. Ich bin der Patrick und kam vor 15 Jahren nach Deutschland. Geboren bin ich in Zentralafrika, im schönsten Land: Kamerun. Es grenzt an den Atlantischen Ozean durch die Bucht von Bonny. 
                        </p>
                      )
                    },
                    {
                      tabName: "Projekte",
                      tabIcon: Chat,
                      tabContent: (
                        <p className={classes.textLeft}>
                          Kommt noch ... 
                        </p>
                      )
                    },
                    {
                      tabName: "Hobbies",
                      tabIcon: Build,
                      tabContent: (
                        <p className={classes.textLeft}>
                          Meine Kinder, reisen, essen, DVDs anschauen, Kino, Autos, Internet und Fussball. 
                        </p>
                      )
                    }
                  ]}
                />
              </KamdemGridItem>
              <KamdemGridItem xs={12} sm={12} md={6}>
                <h5>
                  <small>MEINE PROJEKTE</small>
                </h5>
                <KamdemTabs
                  plainTabs
                  headerColor="danger"
                  tabs={[
                    {
                      tabName: "Beratung",
                      tabContent: (
                        <p className={classes.textLeft}>
                          text ... 
                        </p>
                      )
                    },
                    {
                      tabName: "Analyse",
                      tabContent: (
                        <p className={classes.textLeft}>
                          text ... 
                        </p>
                      )
                    },
                    {
                      tabName: "Tests",
                      tabContent: (
                        <p className={classes.textLeft}>
                          text ... 
                        </p>
                      )
                    },
                    {
                      tabName: "IT - Architektur",
                      tabContent: (
                        <p className={classes.textLeft}>
                          text ...
                        </p>
                      )
                    },
                    {
                      tabName: "Softwareentwicklung",
                      tabContent: (
                        <p className={classes.textLeft}>
                          text ... 
                        </p>
                      )
                    }
                  ]}
                />
              </KamdemGridItem>
            </KamdemGridContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KamdemSectionTabs;