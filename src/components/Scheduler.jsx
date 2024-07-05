// Demo.js
import * as React from 'react';
import Paper from '@mui/material/Paper';
import { ThemeProvider } from '@mui/material/styles';
import { Scheduler, WeekView, Appointments } from '@devexpress/dx-react-scheduler-material-ui';
import appointments from '../demo-data/today-appointment';
import theme from './theme';
import { CustomAppointment } from './CustomAppointment';
import { CustomTimeTableCell } from './CustomWeekView';

const Demo = () => {
  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <Scheduler data={appointments} height={660}>
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

export default Demo;