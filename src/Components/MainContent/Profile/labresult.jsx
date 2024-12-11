import React from 'react';
import useFetchData from '../../../axiosfetch/data';


const LabResults = () => {

    const { data, loading, error } = useFetchData();
    return (
        <div className="diagnostic-list">

            <div>
                <h2 className='diagnostic-title'>Dianostic List</h2>
            </div>
            <table class="diagnostic-table">
 {/*                <thead className='thead-design'>
                    <tr>
                        <th>Problem/Diagnosis</th>
                        <th>Description</th>
                    </tr>
                </thead> */}
                <tbody className='scrollbehaviour'>
                    {data[0]?.lab_results.map((diagnostic, index) => (
                        <tr key={index}>
                            <td>{diagnostic}</td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>


    );
};

export default LabResults;