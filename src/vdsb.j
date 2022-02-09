import React from "react";
import { useState } from "react";
function Second() {
  const [showEvents, setShowEvents] = useState(true);

  const [events, setEvents] = useState([
    { title: "Ay'a yolculuk", id: 1 },
    { title: "Mars'a yolculuk", id: 2 },
    { title: "Jupiter'e yolculuk", id: 3 },
  ]);

  const eventHandler = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      });
    });
  };

  return (
    <>
      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>Hide events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>Show events</button>
        </div>
      )}

      {showEvents && (
        <div>
          {events.map((event) => (
            <div key={event.id}>
              <h2>{event.title}</h2>
              <button onClick={() => eventHandler(event.id)}>
                Delete event
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Second;


import React from "react";
import { useState } from "react";
import Modal from "./input-form/components/Modal";
import Title from "./input-form/components/Title";
import Second from "./Second";

function App() {
  const [name, setName] = useState("Caner");
  const [showModal, setShowModal] = useState(true);

  const handleName = () => {
    setName("Usul");
  };

  const closeModel = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Title title="Büyük Patlama" subtitle="Başlangıç" />
      <Title title="Akıllı Yaşam Formları" subtitle="İnsan" />
      <Second />
      <h2>Selam {name}</h2>
      <button onClick={handleName}>İsmi değiştir</button>
      {showModal && (
        <Modal closeModel={closeModel}>
          <h2>%10 İndirim!!!</h2>
          <p>Kodu kullan..</p>
        </Modal>
      )}
      {/* <Modal>
        <h2>Başlık</h2>
        <p>Yazılar</p>
        <a href="#">find out more..</a>
      </Modal> */}
      ;
    </div>
  );
}

export default App;


import "./Modal.css";

export default function Modal({ children, closeModel }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        {children}
        <button onClick={closeModel}>Close</button>
      </div>
    </div>
  );
}


import React from "react";

export default function Title({ title, subtitle }) {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
}
