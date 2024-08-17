import React from 'react';
import { useParams } from 'react-router-dom';
import { useEvent } from '../hooks/useEvent';

function EventPage() {
  const { id } = useParams();
  const { events } = useEvent();
  const event = events.find(event => event.id === id);

  if (!event) return <p>Event not found</p>;

  return (
    <div>
      <h1>{event.title}</h1>
      <p>{event.date}</p>
    </div>
  );
}

export default EventPage;
