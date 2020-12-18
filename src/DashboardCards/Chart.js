
//Imported chart example from recharts

//https://recharts.org/en-US/examples/SimpleLineChart

import React from 'react'
import { ResponsiveContainer, LineChart, Line, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const data = [
  { label: 'January', CreditsSold: 21, CreditsLogged: 41 },
  { label: 'February', CreditsSold: 35, CreditsLogged: 79 },
  { label: 'March', CreditsSold: 75, CreditsLogged: 57 },
  { label: 'April', CreditsSold: 51, CreditsLogged: 47 },
  { label: 'May', CreditsSold: 41, CreditsLogged: 63 },
  { label: 'June', CreditsSold: 47, CreditsLogged: 71 }
];

export default function Charts() {
  // we load a card to show the data with logos and data point
  return (
    <div className="row">
      

      <div className="section col-md-6">
        <h3 className="section-title">Our Stats</h3>
        <div className="section-content">
          <ResponsiveContainer width="100%" height={175}>
            <LineChart data={data} margin={{ top: 15, right: 30, bottom: 15, left: 0 }}>
              <Tooltip />
              <XAxis dataKey="label" />
              <YAxis />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <Legend/>
              <Line type="monotone" dataKey="CreditsSold" stroke="#FB8833" />
              <Line type="monotone" dataKey="CreditsLogged" stroke="#17A8F5" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>


    </div>
  )
}