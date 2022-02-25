import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import './DonutChart.css'

const data = [
  { name: 'Group A', value: 56024 },
  { name: 'Group B', value: 13568 },
];

const data1 = [
  { name: 'Group A', value: 30256 },
  { name: 'Group B', value: 28302 },
];

const COLORS = ['#4F75FF', '#FF8A48'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({cx, cy, midAngle, innerRadius, outerRadius, percent, index } : any ) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 1;
    const x = cx + radius * Math.cos(-midAngle * RADIAN) - 20;
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <>
        <filter id="filter" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="linearRGB">
          <feDropShadow stdDeviation="5 5" in="SourceGraphic" dx="0" dy="0" flood-color="#1F3646" flood-opacity="0.25" x="0%" y="0%" width="100%" height="100%" result="dropShadow2"/>
        </filter>
        <rect x={x-10} 
        y={y-16} 
        fill="white" 
        dominantBaseline="central" 
        fontSize={14} 
        colorRendering="red"
        rx="10" ry="10" width="50" height="34"
        style={{fill:'width' ,strokeWidth:5 }} filter="url(#filter)"/>
        <text 
          x={x} 
          y={y} 
          fill="black" 
          dominantBaseline="central" 
          fontSize={11} 
          fontWeight={900}
          width="60px"
          colorRendering="red">
          {`${data[index].value}`}
        </text>
        </>
    );
  };
  const renderCustomizedLabel1 = ({cx, cy, midAngle, innerRadius, outerRadius, percent, index } : any ) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 1;
    const x = cx + radius * Math.cos(-midAngle * RADIAN) - 20;
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
    <> 
      <filter id="filter" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="linearRGB">
        <feDropShadow stdDeviation="5 5" in="SourceGraphic" dx="0" dy="0" flood-color="#1F3646" flood-opacity="0.25" x="0%" y="0%" width="100%" height="100%" result="dropShadow2"/>
      </filter>
      <rect x={x-10 } 
        y={y-16} 
        fill="white" 
        dominantBaseline="central" 
        fontSize={14} 
        colorRendering="red"
        rx="10" ry="10" width="50" height="34"
        style={{fill:'width' ,strokeWidth:5 }} filter="url(#filter)"/>
        <text 
          x={x} 
          y={y} 
          fill="black" 
          dominantBaseline="central" 
          fontSize={11} 
          fontWeight={900}
          width="60px">
          {`${data1[index].value}`}
        </text>
    </>
        // <text 
        // x={x} 
        // y={y} 
        // fill="white" 
        // textAnchor={x > cx ? 'start' : 'end'} 
        // dominantBaseline="central" 
        // fontSize={14} 
        // width="60px"
        // colorRendering="red"
        // stroke="black">
        //   {/* {`${(percent * 100).toFixed(0)}%`} */}
        //   {`${data1[index].value}`}
        // </text>
    );
  };

export default class Example extends PureComponent {
  // static demoUrl = 'https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o';

  render() {
    return (
      <div className='donutChart' style={{display: 'flex', alignItems: 'flex-start'}} >
        <div className="donutChart-item">
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
        <div className="donutChart-item">
          <h3 style={{textAlign: 'center', fontSize: 13}}>Gói gia đình</h3>
          <PieChart width={300} height={400} margin={{ top: -100 }}>
            <Pie
              data={data}
              cx='50%'
              cy={200}
              innerRadius='26%'
              outerRadius={88}
              startAngle={90}
              endAngle={450}
              fill="#8884d8"
              viewBox="0 100 300 400"
              // paddingAngle={10}
              dataKey="value"
              labelLine={false}
              label={renderCustomizedLabel}
              legendType='square'
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} stroke='unset' fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </div>
        <div className="donutChart-item">
          <h3 style={{textAlign: 'center', fontSize: 13}}>Gói sự kiện</h3>
          <PieChart width={300} height={400} margin={{ top: -100 }}>
            <Pie
              data={data1}
              cx='50%'
              cy={200}
              innerRadius='26%'
              outerRadius={88}
              startAngle={90}
              endAngle={450}
              // paddingAngle={5}
              dataKey="value"
              labelLine={false}
              label={renderCustomizedLabel1}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} stroke='unset' fill={COLORS[index % COLORS.length]}/>
              ))}
            </Pie>
          </PieChart>
        </div>
        <div className="donutChart-item" style={{fontSize: 11, fontWeight: 900}}>
          <div style={{display: 'flex'}}>
            <div style={{width: 30, height: 14, backgroundColor: '#4F75FF', borderRadius: 3}}></div>
            <p style={{paddingLeft: 6}}>Vé đã sử dụng</p>
          </div>
          <div style={{display: 'flex'}}>
            <div style={{width: 30, height: 14, backgroundColor: '#FF8A48', borderRadius: 3}}></div>
            <p style={{paddingLeft: 6}}>Vé chưa sử dụng</p>
          </div>
        </div>
      </div>
    );
  }
}
