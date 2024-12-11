import { useState, useEffect } from 'react';
import { fetchData } from './fetch';

const useFetchData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAndSetData = async () => {
            try {
                const fetchedData = await fetchData();

                // Check if the fetched data is an object, not an array
                if (typeof fetchedData === 'object' && !Array.isArray(fetchedData)) {
                    // Convert the object to an array
                    setData(Object.values(fetchedData));
                } else {
                    setData(fetchedData);
                }
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchAndSetData();
    }, []);
console.log('>>>>123',data)
     return { data, loading, error }; 
};

export default useFetchData;