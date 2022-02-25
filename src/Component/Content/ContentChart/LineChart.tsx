import "./ContentChart.css";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

const data = [
  {
    name: "Thứ 2",
    "Doanh thu": 150,
  },
  {
    name: "Thứ 3",
    "Doanh thu": 170,
  },
  {
    name: "Thứ 4",
    "Doanh thu": 170,
  },
  {
    name: "Thứ 5",
    "Doanh thu": 230,
  },
  {
    name: "Thứ 6",
    "Doanh thu": 220,
  },
  {
    name: "Thứ 7",
    "Doanh thu": 250,
  },
  {
    name: "CN",
    "Doanh thu": 200,
  },
];

export default function Chart() {
  return (
    <div className="chart">
      <div style={{display: 'flex', justifyContent: 'space-between', margin: '30px 0 10px'}}>
        <p>Doanh thu</p>
        <div style={{display: 'flex', alignItems: 'center' ,border: '1px solid #E6E0E0', width: 120}}>
            <input type="text" value={'Tháng 4, 2021'} style={{border: 'none', width: 100, fontSize: 10, paddingLeft:10}}/>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="#FF993C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3 10H21" stroke="#FF993C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16 2V6" stroke="#FF993C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8 2V6" stroke="#FF993C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
      </div>
      <AreaChart width={1000} height={180} data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#FAA05F" stopOpacity={0.26}/>
          <stop offset="95%" stopColor="#FAA05F" stopOpacity={0}/>
        </linearGradient>
        </defs>
        <XAxis dataKey="name" tickLine={false} axisLine={false} />
        <YAxis axisLine={false} tickCount={4} type="number" domain={['dataMin - 10', 'dataMax + 10']} tickLine={false}/>
        <CartesianGrid vertical={false} stroke="#ECE9F1"/>
        <Tooltip />
        <Area type="monotone" dataKey="Doanh thu" stroke="#FF993C" strokeWidth={3} fillOpacity={1} fill="url(#colorUv)" />
      </AreaChart>
      <div style={{marginTop: 30, fontSize: 10, color: '#A2A3A5'}}>
        <h1>Tổng doanh thu theo tuần</h1>
        <p style={{fontSize: 17, color: '#1E0D03', fontWeight: '900'}}>525.145.000 <span style={{fontSize: 10}}>đồng</span></p>
      </div>
    </div>
  );
}

