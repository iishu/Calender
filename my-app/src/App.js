import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CalendarPage from './pages/CalendarPage';
import EventPage from './pages/EventPage';
import { EventProvider } from './context/EventContext';

function App() {
  return (
    <EventProvider>
      <Router>
        <Routes>
          <Route path="/" element={<CalendarPage />} />
          <Route path="/event/:id" element={<EventPage />} />
        </Routes>
      </Router>
    </EventProvider>
  );
}

export default App;
