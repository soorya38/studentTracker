// Load Google Calendar API
function loadCalendarAPI() {
    gapi.load('client:auth2', initClient);
  }
  
  // Initialize Google API client
  function initClient() {
    gapi.client.init({
      apiKey: 'YOUR_API_KEY',
      clientId: 'YOUR_CLIENT_ID',
      discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
      scope: 'https://www.googleapis.com/auth/calendar.events.readonly'
    }).then(() => {
      gapi.auth2.getAuthInstance().signIn();
      listUpcomingEvents();
    });
  }
  
  // List upcoming events from the Google Calendar
  function listUpcomingEvents() {
    gapi.client.calendar.events.list({
      'calendarId': 'primary',
      'timeMin': (new Date()).toISOString(),
      'showDeleted': false,
      'singleEvents': true,
      'maxResults': 10,
      'orderBy': 'startTime'
    }).then(response => {
      const events = response.result.items;
      console.log('Upcoming events:', events);
      let eventContent = '';
      if (events.length > 0) {
        events.forEach(event => {
          const when = event.start.dateTime || event.start.date;
          eventContent += `<li>${event.summary} (${when})</li>`;
        });
      } else {
        eventContent = '<li>No upcoming events found.</li>';
      }
      document.getElementById('calendar-events').innerHTML = `<ul>${eventContent}</ul>`;
    });
  }
  