import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './BloodPressureChart.css';
import useFetchData from '../../axiosfetch/data';
const BloodPressureChart = () => {
    const [chartData, setChartData] = useState([]);
    const { data, loading, error } = useFetchData();


/*     const data = [
      {
        diagnosis_history: [
          {
            month: "March",
            year: 2024,
            blood_pressure: {
              systolic: {
                value: 160,
                levels: "Higher than Average",
              },
              diastolic: {
                value: 78,
                levels: "Lower than Average",
              },
            },
            heart_rate: {
              value: 78,
              levels: "Lower than Average",
            },
            respiratory_rate: {
              value: 20,
              levels: "Normal",
            },
            temperature: {
              value: 98.6,
              levels: "Normal",
            },
          },
          {
            month: "February",
            year: 2024,
            blood_pressure: {
              systolic: {
                value: 119,
                levels: "Normal",
              },
              diastolic: {
                value: 73,
                levels: "Lower than Average",
              },
            },
            heart_rate: {
              value: 99,
              levels: "Normal",
            },
            respiratory_rate: {
              value: 25,
              levels: "Normal",
            },
            temperature: {
              value: 98,
              levels: "Normal",
            },
          },
        ],
      },
    ]; */
  
    useEffect(() => {
      if (data[0]?.diagnosis_history?.length > 0) {
        const processedData = data[0].diagnosis_history.map((item) => ({
          month: `${item.month} ${item.year}`,
          systolic: item.blood_pressure?.systolic.value,
          diastolic: item.blood_pressure?.diastolic.value,
        }));
        console.log(processedData, '');
        setChartData(processedData);
      }
    }, [data]);
  
    if (data[0]?.diagnosis_history?.length === 0) {
      return (
        <div>
          <p>No data available.</p>
          <p>Please check your data sources and try again later.</p>
        </div>
      );
    }
  
    return (
      <div className="blood-pressure-chart">
        <div className="chart-container">
          <h2>Blood Pressure</h2>
          {chartData?.length > 0 ? (
            <LineChart width={500} height={250} data={chartData}>
              <XAxis dataKey="month" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="systolic" stroke="#8884d8" />
              <Line type="monotone" dataKey="diastolic" stroke="#82ca9d" />
            </LineChart>
          ) : (
            <div>
              <p>No data available.</p>
              <p>Please check your data sources and try again later.</p>
            </div>
          )}
        </div>
        {chartData?.length > 0 && (
          <div className="blood-pressure-info">
            <div className="systolic">
              <span>Systolic</span>
              <span>{chartData[0].systolic}</span>
              <span>{data[0].diagnosis_history[0].blood_pressure?.systolic.levels}</span>
            </div>
            <div className="diastolic">
              <span>Diastolic</span>
              <span>{chartData[0].diastolic}</span>
              <span>{data[0].diagnosis_history[0].blood_pressure?.diastolic.levels}</span>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default BloodPressureChart;