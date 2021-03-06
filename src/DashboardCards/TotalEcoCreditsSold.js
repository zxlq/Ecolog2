
import Typography from "@material-ui/core/Typography";
import Title from "../Title";

import React, { Component } from "react";
import { CreditsEX } from "../SpendCreditsCard";

import { withStyles } from "@material-ui/core/styles";
const styles = (theme) => ({
  root: {
    maxWidth: 643,
    margin: "auto",
    borderRadius: 12,
    padding: 12,
    height: 700
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

class TotalSold extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //state variable to await new data
      //data received from child and stored in state
      DataFromChild1_value_key: "Waiting for Sales Data"
    };
    this.parentFunction = this.parentFunction.bind(this);
  }

  ////get the spending data from the SpendCreditsTotal

  parentFunction = (data_from_child) => {
    console.log(data_from_child);
    console.log("Our data is fetched");
    //data received from child and stored in state
    this.setState({ DataFromChild1_value_key: data_from_child });
  };

  render() {
    //Show the transaction total on screen 
    return (
      <React.Fragment>
        <img
          src="EcoToken.svg"
          alt="Logo"
          width="100"
          height="170"
          align="center"
        ></img>
        <Typography component="p" variant="h5" align="center">
          {this.state.DataFromChild1_value_key} Credits
          <CreditsEX functionCallFromParent={this.parentFunction.bind(this)} />
        </Typography>
        <Title>Eco Credits Sold by Maynooth University</Title>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(TotalSold);
