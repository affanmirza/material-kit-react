import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
import { Card, CardHeader, Box } from '@mui/material';
import React, { useState } from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { BaseOptionChart } from '../../../components/charts';
// ----------------------------------------------------------------------

export default function AppWebsiteVisits() {
  const [followCount, setFollowCount] = useState(() => []);
  const [labels, setLabels] = useState(() => []);
  const [timeframe, setTimeframe] = useState(() => "Select Timeframe");
  const [daily, setDaily] = useState(() => "contained");
  const [weekly, setWeekly] = useState(() => "contained");
  const [monthly, setMonthly] = useState(() => "contained");
  

  const chartOptions = merge(BaseOptionChart(), {
    stroke: { width: [2, 2] },
    plotOptions: { bar: { columnWidth: '11%', borderRadius: 4 } },
    fill: { type: ['gradient', 'gradient'],},
    labels: labels,
    xaxis: { type: 'datetime' },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y) => {
          if (typeof y !== 'undefined') {
            return `${y.toFixed(0)} followers`;
          }
          return y;
        }
      }
    }
  });

  const CHART_DATA = [
    {
      name: 'Jumlah Pengikut',
      type: 'area',
      data: followCount
    }
  ];

  const buttons = [
    <Button variant={daily} onClick={clickDaily} key="one">Daily</Button>,
    <Button variant={weekly} onClick={clickWeekly} key="two">Weekly</Button>,
    <Button variant={monthly} onClick={clickMonthly} key="three">Monthly</Button>,
  ];

  function clickDaily() {
    setFollowCount([80, 130, 220, 160, 250, 330, 390])
    setLabels(['03/02/2022', '03/03/2022', '03/04/2022', '03/05/2022'
              ,'03/06/2022','03/07/2022', '03/08/2022'])
    setTimeframe('Daily')
    setDaily('outlined')
    setWeekly('contained')
    setMonthly('contained')
  }

  function clickWeekly() {
    setFollowCount([130, 240, 210, 250])
    setLabels(['02/15/2022', '02/22/2022', '03/01/2022', '03/08/2022'])
    setTimeframe('Weekly')
    setDaily('contained')
    setWeekly('outlined')
    setMonthly('contained')
  }

  function clickMonthly() {
    setFollowCount([30, 25, 36, 30, 
                    45, 35, 64, 52, 
                    59, 36, 39, 22])
    setLabels(['03/08/2022', '02/08/2022','01/08/2022', '12/08/2021',
               '11/08/2021', '10/08/2021','09/08/2021', '08/08/2021',
               '07/08/2021', '06/08/2021','05/08/2021', '04/08/2021'])
    setTimeframe('Monthly')
    setDaily('contained')
    setWeekly('contained')
    setMonthly('outlined')
    
  }

  return (
    <Card>
      <CardHeader title="Dashboard" subheader={timeframe}/>
      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', '& > *': {mr: 5, mt: -5},} }>
        <ButtonGroup color="primary" size="medium" aria-label="small button group">
          {buttons}
        </ButtonGroup>
      </Box>
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart type="line" series={CHART_DATA} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}
