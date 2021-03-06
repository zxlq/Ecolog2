
import Typography from "@material-ui/core/Typography";
import Title from "../Title";



import React, { Component } from "react";

//changed
import { CreditsExLog } from "../LogCreditsCard";

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
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  button: {
    margin: theme.spacing(1)
  },
  title: {
    flexGrow: 1
  }
});

class TotalEcoCreditsLogged extends Component {
  
  
  constructor(props) {
    super(props);

    // created state variable to recieve data from LogEcoCredits
    this.state = { DataFromChild1_value_key: "Waiting for Logs Data" };
    this.parentFunction = this.parentFunction.bind(this);
  }

  
  ////get the spending data from the LogCreditsTotal

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
          src="Log.svg"
          alt="Logo"
          width="100"
          height="170"
          align="center"
        ></img>
        
        <Typography component="p" variant="h5" align="center">
          {this.state.DataFromChild1_value_key} Credits
          <CreditsExLog functionCallFromParent={this.parentFunction.bind(this)} />
        </Typography >
        <Title align="center">Eco Credits Logged by Maynooth University</Title>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(TotalEcoCreditsLogged);
