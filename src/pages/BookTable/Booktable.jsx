import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"; // Only if using react-datepicker
import './BookTable.css';
import Swal from 'sweetalert2';

const BookTable = () => {
  const [guestCount, setGuestCount] = useState(2);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Assuming your form validation is successful
    console.log({
      guestCount,
      selectedDate: selectedDate.toLocaleDateString(),
      selectedTime,
    });
  
    Swal.fire({
      title: "Booking Confirmed!",
      text: `Guests: ${guestCount}\nDate: ${selectedDate.toLocaleDateString()}\nTime: ${selectedTime}`,
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  return (
    <div className="booking-content container mt-5 ">
      <h2 className="title text-start mb-4">BOOK A TABLE</h2>
      <form onSubmit={handleSubmit} className="p-4  ">
      <div className="row">
  {/* Guests Selection */}
  <div className="col-md-4 col-sm-12">
    <div className="form-group position-relative">
      <label htmlFor="guests">Party size</label>
      <select
        id="guests"
        className="form-control"
        value={guestCount}
        onChange={(e) => setGuestCount(e.target.value)}
      >
        {[...Array(6).keys()].map((num) => (
          <option key={num + 1} value={num + 1}>
            {`${num + 1} guest${num + 1 > 1 ? "s" : ""}`}
          </option>
        ))}
      </select>
      <i className="bx bx-chevron-down"></i>
    </div>
  </div>

  {/* Date Picker */}
  <div className="col-md-4 col-sm-12">
    <div className="form-group position-relative">
      <label htmlFor="date">Date</label>
      <DatePicker
        id="date"
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        className="form-control"
        dateFormat="MMMM d, yyyy"
      />
      <i className="bx bx-calendar-alt"></i>
    </div>
  </div>

  {/* Time Picker */}
  <div className="col-md-4 col-sm-12">
    <div className="form-group position-relative">
      <label htmlFor="time">Time</label>
      <select
        id="time"
        className="form-control"
        value={selectedTime}
        onChange={(e) => setSelectedTime(e.target.value)}
      >
        {Array.from({ length: 16 }, (_, i) => {
          const hour = Math.floor((240 + i * 30) / 60);
          const minutes = (i * 30) % 60;
          const period = hour >= 12 ? "PM" : "AM";
          const formattedHour = hour > 12 ? hour - 12 : hour;
          const timeString = `${formattedHour}:${minutes === 0 ? "00" : minutes} ${period}`;
          return (
            <option key={timeString} value={timeString}>
              {timeString}
            </option>
          );
        })}
      </select>
      <i className="bx bx-chevron-down"></i>
    </div>
  </div>
</div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary btn-block mt-3">
          BOOK NOW
        </button>
      </form>
    </div>
  );
};

export default BookTable;
