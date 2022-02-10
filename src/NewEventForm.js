import React, { useState } from "react";

export default function NewEventForm({ addEvent }) {
  const [eventTitle, setEventTitle] = useState("");

  const [date, setDate] = useState("");

  const resetForm = () => {
    setEventTitle("");
    setDate("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const event = {
      title: eventTitle,
      date: date,
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
        <span></span>
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </label>
      <button onClick={resetForm}>Reset form</button>
      <button>Submit</button>
    </form>
  );
}
