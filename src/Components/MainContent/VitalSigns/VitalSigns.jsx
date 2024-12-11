import React, { useEffect, useState } from 'react';
import './VitalSigns.css';
import HealthIndicator from './HealthIndicator';
import temperature from '../../../assets/temperature.png';
import heart from '../../../assets/heart.png';
import respiration from '../../../assets/respiration.png';
import useFetchData from '../../../axiosfetch/data';

const VitalSigns = () => {
    const { data, loading, error } = useFetchData();
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        if (data[0]?.diagnosis_history?.length > 0) {
            const processedData = data[0].diagnosis_history.map((item) => ({
                respiration: {
                    icon: <img src={respiration} alt="Respiratory Rate" />,
                    value: item?.respiratory_rate?.value,
                    label: "Respiratory Rate",
                    status: item?.respiratory_rate?.levels,
                },
                temperature: {
                    icon: <img src={temperature} alt="Temperature" />,
                    value: item?.temperature?.value ? `${item.temperature.value}°F` : 'N/A',
                    label: "Temperature",
                    status: item?.temperature?.levels,
                },
                heartRate: {
                    icon: <img src={heart} alt="Heart Rate" />,
                    value: item?.heart_rate?.value ? `${item.heart_rate.value} bpm` : 'N/A',
                    label: "Heart Rate",
                    status: item?.heart_rate?.levels,
                },
            }));
            setChartData(processedData);
        }
    }, [data]);
    return (
        <div className="vital-signs">
            <div className="vital-signs-container">
                <h2>Vital Signs</h2>
                <div className="vital-signs-content">
                    {chartData.length > 0 && (
                        <div className="vital-signs-row">
                            <HealthIndicator
                                icon={chartData[0].respiration.icon}
                                value={chartData[0].respiration.value}
                                label={chartData[0].respiration.label}
                                status={chartData[0].respiration.status}
                            />
                            <HealthIndicator
                                icon={chartData[0].temperature.icon}
                                value={chartData[0].temperature.value}
                                label={chartData[0].temperature.label}
                                status={chartData[0].temperature.status}
                            />
                            <HealthIndicator
                                icon={chartData[0].heartRate.icon}
                                value={chartData[0].heartRate.value}
                                label={chartData[0].heartRate.label}
                                status={chartData[0].heartRate.status}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default VitalSigns;