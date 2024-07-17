import * as React from 'react';
import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  MonthView,
  Appointments,
  DateNavigator,
  TodayButton,
  Toolbar,
} from '@devexpress/dx-react-scheduler-material-ui';
import { styled, ThemeProvider } from '@mui/material/styles';
import theme from './theme';

const PREFIX = 'Demo';

const classes = {
  appointment: `${PREFIX}-appointment`,
};

const StyledAppointmentsAppointment = styled(Appointments.Appointment)(({ theme }) => ({
  [`&.${classes.appointment}`]: {
    backgroundColor: theme.palette.appointment.main,
    '&:hover': {
      backgroundColor: theme.palette.appointment.dark,
    },
  },
}));

const StyledTodayButton = styled(TodayButton.Button)(({ theme }) => ({
  color: theme.palette.custom.main,
  borderColor: theme.palette.custom.main,
}));

const StyledDateNavigatorOpenButton = styled(DateNavigator.OpenButton)(({ theme }) => ({
  color: theme.palette.custom.main,
  borderColor: theme.palette.custom.main,
}));

const StyledDateNavigatorNavigationButton = styled(DateNavigator.NavigationButton)(({ theme }) => ({
  color: theme.palette.custom.main,
  borderColor: theme.palette.custom.main,
}));

const Calendar = ({ events = [], onEventClick }) => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    if (Array.isArray(events) && events.length > 0) {
      const formattedEvents = events.map(event => ({
        ...event,
        startDate: new Date(event.startDate),
        endDate: new Date(event.endDate),
      }));
      setData(formattedEvents);
    }
  }, [events]);

  const handleAppointmentClick = ({ data }) => {
    if (onEventClick) {
      onEventClick(data.id);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <Scheduler data={data}>
          <ViewState defaultCurrentDate={new Date().toISOString().split('T')[0]} />
          <MonthView />
          <Toolbar />
          <DateNavigator
            openButtonComponent={(props) => (
              <StyledDateNavigatorOpenButton {...props} />
            )}
            navigationButtonComponent={(props) => (
              <StyledDateNavigatorNavigationButton {...props} />
            )}
          />
          <TodayButton buttonComponent={(props) => (
            <StyledTodayButton {...props} />
          )} />
          <Appointments appointmentComponent={(props) => (
            <StyledAppointmentsAppointment 
            {...props} 
            className={classes.appointment}
            onClick={() => handleAppointmentClick(props)}
            />
          )} />
        </Scheduler>
      </Paper>
    </ThemeProvider>
  );
};

export default Calendar;

