"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { f } from '../../../lib/utils';
import { useState, useEffect } from 'react';

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
      <div>test</div>
      <XAxis dataKey="name" />
      <YAxis width="auto" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="count" stroke="#8884d8" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
    </LineChart>
  );
}