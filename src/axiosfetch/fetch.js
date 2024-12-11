export const fetchData = async () => {
    try {
        const response = await fetch('https://fedskillstest.coalitiontechnologies.workers.dev', {
            headers: {
                'Authorization': `Basic ${btoa('coalition:skills-test')}`,
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error ${response.status}`);
        }

        const data = await response.json();
        const filteredData = data.filter(item => item.name === 'Jessica Taylor');
        console.log('>>>>>', data);
        return filteredData;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};