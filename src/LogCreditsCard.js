import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";

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

class LogCreditsCard extends Component {
  constructor(props) {
    super(props);
    this.state = { ecocredits: 25, render: false, cart: 0, kart: [""] };
    this.logging = this.logging.bind(this);
    this.log = this.log.bind(this);
    this.home = this.home.bind(this);
    //this.childFunction = this.childFunction.bind(this);
    // Here we have created four states, firstly eco credits to keep track
    // of your balance, secondly a boolean fuction called render and two cart
    // states that keep track of total price and the names of the items in basket
  }
  logging() {
    let num1 = this.state.ecocredits;
    let num2 = this.state.cart;
    let num3 = num1 + num2;
    this.setState({ ecocredits: num3 });
    this.setState({ render: false });
    this.setState({ cart: 0 });
    this.setState({ kart: [""] });
    Balance = num3;
    // this function called spending, subtracts the total amount in the cart from
    // from the users balance. It then sets the carts back to zero
    // and changes to render state to false
  }
  log() {
    let x = this.state.cart;
    let y = 5;
    let z = x + y;
    this.setState({ render: true });
    this.setState({ cart: z });
    this.setState({ kart: this.state.kart.concat(["Walked to work "]) });
  }
  // This function adds the price and the name of the item to the carts.
  // It also sets the render function to true which allows the spend fucntion to render
  // Using 3 variables it keeps track if clicked more than once.
  log2() {
    let x = this.state.cart;
    let y = 5;
    let z = x + y;
    this.setState({ render: true });
    this.setState({ cart: z });
    this.setState({
      kart: this.state.kart.concat(["Used re-usable coffee cup "])
    });
    // This function adds the price and the name of the item to the carts.
    // It also sets the render function to true which allows the spend fucntion to render
    // Using 3 variables it keeps track if clicked more than once.
  }
  log3() {
    let x = this.state.cart;
    let y = 5;
    let z = x + y;
    this.setState({ render: true });
    this.setState({ cart: z });
    this.setState({
      kart: this.state.kart.concat(["Office lights switched off "])
    });
    // This function adds the price and the name of the item to the carts.
    // It also sets the render function to true which allows the spend fucntion to render
    // Using 3 variables it keeps track if clicked more than once.
  }
  log4() {
    let x = this.state.cart;
    let y = 5;
    let z = x + y;
    this.setState({ render: true });
    this.setState({ cart: z });
    this.setState({
      kart: this.state.kart.concat(["No paper printed today "])
    });
    // This function adds the price and the name of the item to the carts.
    // It also sets the render function to true which allows the spend fucntion to render
    // Using 3 variables it keeps track if clicked more than once.
  }
  log5() {
    let x = this.state.cart;
    let y = 5;
    let z = x + y;
    this.setState({ render: true });
    this.setState({ cart: z });
    this.setState({ kart: this.state.kart.concat(["Recycled all waste "]) });
  }
  // This function adds the price and the name of the item to the carts.
  // It also sets the render function to true which allows the spend fucntion to render
  // Using 3 variables it keeps track if clicked more than once.
  home() {
    let curCart = this.state.cart;
    let newCart = curCart - 5;
    this.setState({ cart: newCart });
  }

  render() {
    const { classes } = this.props;
    const ss = this.state.render;

    if (ss === true) {
      // this will only render if the user has clicked one of the five log buttons
      return (
        <div className="App">
          <Typography
            component="h6"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            <h1>
              <b>Eco-Log</b>
            </h1>
            Log eco-credits. <br></br>
            You currently have a balance of{" "}
            <b>{this.state.ecocredits} eco-credits. </b> <br></br>5 credits are
            awarded for each action.
            <p>
              Walked to work
              <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                startIcon={<SaveIcon />}
                onClick={() => this.log()} // button to log credits
              >
                Log
              </Button>
              <br></br>
              Used re-usable coffee cup
              <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                startIcon={<SaveIcon />}
                onClick={() => this.log2()} // button to log credits
              >
                Log
              </Button>
              <br></br>
              Office lights switched off
              <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                startIcon={<SaveIcon />}
                onClick={() => this.log3()} // button to log credits
              >
                Log
              </Button>
              <br></br>
              No paper printed today
              <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                startIcon={<SaveIcon />}
                onClick={() => this.log4()} // button to log credits
              >
                Log
              </Button>
              <br></br>
              Recycled all waste
              <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                startIcon={<SaveIcon />}
                onClick={() => this.log5()} // button to log credits
              >
                Log
              </Button>
              <br></br>
            </p>
            <p>
              You are logging <b>{this.state.cart}</b> eco-credits and will now
              have <b>{this.state.ecocredits + this.state.cart}</b> total.
              <br></br>
              <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                startIcon={<SaveIcon />}
                onClick={() => this.logging()}
              >
                Log
              </Button>
            </p>
            <b>Cart</b>
            <br></br>
            {this.state.kart}
          </Typography>
        </div>
      );
    }
    return (
      <div className="App">
        <Typography
          component="h6"
          variant="h6"
          color="inherit"
          noWrap
          className={classes.title}
        >
          <h1>
            <b>Eco-Log</b>
          </h1>
          Log eco-credits. <br></br>
          You currently have a balance of{" "}
          <b>{this.state.ecocredits} eco-credits. </b> <br></br>5 credits are
          awarded for each action.
          <p>
            Walked to work
            <Button
              variant="contained"
              color="primary"
              size="small"
              className={classes.button}
              startIcon={<SaveIcon />}
              onClick={() => this.log()}
            >
              Log
            </Button>
            <br></br>
            Used re-usable coffee cup
            <Button
              variant="contained"
              color="primary"
              size="small"
              className={classes.button}
              startIcon={<SaveIcon />}
              onClick={() => this.log2()}
            >
              Log
            </Button>
            <br></br>
            Office lights switched off
            <Button
              variant="contained"
              color="primary"
              size="small"
              className={classes.button}
              startIcon={<SaveIcon />}
              onClick={() => this.log3()}
            >
              Log
            </Button>
            <br></br>
            No paper printed today
            <Button
              variant="contained"
              color="primary"
              size="small"
              className={classes.button}
              startIcon={<SaveIcon />}
              onClick={() => this.log4()}
            >
              Log
            </Button>
            <br></br>
            Recycled all waste
            <Button
              variant="contained"
              color="primary"
              size="small"
              className={classes.button}
              startIcon={<SaveIcon />}
              onClick={() => this.log5()}
            >
              Log
            </Button>
            <br></br>
          </p>
        </Typography>
      </div>
    );
  }
}
//export default withStyles(styles, { withTheme: true })(LogCreditsCard);
//export default withStyles(styles, { withTheme: true })(SpendCreditsCard);

//create mini database
export let Balance = 8232;
//// this 2412 is sent to the TotalEcoCreditSold.js file and dashboard

class CreditsExLog extends Component {
  childFunction = (e) => {
    e.preventDefault();
    this.props.functionCallFromParent(Balance);
  };

  render() {
    return (
      <div>
        <button onClick={this.childFunction.bind(this)}>Refresh</button>
      </div>
    );
  }
}

//exporting SpendCreditsCard
const LogCd = withStyles(styles, { withTheme: true })(LogCreditsCard);

//exporting 2 x variables to hold classes.
export { LogCd, CreditsExLog };
