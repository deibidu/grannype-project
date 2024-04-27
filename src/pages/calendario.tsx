import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { v4 as uuid } from "uuid";

type Event = {
  title: string;
  id: string;
  start: Date;
  end: Date;
};

export const Calendario = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const handleSelect = (info: Event) => {
    const { start, end } = info;
    const eventNamePrompt = prompt("Enter, event name");
    if (eventNamePrompt) {
      setEvents([
        ...events,
        {
          start,
          end,
          title: eventNamePrompt,
          id: uuid(),
        },
      ]);
    }
  };

  const EventItem = ({ event }: { event: Event }) => {
    return (
      <div>
        <p>{event.title}</p>
      </div>
    );
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
        initialView={"dayGridMonth, interactionPlugin"}
      />
    </div>
  );
};
