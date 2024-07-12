import * as React from 'react';
import Paper from '@mui/material/Paper';
import { ThemeProvider } from '@mui/material/styles';
import { Scheduler, WeekView, Appointments } from '@devexpress/dx-react-scheduler-material-ui';
import theme from './theme';
import { CustomAppointment } from './CustomAppointment';
import { CustomTimeTableCell } from './CustomWeekView';
import todayAppointments from '../demo-data/today-appointment'; // 기본 데이터 가져오기

const SchedulerComponent = ({ events = [] }) => {
  // const eventList = Array.isArray(events) && events.length > 0 ? events : [todayAppointments];
  // ^ 백엔드 대신

  const eventList = Array.isArray(events) && events.length > 0 ? events : [];

  const formattedEvents = eventList.map(event => ({
    ...event,
    startDate: new Date(event.startDate),
    endDate: new Date(event.endDate),
  }));

  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <Scheduler data={formattedEvents} height={660}>
          <WeekView 
            startDayHour={9} 
            endDayHour={19} 
            timeTableCellComponent={CustomTimeTableCell} 
          />
          <Appointments appointmentComponent={CustomAppointment} />
        </Scheduler>
      </Paper>
    </ThemeProvider>
  );
};

export default SchedulerComponent;
