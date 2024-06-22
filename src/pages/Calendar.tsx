import { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { AddEventModal } from '../components/calendar_components/CustomModal';
import { EventInput } from '@fullcalendar/core/index.js';
import { EventApi } from '@fullcalendar/core';
import './Calendar.scss';

export function Calendar() {
  const today = new Date();
  const formattedToday = today.toISOString().split('T')[0];
  const [isOpen, setIsOpen] = useState(false);
  const [events, setEvents] = useState<EventInput[]>([
    {
      title: ' Gachas con Arándanos',
      date: formattedToday,
      fixed: true,
    },
    {
      title: ' Lasaña',
      date: formattedToday,
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

  const handleEventClick = (info: { event: EventApi }) => {
    const clickedEvent = events.find(event => event.title === info.event.title && event.date === info.event.startStr);
    if (clickedEvent) {
      setSelectedEvent(clickedEvent);
      setIsOpen(true);
    }
  };

  const handleModalSubmit = (newTitle: string) => {
    if (selectedEvent) {
      const updatedEvents = events.map(event => (event === selectedEvent ? { ...event, title: newTitle } : event));
      setEvents(updatedEvents);
    } else {
      const newEvent: EventInput = {
        title: newTitle,
        date: formattedToday,
        fixed: true,
      };

      const sameDayEvents = events.filter(event => event.date === newEvent.date);
      if (sameDayEvents.length < 3) {
        setEvents(prevEvents => [...prevEvents, newEvent]);
      } else {
        alert('Only three meals for day');
      }
    }
    handleModalClose();
  };

  const handleDeleteEvent = () => {
    if (selectedEvent) {
      const updatedEvents = events.filter(event => event !== selectedEvent);
      setEvents(updatedEvents);
      handleModalClose();
    }
  };

  return (
    <>
      <h1 className="font-title-sections">¿Qué estás planeando para esta semana?</h1>
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
          displayEventTime={false}
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
