import React, { useState, useEffect } from 'react';

interface DownloadData {
  id: number;
  name: string;
  url: string;
}

const MockApiDownload: React.FC = () => {
  const [downloadData, setDownloadData] = useState<DownloadData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('http://localhost:3001/downloads/1')
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error('Failed to fetch download data');
        }
      })
      .then((data: DownloadData) => {
        console.log('Fetched data:', data);
        setDownloadData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching download data', error);
        setIsLoading(false);
      });
  }, []);

  const handleDownload = () => {
    if (downloadData) {
      setIsLoading(true);
      
      fetch(downloadData.url) // Fetch content from the URL
        .then((response) => {
          if (response.status === 200) {
            return response.text(); // Assuming the response is text content
          } else {
            throw new Error('Failed to fetch download data');
          }
        })
        .then((content: string) => {
          const blob = new Blob([content], { type: 'text/plain' });
          const url = URL.createObjectURL(blob);
  
          const link = document.createElement('a');
          link.href = url;
          link.download = 'downloaded-data.txt';
          link.click();
  
          URL.revokeObjectURL(url);
  
          setIsLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching download data', error);
          setIsLoading(false);
        });
    }
  };
//   const handleDownload = () => {
//     if (downloadData) {
//       const blob = new Blob([downloadData.url], { type: 'text/plain' }); // Assuming URL is the content
//       const url = URL.createObjectURL(blob);
  
//       const link = document.createElement('a');
//       link.href = url;
//       link.download = 'downloaded-data.txt';
//       link.click();
  
//       URL.revokeObjectURL(url);
//     }
//   };
  

  return (
    <div className="container">
      <header>
        <h1>Mock API Data Download</h1>
      </header>
      <main>
        {isLoading ? (
          <p>Loading download data...</p>
        ) : downloadData ? (
          <div>
            <p>Click the button to download and open in Notepad</p>
            <button onClick={handleDownload}>Download</button>
          </div>
        ) : (
          <p>No download data available.</p>
        )}
      </main>
      <footer>
        <p>&copy; 2023 Your Company</p>
      </footer>
    </div>
  );
};

export default MockApiDownload;














