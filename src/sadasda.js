import React from "react";
import { useState } from "react";

export default function sadasda() {
  const [eventTitle, setEventTitle] = useState("");

  const [date, setDate] = useState("");

  const [location, setLocation] = useState("");

  return (
    <div>
      <form>
        <label>
          <span>Event:</span>
          <input
            type="text"
            onChange={(e) => setEventTitle(e.target.value)}
            value={eventTitle}
          ></input>
        </label>

        <label>
          <span>Location:</span>
          <select onChange={(e) => setLocation(e.target.value)}>
            <option value="mars">Mars</option>
          </select>
        </label>

        <label>
          <span>Date:</span>
          <input
            type="date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          ></input>
        </label>
        <button onClick={resetForm}>Reset Form</button>
        <button>Submit</button>
      </form>
    </div>
  );
}
