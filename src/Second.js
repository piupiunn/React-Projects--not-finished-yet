import React from "react";
import { useState } from "react";
import Modal from "./input-form/components/Modal";

export default function Second() {
  const [showEvents, hideEvents] = useState(true);

  const [showModal, setShowModal] = useState(true);

  const [events, setEvents] = useState([
    { title: "Aya yolculuk", id: 1 },
    { title: "Marsa yolculuk", id: 2 },
    { title: "Jupitere yolculuk", id: 3 },
  ]);

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

      <div>
        {showEvents &&
          events.map((event) => (
            <div key={event.key}>
              <h2>{event.title}</h2>
              <button onClick={() => handleEvent(event.id)}>
                Delete event
              </button>
            </div>
          ))}

        {showModal && (
          <Modal closeModal={closeModal}>
            <h2>%10 İndirim!!!</h2>
            <p>Kodu kullan..</p>
          </Modal>
        )}
        <div>
          <button onClick={() => setShowModal(true)}>Show modal</button>
        </div>
      </div>
    </>
  );
}
