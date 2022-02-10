import React from "react";
import { useState } from "react";
import EventList from "./EventList";
import Modal from "./input-form/components/Modal";
import NewEventForm from "./NewEventForm";

export default function Second() {
  const [showEvents, hideEvents] = useState(true);

  const [showModal, setShowModal] = useState(true);

  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event];
    });
    setShowModal(false);
  };

  const handleEvent = (id) => {
    setEvents((events) => {
      return events.filter((event) => {
        return id !== event.id;
      });
    });
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showEvents && (
        <div>
          <button onClick={() => hideEvents(false)}>Hide events</button>
        </div>
      )}

      {!showEvents && (
        <div>
          <button onClick={() => hideEvents(true)}>Show events</button>
        </div>
      )}

      {showEvents && <EventList events={events} handleEvent={handleEvent} />}

      {showModal && (
        <Modal closeModal={closeModal}>
          <NewEventForm addEvent={addEvent} />
        </Modal>
      )}
      <div>
        <button onClick={() => setShowModal(true)}>Add event</button>
      </div>
    </>
  );
}
