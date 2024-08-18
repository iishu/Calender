import React, { useState, useContext } from 'react';
import { EventContext } from '../context/EventContext';

const AddEventForm = () => {
  const { addEvent } = useContext(EventContext);
  const [event, setEvent] = useState({ title: '', date: '', category: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    addEvent(event);
    setEvent({ title: '', date: '', category: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" value={event.title} onChange={(e) => setEvent({ ...event, title: e.target.value })} placeholder="Event Title" required className="border p-2 w-full" />
      <input type="date" value={event.date} onChange={(e) => setEvent({ ...event, date: e.target.value })} required className="border p-2 w-full" />
      <select value={event.category} onChange={(e) => setEvent({ ...event, category: e.target.value })} className="border p-2 w-full">
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Event</button>
    </form>
  );
};

export default AddEventForm;
