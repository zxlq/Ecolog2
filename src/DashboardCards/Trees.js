//This Class calls a live ECOLOGI.com api and displays theresult.

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "../Title";
import React, { useEffect, useState } from "react";

//we import AXIOS to get our API data
import axios from "axios";


const useStyles = makeStyles({
  depositContext: {
    flex: 1
  }
});

export default function Trees() {
  const classes = useStyles();

  let trees = "";

  const Home = () => {
    const [Data, setData] = useState({
      total: ""
    });

    useEffect(() => {
      axios
        .get("https://public.offset.earth/users/fortusgroup/trees")
        .then((res) => {
          console.log("Response from main API: ", res);
          console.log("Home Data: ", res.data);
          let companyData = res.data;
          setData({ total: companyData.total });
          
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
    console.log(Data.total);
    trees = Data.total;
  };
  //load home
  Home();
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    setCurrentDate(date + "/" + month + "/" + year);
  }, []);
// we load a card to show the data with logos and data point
  return (
    <React.Fragment>
      <img
        src="company-forest.svg"
        alt="Logo"
        width="250"
        height="150"
        align="center"
      ></img>
      <Typography component="p" variant="h3" >
        {trees}
      </Typography>
      <Title>Trees Planted by Maynooth University</Title>

      <Typography
        color="textSecondary"
        className={classes.depositContext}
      >Updated from Ecologi API on:</Typography>
      <Typography
        color="textSecondary"
        className={classes.depositContext}
      >{currentDate}</Typography>
     
    </React.Fragment>
  );
}
