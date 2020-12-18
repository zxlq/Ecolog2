
import Typography from "@material-ui/core/Typography";
import Title from "../Title";

import React, { Component } from "react";


import { withStyles } from "@material-ui/core/styles";
const styles = (theme) => ({
  root: {
    maxWidth: 643,
    margin: "auto",
    borderRadius: 12,
    padding: 12,
    height: 600
  },
  media: {
    borderRadius: 6
  },
  button: {
    margin: theme.spacing(1)
  },
  title: {
    flexGrow: 1
  }
});

class BicycleJourneys extends Component {
 
// we load a card to show the data with logos and data point
  render() {
    return (
      <div>
        <img
          src="bicycle-svgrepo-com.svg"
          alt="Logo"
          width="250"
          height="170"
          align="center"
        ></img>
        <Typography component="p" variant="h3">
          2,342
        </Typography>
        <Typography component="h3" color="inherit" className={styles.title}>
          <Title>Bike Journeys by Maynooth University in 2020</Title>
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(BicycleJourneys);
