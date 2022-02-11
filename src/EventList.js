import React from "react";

export default function EventList({ events, handleEvent }) {
  return (
    <div>
      {events.map((event) => (
        <div key={event.key}>
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
