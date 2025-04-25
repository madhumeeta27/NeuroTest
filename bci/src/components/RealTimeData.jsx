import React, { useEffect, useState } from 'react';

const RealTimeData = () => {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState('Waiting for data...'); // New state for status message

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080');

    socket.onopen = () => {
      console.log('Connected to WebSocket server');
    };

    socket.onmessage = (event) => {
      const incomingData = event.data;

      console.log('Received data:', incomingData);

      // Check for empty or specific error messages
      if (incomingData === 'Empty device list') {
        setStatus('No BCI device connected');
        setData(null); // Clear data if no device is found
      } else {
        setStatus('Receiving data...');
        try {
          const parsedData = JSON.parse(incomingData);
          setData(parsedData); // Update state with new data
        } catch (error) {
          console.error('Error parsing data:', error);
        }
      }
    };

    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div>
      <h1>Real-Time Brainwave Data</h1>
      <p>{status}</p>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre> // Display the data in JSON format
      ) : (
        <p>No data available</p> // This message will show if no data is present
      )}
    </div>
  );
};

export default RealTimeData;
