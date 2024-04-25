import React from "react";
import FullCalendar from "@fullcalendar/react";
import "../sass/colors.scss";
import "../sass/style.scss";
// import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

export function Calendario() {
  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "",
          center: "title",
          end: "prev today next",
        }}
      />
    </div>
  );
}
