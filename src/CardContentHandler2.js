import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";


import {LogCd} from "./LogCreditsCard";


//Call a card with content to LOG credits
class CardContentHandler2 extends Component {
  render() {
    return (

  <Grid container spacing={1}>
            

          

            <Grid item xs={12} md={12} lg={12}>
              <Paper>
                {/* Import mini card to show the LOGGED CREDITS */}
              <LogCd />
              </Paper>
            </Grid>

            </Grid>

       
        
)
    }
  }
export default CardContentHandler2