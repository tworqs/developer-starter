import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';

window.Webflow ||= [];
window.Webflow.push(() => {
  const calendarElement = document.querySelector<HTMLElement>('[data-element="calendar"]');
  if (!calendarElement) return;

  const events = getEvents();
  console.log({ events });

  const calendar = new Calendar(calendarElement, {
    plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,listWeek',
    },
    events: [
      {
        title: 'Finsweet Stream!',
        start: '2025-02-10',
        end: '2025-02-20',
      },
      {
        title: 'Finsweet Party!',
        start: '2025-02-15',
      },
      {
        title: 'my Stream!',
        start: '2025-02-18',
      },
    ],
  });

  calendar.render();
});

const getEvents = () => {
  const scripts = document.querySelectorAll<HTMLScriptElement>('[data-element="event-data"]');
  console.log({scripts})
const events = [...scripts].map((script)) => JSON.parse(script.textContent || '{}');

return events;
}

}