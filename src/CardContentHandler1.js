import React, { Component } from "react";

  import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Trees from "./DashboardCards/Trees";
import TotalEcoCreditsSold from "./DashboardCards/TotalEcoCreditsSold";
import SocialCardDemo from "./DashboardCards/SocialCardDemo";

import TotalEcoCreditsLogged from "./DashboardCards/TotalEcoCreditsLogged";

import EcoCard from "./DashboardCards/EcoCard";
import BicycleJourneys from "./DashboardCards/BicycleJourneys";
import Chart from "./DashboardCards/Chart";
//import SocialCardDemo from "./DashboardCards/SocialCardDemo";

const styles = (theme) => ({
  root: {
    maxWidth: 643,
    margin: "auto",
    borderRadius: 12,
    padding: 12,
    height: 600
  },
  media: {
    borderRadius: 6,
    height: 140
  },
  button: {
    margin: theme.spacing(1)
  },
  title: {
    flexGrow: 1
  }
});

//This displays the DASHBOARD CARDS and is called from app.js in the main div around line 234
class CardContentHandler1 extends Component {
  render() {
    return (
      <Grid container spacing={1}>
        {/* media card ecologi LOGO */}

        <Grid item xs={12} md={3} lg={3}>
          <Paper elevation={3}>
            <EcoCard />

          </Paper>
        </Grid>

        <Grid item xs={12} md={3} lg={3}>
          <Paper variant="outlined" elevation={3} align="center">
            <Card className={styles.root}>
            
            <BicycleJourneys variant="outlined"/>
            <hr></hr>
            <Trees />
            </Card>
          </Paper>
        </Grid>
        
{/*Total Eco Credits Sold by Maynooth University*/}
        <Grid item xs={12} md={3} lg={3}>
          <Paper variant="outlined" elevation={3} align="center">
          <Card className={styles.root}>
          <TotalEcoCreditsLogged  />
          <hr></hr>
            <TotalEcoCreditsSold />
            </Card>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3} lg={3}>
          <Paper variant="outlined" elevation={3} align="center">
          <Card>
            <Chart />
            <SocialCardDemo />
            </Card>
          </Paper>
        </Grid>
        {/*Tress Purchased by Maynooth University from Ecologi*/}
       
        {/*Total Eco Credits Purchased//logged by Maynooth University*/}
        

        
      </Grid>
    );
  }
}
export default CardContentHandler1;
