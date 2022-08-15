import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Container } from './styles';
import { useContext } from 'react';

import { TaskContext } from '../../contexts/TaskContexts';

export default function FullCalendarApp({tasks}) {

    const { handleNew, handleTask } = useContext(TaskContext)

    return (
        <>
          <Container>
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              events={tasks}
              nowIndicator
              eventClick={(e) => handleTask(tasks, e.event.id)}
              height="800px"
              eventColor="#03be7a"
              
              customButtons={{
                  new: {
                  text: 'new task',
                  click: handleNew,
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