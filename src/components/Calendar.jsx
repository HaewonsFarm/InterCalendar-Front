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
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import theme from './theme';
import { appointments } from '../demo-data/month-appointments';

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

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: appointments,
    };
  }

  render() {
    const { data } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <Paper>
          <Scheduler data={data}>
            <ViewState defaultCurrentDate="2018-07-27" />
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
              <StyledAppointmentsAppointment {...props} className={classes.appointment} />
            )} />
          </Scheduler>
        </Paper>
      </ThemeProvider>
    );
  }
}