import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';

import type { Event } from './types';

window.Webflow ||= [];
window.Webflow.push(() => {
  // step 1. run pnpm i
  // step 2. http://localhost:3000/index.js
  // step 3. console.log('webflow is ready!');
  // left off on 38:31 of https://www.youtube.com/watch?v=1nr9tanF2Rs
  const calendarElement = document.querySelector<HTMLDivElement>('[data-element="calendar"]');

  // eslint-disable-next-line no-console

  if (!calendarElement) return;

  const getEvents = (): Event[] => {
    const scripts = document.querySelectorAll<HTMLScriptElement>('[data-element="event-data"]');
    const startTimes = document.querySelectorAll<HTMLDivElement>('[data-element="start-time"]');
    const endTimes = document.querySelectorAll<HTMLDivElement>('[data-element="end-time"]');

    const events = [...scripts].map((script) => {
      const event: Event = JSON.parse(script.textContent!);
      event.start = new Date(event.start);
      event.end = new Date(event.end);

      return event;
    });

    return events;
  };
  const events = getEvents();

  const calendar = new Calendar(calendarElement, {
    plugins: [dayGridPlugin, listPlugin],
    initialView: 'dayGridMonth',
    displayEventTime: false,
    headerToolbar: {
      left: 'prev,next today', // add color here
      center: 'title',
      right: 'dayGridMonth,listWeek', // add color here
    },
    events,
    eventClick(data) {
      window.location.href = `/${data.event.url}`;
    },
  });

  calendar.render();
});
