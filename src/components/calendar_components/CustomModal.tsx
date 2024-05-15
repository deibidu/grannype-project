import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { EventInput } from '@fullcalendar/core/index.js';
import '../../pages/Calendar.scss';
import '../../sass/fonts.scss';

interface AddEventModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddEvent: (newTitle: string) => void;
  onDeleteEvent: (event: EventInput) => void;
  selectedEvent: EventInput | null;
}

export function AddEventModal({ isOpen, onClose, onAddEvent, onDeleteEvent, selectedEvent }: AddEventModalProps) {
  const [title, setTitle] = useState<string>('');

  useEffect(() => {
    if (selectedEvent) {
      setTitle(selectedEvent.title || '');
    }
  }, [selectedEvent]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title) {
      alert('Please insert your meal');
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
    setTitle('');
    onClose();
  };

  return (
    <Modal className={'modal modal-Calendar'} isOpen={isOpen} onRequestClose={handleCloseModal}>
      <div className="modal-header">
        <h3>Add Meal</h3>
      </div>
      <form className={'modal-content'} onSubmit={handleSubmit}>
        <input
          className="input-modal"
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Meal Title"
        />
        <div className="modal-btn-div">
          <button className="button__primary-blue" type="submit">
            Accept
          </button>
          {selectedEvent && (
            <button className="button__primary-blue" type="button" onClick={handleDelete}>
              Delete
            </button>
          )}
          <button className="button__primary-blue" type="button" onClick={handleCloseModal}>
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
}
