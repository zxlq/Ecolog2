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

class SpendCreditsCard extends Component {
  constructor(props) {
    super(props);

    this.state = { ecocredits: 25, render: false, cart: 0, kart: [""] };
    this.spending = this.spending.bind(this);
    this.Contribute = this.Contribute.bind(this);
    this.home = this.home.bind(this);
    this.Badbalance = this.BadBalance.bind(this);
    //this.childFunction = this.childFunction.bind(this);
  }

  spending() {
    let num1 = this.state.ecocredits;
    let num2 = this.state.cart;
    let num3 = num1 - num2;
    this.setState({ ecocredits: num3 });
    this.setState({ render: false });
    this.setState({ cart: 0 });
    this.setState({ kart: [""] });
    Balance = num3;
  }
  Contribute() {
    let x = this.state.cart;
    let y = 5;
    let z = x + y;
    this.setState({ render: true });
    this.setState({ cart: z });
    this.setState({ kart: this.state.kart.concat(["Plant Tree "]) });
  }
  Contribute2() {
    let x = this.state.cart;
    let y = 5;
    let z = x + y;
    this.setState({ render: true });
    this.setState({ cart: z });
    this.setState({ kart: this.state.kart.concat(["Solar Panel "]) });
  }
  Contribute3() {
    let x = this.state.cart;
    let y = 5;
    let z = x + y;
    this.setState({ render: true });
    this.setState({ cart: z });
    this.setState({ kart: this.state.kart.concat(["Eco Windows "]) });
  }
  Contribute4() {
    let x = this.state.cart;
    let y = 5;
    let z = x + y;
    this.setState({ render: true });
    this.setState({ cart: z });
    this.setState({ kart: this.state.kart.concat(["EV Chargers "]) });
  }
  Contribute5() {
    let x = this.state.cart;
    let y = 5;
    let z = x + y;
    this.setState({ render: true });
    this.setState({ cart: z });
    this.setState({ kart: this.state.kart.concat(["LED Lights "]) });
  }
  home() {
    let curCart = this.state.cart;
    let newCart = curCart - 5;
    this.setState({ cart: newCart });
  }
  BadBalance() {
    this.setState({ render: false });
    this.setState({ cart: 0 });
  }

  render() {
    const { classes } = this.props;
    const ss = this.state.render;
    const xx = this.state.ecocredits;
    const zz = this.state.cart;

    if (xx === 0 && zz === 5) {
      return (
        <div>
          Not enough credits
          <button onClick={() => this.BadBalance()}>Home</button>
        </div>
      );
    }
    if (zz > xx) {
      return (
        <div>
          Not enough credits
          <button onClick={() => this.home()}>Home</button>
        </div>
      );
    }

    if (ss === true) {
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
            Spend eco-credits. <br></br>
            You currently have a balance of{" "}
            <b>{this.state.ecocredits} eco-credits. </b> <br></br>
            What would you like to spend eco-credits on?
            <p>
              Plant a Tree?
              <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                startIcon={<SaveIcon />}
                onClick={() => this.Contribute()}
              >
                Contribute
              </Button>
              <br></br>
              Solar Panels?
              <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                startIcon={<SaveIcon />}
                onClick={() => this.Contribute2()}
              >
                Contribute
              </Button>
              <br></br>
              Eco Friendly windows?
              <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                startIcon={<SaveIcon />}
                onClick={() => this.Contribute3()}
              >
                Contribute
              </Button>
              <br></br>
              Ev Car Chargers?
              <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                startIcon={<SaveIcon />}
                onClick={() => this.Contribute4()}
              >
                Contribute
              </Button>
              <br></br>
              LED Lights?
              <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                startIcon={<SaveIcon />}
                onClick={() => this.Contribute5()}
              >
                Contribute
              </Button>
              <br></br>
            </p>
            <p>
              You are spending <b>{this.state.cart}</b> eco-credits and will
              have <b>{this.state.ecocredits - this.state.cart}</b> remaining.
              <br></br>
              <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                startIcon={<SaveIcon />}
                onClick={() => this.spending()}
                //onClick={()=>this.childFunction.bind(this)}
              >
                Spend
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
          Spend eco-credits. <br></br>
          You currently have a balance of{" "}
          <b>{this.state.ecocredits} eco-credits. </b> <br></br>
          What would you like to spend eco-credits on?
          <p>
            Plant a Tree?
            <Button
              variant="contained"
              color="primary"
              size="small"
              className={classes.button}
              startIcon={<SaveIcon />}
              onClick={() => this.Contribute()}
            >
              Contribute
            </Button>
            <br></br>
            Solar Panels?
            <Button
              variant="contained"
              color="primary"
              size="small"
              className={classes.button}
              startIcon={<SaveIcon />}
              onClick={() => this.Contribute2()}
            >
              Contribute
            </Button>
            <br></br>
            Eco Friendly windows?
            <Button
              variant="contained"
              color="primary"
              size="small"
              className={classes.button}
              startIcon={<SaveIcon />}
              onClick={() => this.Contribute3()}
            >
              Contribute
            </Button>
            <br></br>
            Ev Car Chargers?
            <Button
              variant="contained"
              color="primary"
              size="small"
              className={classes.button}
              startIcon={<SaveIcon />}
              onClick={() => this.Contribute4()}
            >
              Contribute
            </Button>
            <br></br>
            LED Lights?
            <Button
              variant="contained"
              color="primary"
              size="small"
              className={classes.button}
              startIcon={<SaveIcon />}
              onClick={() => this.Contribute5()}
            >
              Contribute
            </Button>
            <br></br>
          </p>
        </Typography>
      </div>
    );
  }
}
//export default withStyles(styles, { withTheme: true })(SpendCreditsCard);

//create mini database
export let Balance = 2415;
  //// this 2412 is sent to the TotalEcoCreditSold.js file and dashboard
  
class CreditsEX extends Component {
  childFunction = (e) => {
    e.preventDefault();
    this.props.functionCallFromParent(Balance);

    console.log();
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
const SpendCd = withStyles(styles, { withTheme: true })(SpendCreditsCard);

//exporting 2 x variables to hold classes.
export { SpendCd, CreditsEX };
