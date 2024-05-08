import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { v4 as uuid } from "uuid";
import ReactModal from "react-modal";

type Event = {
  title: string;
  id: string;
  start: Date;
  end: Date;
};

const EventItem = ({ event }: { event: Pick<Event, `title`> }) => {
  return (
    <div>
      <p>{event.title}</p>
    </div>
  );
};

export const Calendario = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [start, setStart] = useState<Date | null>(null);
  const [end, setEnd] = useState<Date | null>(null);

  const handleSelect = (info: Pick<Event, `start` | `end`>) => {
    const { start, end } = info;
    setStart(start);
    setEnd(end);
    setModalIsOpen(true);
  };

  const handleSubmit = () => {
    if (title && start && end) {
      setEvents([
        ...events,
        {
          start,
          end,
          title,
          id: uuid(),
        },
      ]);
      setModalIsOpen(false);
      setTitle("");
      setStart(null);
      setEnd(null);
    }
  };
  return (
    <div>
      <FullCalendar
        editable
        selectable
        events={events}
        select={handleSelect}
        headerToolbar={{
          start: "today prev next",
          center: "title",
          end: "dayGridMonth dayGridWeek dayGridDay",
        }}
        eventContent={(arg) => <EventItem event={arg.event} />}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
      />
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Add Event"
      >
        <input
          type="text"
          placeholder="Event Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button> {}
        <button onClick={() => setModalIsOpen(false)}>Cancel</button> {}
      </ReactModal>
    </div>
  );
};
