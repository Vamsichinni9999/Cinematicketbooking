import React from 'react';
import './Seat.css'; // Import the CSS file for seat styles

const Seat = ({ seat, onSeatClick }) => {
  // Define seat color based on booking status and seat type
  let seatColor;
  if (seat.isBooked) {
    seatColor = 'red'; // Color for booked seats
  } else if (seat.seatNumber >= 41 && seat.seatNumber <= 85) {
    seatColor = 'green';
    // Color for premium seats
  } else {
    seatColor = 'green'; // Color for available seats
  }

  return (
    <div
      className={`seat ${seat.isBooked ? 'booked' : seat.seatNumber > 60 && seat.seatNumber <= 85 ? 'premium' : 'available'}`}
      
      role="button"
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === 'Enter' && !seat.isBooked) {
          onSeatClick(seat.seatNumber);
        }
      }}
      aria-label={`Seat ${seat.seatNumber} is ${seat.isBooked ? 'booked' : 'available'}`}
      style={{ backgroundColor: seatColor }} // Set background color based on conditions
    >
      <div className="seat-number">{seat.seatNumber}</div>
    </div>
  );
};

export default Seat;
