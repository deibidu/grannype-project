import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { AddEventModal } from "../components/calendar_components/CustomModal";
import { EventInput } from "@fullcalendar/core/index.js";

export function Calendario() {
  const [isOpen, setIsOpen] = useState(false);
  const [events, setEvents] = useState<EventInput[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<EventInput | null>(null);

  const handleAddEvent = () => {
    setIsOpen(true);
  };

  const handleModalClose = () => {
    setIsOpen(false);
    setSelectedEvent(null);
  };

  const handleEventClick = (info: EventInput) => {
    setSelectedEvent(info);
    setIsOpen(true);
  };

  const handleModalSubmit = (newTitle: string) => {
    if (selectedEvent) {
      // Editar evento existente
      const updatedEvents = events.map((event) =>
        event === selectedEvent ? { ...event, title: newTitle } : event
      );
      setEvents(updatedEvents);
    } else {
      // Añadir nuevo evento
      const newEvent: EventInput = {
        title: newTitle,
        start: new Date().toISOString(), // Ejemplo: fecha actual
      };
      setEvents((prevEvents) => [...prevEvents, newEvent]);
    }
    handleModalClose();
  };

  const handleDeleteEvent = () => {
    if (selectedEvent) {
      // Verificar que el evento seleccionado sea válido
      const eventToRemove = selectedEvent.event;
      if (eventToRemove) {
        // Remover el evento del calendario
        eventToRemove.remove();
        // Cerrar el modal
        handleModalClose();
      }
    }
  };

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        locale="es"
        height={800}
        events={events}
        selectable={true}
        dateClick={handleAddEvent}
        eventClick={handleEventClick}
      />

      {isOpen && (
        <AddEventModal
          isOpen={isOpen}
          onClose={handleModalClose}
          onAddEvent={handleModalSubmit}
          onDeleteEvent={handleDeleteEvent}
          selectedEvent={selectedEvent}
        />
      )}
    </>
  );
}
