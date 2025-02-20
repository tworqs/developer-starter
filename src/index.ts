import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  const calendarElement = document.querySelector<HTMLElement>('data-element="calendar"');
  if (!calendarElement) return;

  console.log({ calendarElement });
});
