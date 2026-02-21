"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { f } from '../../../lib/utils';
import { useState, useEffect } from 'react';
// import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
// const data = [
//   {
//     name: 'Page A',
//     uv: 4000,
//     pv: 2400,
//     amt: 400,
//   },
//   {
//     name: 'Page B',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Page D',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Page E',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Page F',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Page G',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];
// #endregion

type Props = {
  month: string[];
  revenuePerMonth: {
    month: string;
    revenue: number;
  }[];
  ordersPerMonth: {
    month: string;
    count: number;
  }[]
};

type DataPropos = {
  name: string,
  count: number,
  revenue: number,
};


export default function LineChartComponent({ month, revenuePerMonth, ordersPerMonth }: Props) {
  const [data, setData] = useState<DataPropos[]>();

  useEffect(() => {
    const revPerMonth = revenuePerMonth;
    const ordPerMonth = ordersPerMonth;
    const charData = f({ revPerMonth, ordPerMonth });
    setData(charData);
  }, []);

  return (
    <LineChart
      style={{ width: '100%', height: '100%', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 5,
        right: 50,
        left: 50,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis width="auto" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="count" stroke="#8884d8" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
      {/* <RechartsDevtools /> */}
    </LineChart>
  );
}