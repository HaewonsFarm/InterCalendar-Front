// CustomWeekView.js
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { WeekView } from '@devexpress/dx-react-scheduler-material-ui';

const PREFIX = 'CustomWeekView';
const classes = {
  todayCell: `${PREFIX}-todayCell`,
  today: `${PREFIX}-today`,
};

const StyledWeekViewTimeTableCell = styled(WeekView.TimeTableCell)(({ theme }) => ({
  [`&.${classes.todayCell}`]: {
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  },
  [`&.${classes.today}`]: {
    color: '#678d9a',
  },
}));

export const CustomTimeTableCell = (props) => {
  const { startDate } = props;
  const isToday = new Date().toDateString() === new Date(startDate).toDateString();
  return (
    <StyledWeekViewTimeTableCell
      {...props}
      className={isToday ? classes.today : undefined}
    />
  );
};