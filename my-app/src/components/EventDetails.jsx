import React from 'react';
import { useEvent } from '../hooks/useEvent';
import '../index.css';

function EventDetailsModal({ eventId, onClose }) {
  const { events, deleteEvent } = useEvent();
  const event = events.find(event => event.id === eventId);

  if (!event) return null;

  const handleDelete = () => {
    deleteEvent(event.id);
    onClose();
  };

  return (
    <div className="modal">
      <h2>{event.title}</h2>
      <p>{event.date}</p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default EventDetailsModal;
