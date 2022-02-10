import React from "react";
import { useState } from "react";

export default function title2() {
  const [eventTitle, setEventTitle] = useState("");

  const [date, setDate] = useState("");

  const resetForm = () => {
    setEventTitle("");
    setDate("");
  };
  return (
    <div>
      <form>
        <label>
          <span>Event title:</span>
          <input
            type="text"
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
          ></input>
        </label>
      </form>
      <form>
        <label>
          <span>Date:</span>
          <input
            type="date"
            input={date}
            onchange={(e) => setDate(e.target.value)}
          ></input>
        </label>
        <button onClick={resetForm}>Reset form</button>
        <button>Submit</button>
        <p>
          Title- {eventTitle} Date- {date}
        </p>
      </form>
    </div>
  );
}
