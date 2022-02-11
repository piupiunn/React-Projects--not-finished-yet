import React, { useState } from "react";

export default function NewEventForm({ addEvent }) {
  const [eventTitle, setEventTitle] = useState("");

  const [date, setDate] = useState("");

  const [location, setLocation] = useState("mars");

  const resetForm = () => {
    setEventTitle("");
    setDate("");
    setLocation("mars");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const event = {
      title: eventTitle,
      date: date,
      location: location,
      id: Math.floor(Math.random() * 10000),
    };

    addEvent(event);
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Event Title:</span>
        <input
          type="text"
          onChange={(e) => setEventTitle(e.target.value)}
          value={eventTitle}
        />
      </label>

      <label>
        <span>Date:</span>
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </label>
      <label>
        <span>Event Location:</span>
        <select onChange={(e) => setLocation(e.target.value)}>
          <option value="mars">Mars</option>
          <option value="jupiter">Jupiter</option>
          <option value="saturn">Saturn</option>
        </select>
      </label>

      <button onClick={resetForm}>Reset form</button>
      <button>Submit</button>
    </form>
  );
}
