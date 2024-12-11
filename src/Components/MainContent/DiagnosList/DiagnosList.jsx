import React, { useEffect, useState } from 'react';
import './DiagnosticList.css';
import useFetchData from '../../../axiosfetch/data';


const DiagnosticList = () => {
    const [chartData, setChartData] = useState([]);
    const { data, loading, error } = useFetchData();

    useEffect(() => {
        if (data[0]?.diagnosis_history?.length > 0) {
            const processedData = data[0].diagnostic_list.map((item) => ({
                problem: item.name,
                description: item.description,
                status: item.status
            }));
            console.log(processedData, '');
            setChartData(processedData);
        }
    }, [data]);


    /*  const diagnostics = [
         {
             problem: 'Hypertension',
             description: 'Chronic high blood pressure',
             status: 'Under Observation'
         },
         {
             problem: 'Type 2 Diabetes',
             description: 'Insulin resistance and elevated blood sugar',
             status: 'Cured'
         },
         {
             problem: 'Asthma',
             description: 'Recurrent episodes of bronchial constriction',
             status: 'Inactive'
         }, {
             problem: 'Hypertension',
             description: 'Chronic high blood pressure',
             status: 'Under Observation'
         },
         {
             problem: 'Type 2 Diabetes',
             description: 'Insulin resistance and elevated blood sugar',
             status: 'Cured'
         },
         {
             problem: 'Asthma',
             description: 'Recurrent episodes of bronchial constriction',
             status: 'Inactive'
         }
     ]; */
    return (
        <div className="diagnostic-list">

            <div className='diagnostic-title'>
                <h2 >Dianostic List</h2>
            </div>
            <table class="diagnostic-table">
                <thead className='thead-design'>
                    <tr>
                        <th>Problem/Diagnosis</th>
                        <th>Description</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody className='scrollbehaviour'>
                    {chartData.map((diagnostic, index) => (
                        <tr key={index}>
                            <td>{diagnostic.problem}</td>
                            <td>{diagnostic.description}</td>
                            <td>{diagnostic.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>


    );
};

export default DiagnosticList;