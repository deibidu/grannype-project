import { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { AddEventModal } from '../components/calendar_components/CustomModal';
import { EventInput } from '@fullcalendar/core/index.js';
import './Calendar.scss';

export function Calendar() {
  const today = new Date();
  const formattedToday = today.toISOString().split('T')[0];
  const [isOpen, setIsOpen] = useState(false);
  const [events, setEvents] = useState<EventInput[]>([
    {
      title: ' Gachas con Arándanos',
      start: formattedToday,
      end: formattedToday,
      fixed: true,
    },
    {
      title: ' Lasaña',
      start: formattedToday,
      end: formattedToday,
      fixed: true,
    },
  ]);

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
      // Edita el titulo del plato creado
      const updatedEvents = events.map(event => (event === selectedEvent ? { ...event, title: newTitle } : event));
      setEvents(updatedEvents);
    } else {
      // Añadir nuevo menu
      const newEvent: EventInput = {
        title: newTitle,
        start: new Date().toISOString(),
      };
      setEvents(prevEvents => [...prevEvents, newEvent]);
    }
    handleModalClose();
  };

  const handleDeleteEvent = () => {
    if (selectedEvent) {
      // Verificar que el evento seleccionado sea válido
      const eventToRemove = selectedEvent.event;
      if (eventToRemove) {
        // Borrar el evento del calendario
        eventToRemove.remove();
        // Cerrar el modal
        handleModalClose();
      }
    }
  };

  return (
    <>
      <div className="Calendar-container">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          locale="en"
          height={800}
          events={events}
          selectable={true}
          dateClick={handleAddEvent}
          eventClick={handleEventClick}
          headerToolbar={{
            left: 'prev',
            center: 'title',
            right: 'next',
          }}
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
      </div>
    </>
  );
}
