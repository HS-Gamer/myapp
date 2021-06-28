import React from 'react';

import Sidebar from '../Sidebar/index'
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  WeekView,
  Appointments,
  AppointmentTooltip,
  AppointmentForm,
  DateNavigator,
  TodayButton,
  Toolbar,
  ViewSwitcher,
} from '@devexpress/dx-react-scheduler-material-ui';



const currentDate = '2021-06-27';
const schedulerData = [
  
  { startDate: '2021-06-27T10:00', endDate: '2021-06-27T11:00', title: 'Go to a gym' },
];

function Home() {
  
    return (
        <div className="flex-container">
            <div className="flex-child magenta">
                <Sidebar/>
            </div>
            <div className="flex-child green">
            <Paper>
        <Scheduler
          data={schedulerData}
          height={550}
        >
          <ViewState
            defaultCurrentDate="2018-07-25"
            defaultCurrentViewName="Week"
          />

          <DayView
            startDayHour={9}
            endDayHour={18}
          />
          <WeekView
            startDayHour={10}
            endDayHour={19}
          />

          <Toolbar />
          <DateNavigator />
          <TodayButton />
          <ViewSwitcher />
          <Appointments />
          <Appointments />
          <AppointmentTooltip
            showCloseButton
            showOpenButton
          />
          <AppointmentForm
            
          />
        </Scheduler>
      </Paper>
        </div>
      </div>
    );
    
}

export default Home
