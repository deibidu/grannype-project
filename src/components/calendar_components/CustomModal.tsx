import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { EventInput } from "@fullcalendar/core/index.js";

interface AddEventModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddEvent: (newTitle: string) => void;
  onDeleteEvent: (event: EventInput) => void;
  selectedEvent: EventInput | null;
}

export function AddEventModal({
  isOpen,
  onClose,
  onAddEvent,
  onDeleteEvent,
  selectedEvent,
}: AddEventModalProps) {
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    if (selectedEvent) {
      setTitle(selectedEvent.title || "");
    }
  }, [selectedEvent]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title) {
      alert("Por favor ingrese el título del evento");
      return;
    }

    const titleToAdd: string = selectedEvent ? title : title;
    onAddEvent(titleToAdd);
    handleCloseModal();
  };

  const handleDelete = () => {
    if (selectedEvent) {
      onDeleteEvent(selectedEvent);
      handleCloseModal();
    }
  };

  const handleCloseModal = () => {
    setTitle("");
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={handleCloseModal}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título del Evento"
        />
        <div>
          <button type="submit">Aceptar</button>
          {selectedEvent && (
            <button type="button" onClick={handleDelete}>
              Eliminar
            </button>
          )}
          <button type="button" onClick={handleCloseModal}>
            Cancelar
          </button>
        </div>
      </form>
    </Modal>
  );
}
