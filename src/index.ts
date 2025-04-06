import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';

window.Webflow ||= [];
window.Webflow.push(() => {
  console.log('webflow is ready!');

  const calendarElement = document.querySelector<HTMLElement>('[data-element="calendar"]');
  if (!calendarElement) return;

  const calendar = new Calendar(calendarElement, {
    plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today', // add color here
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,listWeek', // add color here
    },
    events: [
      {
        title: 'WoM Retreat',
        start: '2025-04-21',
        end: '2025-04-30',
        color: '#FA0985',
      },
      {
        title: 'WoM Site Launch',
        start: '2025-04-20T13:00',
        end: '2025-04-20T23:00',
        color: '#FA0985',
      },
      {
        title: 'Yoga Retreat',
        start: '2025-04-07',
        end: '2025-04-10',
        color: '#DCB684',
      },
      {
        title: 'Health Clinic',
        start: '2025-04-15T12:00',
        end: '2025-04-15T23:00',
        color: '#2F5C18',
      },
      {
        title: 'Death Cafe',
        start: '2025-04-15T16:00',
        end: '2025-04-15T18:00',
        color: '#B7CAE4',
      },

      {
        title: 'Tobacco Ceremony',
        start: '2025-04-18T14:00',
        end: '2025-04-18T20:00',
        color: '#B7CAE4',
      },
    ],
  });

  calendar.render();
});
