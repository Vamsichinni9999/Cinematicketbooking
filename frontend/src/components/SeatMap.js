import React from 'react';
import Seat from './Seat';
import './SeatMap.css';

const SeatMap = ({ seats, onSeatClick }) => {
  // Separate seats based on the specified ranges
  const firstRowLeftSeats = seats.filter(seat => seat.seatNumber >= 21 && seat.seatNumber <= 40);
  const firstRowRightSeats = seats.filter(seat => seat.seatNumber >= 1 && seat.seatNumber <= 20);
  const secondRowSeats = seats.filter(seat => seat.seatNumber >= 41 && seat.seatNumber <= 85);

  return (
    <div className="cinema">
      <div className="screen">SCREEN</div>
      <div className="first-row">
        <div className="seat-column1">
  
          <div className="seat-map">
            {firstRowLeftSeats.map((seat) => (
              <Seat key={seat.seatNumber} seat={seat} onSeatClick={onSeatClick} />
            ))}
          </div>
        </div>
        <div className="seat-column2">
          
          <div className="seat-map">
            {firstRowRightSeats.map((seat) => (
              <Seat key={seat.seatNumber} seat={seat} onSeatClick={onSeatClick} />
            ))}
          </div>
        </div>
      </div>
      <div className="second-row">
        
        <div className="seat-map">
          {secondRowSeats.map((seat) => (
            <Seat key={seat.seatNumber} seat={seat} onSeatClick={onSeatClick} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeatMap;
