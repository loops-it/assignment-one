import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, startOfWeek, endOfWeek, isToday } from 'date-fns';
import './Appointment.css';

const Appointment = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentDate),
    end: endOfMonth(currentDate),
  });

  const firstDayOfMonth = startOfMonth(currentDate);
  const lastDayOfMonth = endOfMonth(currentDate);

  const firstDayOfWeek = startOfWeek(firstDayOfMonth);
  const lastDayOfWeek = endOfWeek(lastDayOfMonth);

  const dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const handlePrevMonth = () => {
    setCurrentDate((prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate((prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1));
  };

  const [selectedOption, setSelectedOption] = useState('');

  const handleSelect = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className='main'>
      <div className='title'>
        <p>Schedule a Demo</p>
      </div>
      <div className='inside'>
        <p>Thank you for your interest. Connect with a Rauland expert who can share more </p>
        <p>about our products and answer your questions.</p>
      </div>
      <div className="calendar-container">
        <div className='containertopic'>
          <p>Schedule a Demo</p>
        </div>
        <div className="dropdown">
          <select value={selectedOption} onChange={handleSelect}>
            <option value="" disabled hidden>Select Location</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
            <option value="option5">Option 5</option>
            <option value="option6">Option 6</option>
          </select>
        </div>
        <div className="dropdown">
          <select value={selectedOption} onChange={handleSelect}>
            <option value="" disabled hidden>Select Product</option>
            <option value="option1">Product 1</option>
            <option value="option2">Product 2</option>
          </select>
        </div>
        <div className="calendar-header">
          <button onClick={handlePrevMonth}>Previous</button>
          <span>{format(currentDate, 'MMMM yyyy')}</span>
          <button onClick={handleNextMonth}>Next</button>
        </div>
        <br></br>
        <div className="calendar-days">
          {dayNames.map((dayName) => (
            <div key={dayName} className="day-name">{dayName}</div>
          ))}
          {Array.from({ length: daysInMonth.length + firstDayOfWeek.getDay() }, (_, index) => {
            const day = index - firstDayOfWeek.getDay() + 1;
            const currentDate = new Date(firstDayOfWeek);
            currentDate.setDate(currentDate.getDate() + day);
            const isPastDay = currentDate < new Date();
            const isCurrentDay = isToday(currentDate);
            if (currentDate >= firstDayOfMonth && currentDate <= lastDayOfMonth) {
              return (
                <div key={currentDate.getTime()} className={`day ${isPastDay ? 'past-day' : ''} ${isCurrentDay ? 'current-day' : ''}`}>
                  <div className="day-number">{format(currentDate, 'dd')}</div>
                </div>
              );
            } else {
              return <div key={index}></div>;
            }
          })}
        </div>
      </div>
      <div className='time-container'>
        <div className='timetitle'>
          <p>Meeting Duration</p>
        </div>
        <div className="dropdown">
          <select value={selectedOption} onChange={handleSelect}>
            <option value="" disabled hidden>Select Duration</option>
            <option value="option1">30 mins</option>
            <option value="option2">1 hour</option>
            <option value="option3">1 hour and 30 mins</option>
          </select>
        </div>
        <div className='timeinside'>
          <p>
            Book a time that suits you.
          </p>
          <p>
            Showing times for January 30, 2024
          </p>
        </div>
        <div className='country'>
          <p>Australia / Melbourne</p>
        </div>
        <div className='timeslots'>
        <button>2:00 pm</button>
        </div>
        <div className='timeslots'>
        <button>2:15 pm</button>
        </div>
        <div className='timeslots'>
        <button>2:30 pm</button>
        </div>
        <div className='timeslots'>
        <button>2:45 pm</button>
        </div>
        <div className='timeslots'>
        <button>3:00 pm</button>
        </div>
        <div className='timeslots'>
        <button>3:15 pm</button>
        </div>
        <div className='timeslots'>
        <button>3:30 pm</button>
        </div>
        <div className='timeslots'>
        <button>3:45 pm</button>
        </div>
      </div>
      <div className='appointmentbutton'>
        <button>Send Request</button>
      </div>
    </div>
  );
};

export default Appointment;
