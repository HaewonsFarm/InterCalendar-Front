// CustomAppointment.js
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Appointments } from '@devexpress/dx-react-scheduler-material-ui';

const PREFIX = 'CustomAppointment';
const classes = {
  appointment: `${PREFIX}-appointment`,
};

const StyledAppointmentsAppointment = styled(Appointments.Appointment)(({ theme }) => ({
  [`&.${classes.appointment}`]: {
    backgroundColor: '#efbd9b',
    '&:hover': {
      backgroundColor: '#D6A788',
    },
  },
}));

export const CustomAppointment = (props) => {
  return <StyledAppointmentsAppointment className={classes.appointment} {...props} />;
};