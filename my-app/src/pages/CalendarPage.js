import React, { useState } from 'react';
import CalendarView from '../components/CalendarView';
import EventForm from '../components/EventForm';
import EventDetailsModal from '../components/EventDetailsModal';
import { useEvent } from '../hooks/useEvent';

function CalendarPage() {
  const { events } = useEvent();
  const [selectedEventId, setSelectedEventId] = useState(null);
  const [isAdding, setIsAdding] = useState(false);

  return (
    <div>
      <button onClick={() => setIsAdding(true)}>Add Event</button>
      <CalendarView events={events} />
      {isAdding && <EventForm onSave={() => setIsAdding(false)} />}
      {selectedEventId && (
        <EventDetailsModal
          eventId={selectedEventId}
          onClose={() => setSelectedEventId(null)}
        />
      )}
    </div>
  );
}

export default CalendarPage;
