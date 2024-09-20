import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Gọi API tới Express server
    fetch('http://localhost:8000/')   // ngày đẹp trời nào đó sẽ sửa proxy của cái này 
    
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}

export default App;
