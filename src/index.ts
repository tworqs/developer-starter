import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';

import type { Event } from './types';

window.Webflow ||= [];
window.Webflow.push(() => {
  // step 1. run pnpm i
  // step 2. http://localhost:3000/index.js
  // step 3. console.log('webflow is ready!');
  // left off on 38:31 of https://www.youtube.com/watch?v=1nr9tanF2Rs

  const events = getEvents();

  const calendarElement = document.querySelector<HTMLDivElement>('[data-element="calendar"]');
  if (!calendarElement) return;

  const calendar = new Calendar(calendarElement, {
    plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today', // add color here
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,listWeek', // add color here
    },
    events,
    eventClick(data) {
      alert(`User clicked the event ${data.event.title}`);
    },
  });

  calendar.render();
});

const getEvents = (): Event[] => {
  const scripts = document.querySelectorAll<HTMLScriptElement>('[data-element="event-data"]');
  const events = [...scripts].map((script) => {
    const event: Event = JSON.parse(script.textContent!);
    event.start = new Date(event.start);
    event.end = new Date(event.end);

    return event;
  });

  return events;
};
