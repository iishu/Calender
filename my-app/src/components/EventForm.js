import React, { useState } from 'react';
import { useEvent } from '../hooks/useEvent';
import '../index.css';

function EventForm({ event, onSave }) {
  const [title, setTitle] = useState(event?.title || '');
  const [date, setDate] = useState(event?.date || '');
  const { addEvent, editEvent } = useEvent();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = { id: event?.id || Date.now(), title, date };
    if (event) {
      editEvent(newEvent);
    } else {
      addEvent(newEvent);
    }
    onSave();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Event Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
}

export default EventForm;
