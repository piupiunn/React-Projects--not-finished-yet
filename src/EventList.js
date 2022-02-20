import React from "react";

import "./EventList.css";

export default function EventList({ events, handleEvent }) {
  return (
    <div className="event-list">
      {events.map((event) => (
        <div className="event-list-card">
          <h2>{event.title}</h2>
          <p>
            {event.location} - {event.date}
          </p>
          <button onClick={() => handleEvent(event.id)}>Delete event</button>
        </div>
      ))}
    </div>
  );
}
