import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';

window.Webflow ||= [];
window.Webflow.push(() => {
  const calendarElement = document.querySelector<HTMLElement>('[data-element="calendar"]');
  if (!calendarElement) return;

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
        title: 'WoM Retreat',
        start: '2025-02-21',
        end: '2025-03-03',
        color: 'orange',
      },
      {
        title: 'Yoga Retreat',
        start: '2025-02-07',
        end: '2025-02-10',
        color: 'pink',
      },
      {
        title: 'Health Clinic',
        start: '2025-02-15T12:00',
        end: '2025-02-15T23:00',
        color: 'green',
      },
      {
        title: 'Death Cafe',
        start: '2025-02-15T16:00',
        end: '2025-02-15T18:00',
        color: 'purple',
      },

      {
        title: 'Tobacco Ceremony',
        start: '2025-02-18T14:00',
        end: '2025-02-18T20:00',
      },
    ],
  });

  calendar.render();
});
