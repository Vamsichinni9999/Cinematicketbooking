import React, { useState, useEffect } from 'react'; 
import SeatMap from './components/SeatMap';

const App = () => {
  const [seats, setSeats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all seats from backend
  useEffect(() => {
    const fetchSeats = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/seats');
        if (!res.ok) throw new Error('Failed to fetch seats');
        const data = await res.json();
        setSeats(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchSeats();
  }, []);

  // Handle booking logic
  const handleBooking = async (numSeats) => {
    const res = await fetch('http://localhost:5000/api/seats', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ numSeats }),
    });

    if (res.ok) {
      const bookedSeats = await res.json();
      alert(`Booked seats: ${bookedSeats.join(', ')}`);
      window.location.reload();  // Reload the page to update the seat map
    } else {
      alert('Error booking seats.');
    }
  };

  if (loading) return <div>Loading seats...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <center><h1>MOVIE TICKETS BOOKING</h1></center>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '20px 0',
      }}>
        <input 
          type="number" 
          id="numSeats" 
          min="1" 
          max="4" 
          style={{
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            marginRight: '10px',
            transition: 'border-color 0.3s ease',
          }} 
          onFocus={(e) => e.target.style.borderColor = '#007bff'}
          onBlur={(e) => e.target.style.borderColor = '#ccc'}
        />
        <button 
          onClick={() => handleBooking(document.getElementById('numSeats').value)}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
        >
          BOOK SEATS
        </button>
      </div>
      <SeatMap seats={seats} onSeatClick={handleBooking} />
    </div>
  );
};

export default App;
