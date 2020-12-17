import React, { Component } from "react";

  import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Trees from "./DashboardCards/Trees";
import TotalEcoCreditsSold from "./DashboardCards/TotalEcoCreditsSold";
import SocialCardDemo from "./DashboardCards/SocialCardDemo";

import TotalEcoCreditsLogged from "./DashboardCards/TotalEcoCreditsLogged";

import EcoCard from "./DashboardCards/EcoCard";
import BicycleJourneys from "./DashboardCards/BicycleJourneys";

//import SocialCardDemo from "./DashboardCards/SocialCardDemo";

//This displays the DASHBOARD CARDS and is called from app.js in the main div around line 234
class CardContentHandler1 extends Component {
  render() {
    return (
      <Grid container spacing={1}>
        {/* media card ecologi LOGO */}

        <Grid item xs={12} md={3} lg={3}>
          <Paper>
            <EcoCard />

          </Paper>
        </Grid>

        <Grid item xs={12} md={3} lg={3}>
          <Paper>
            <BicycleJourneys />
            <hr></hr>
            <Trees />
          </Paper>
        </Grid>
        
{/*Total Eco Credits Sold by Maynooth University*/}
        <Grid item xs={12} md={3} lg={3}>
          <Paper>
          <TotalEcoCreditsLogged />
          <hr></hr>
            <TotalEcoCreditsSold />
          </Paper>
        </Grid>
        <Grid item xs={12} md={3} lg={3}>
          <Paper>
            <SocialCardDemo />
          </Paper>
        </Grid>
        {/*Tress Purchased by Maynooth University from Ecologi*/}
       
        {/*Total Eco Credits Purchased//logged by Maynooth University*/}
        

        
      </Grid>
    );
  }
}
export default CardContentHandler1;
