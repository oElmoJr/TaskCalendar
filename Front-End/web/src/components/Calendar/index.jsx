import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Container } from './styles';

export default function FullCalendarApp({tasks}) {
    return (
        <>
          <Container>
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              events={tasks}
              nowIndicator
              dateClick={(e) => console.log(e.dateStr)}
              eventClick={(e) => console.log(e.event.id)}
              height="800px"
              eventColor="#03be7a"
              
              customButtons={{
                  new: {
                  text: 'new task',
                  click: () => console.log('new event'),
                  },
              }}
              
              headerToolbar={{
                  center: 'dayGridMonth,timeGridWeek,timeGridDay new',
              }}
            />
          </Container>
        </>
      );
};