import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Calendar from "../components/Calendar";
import SchedulerComponent from "../components/Scheduler";
import { fetchEvents } from '../redux/actions/calendarActions';
import "../styles/pages/MainPage.scss";
// import todayAppointments from '../demo-data/today-appointment';
// ^ 백엔드 대신

const MainPage = () => {
  const dispatch = useDispatch();
  // 스토어의 상태 받아오기
  const { events, loading, error } = useSelector((state) => state.calendar);
  // 토글 버튼 만드는 데 들어가는 State
  const [showCalendar, setShowCalendar] = useState(true);
  // 컴포넌트가 마운트 될 때 이벤트를 받아옴.
  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  const toggleView = () => {
    setShowCalendar(prevShowCalendar => !prevShowCalendar);
  };

  const eventList = Array.isArray(events) && events.length > 0 ? events : [];
  // && events.length > 0 ? events : todayAppointments`
  // ^ 백엔드 대신

  return (
    <div className="scaffold">
      <SideBar />
      <div className="main-body">
        <Header />
        <div className="main-container">
          <div className="button-container">
          <button 
            className="toggle-button"
            onClick={toggleView}
          >
            {showCalendar ? 'Show Scheduler' : 'Show Calendar'}
          </button>
          </div>
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          <div className="main-calendar">
          {showCalendar ? (
            <Calendar events={eventList} />
            ) : (
            <SchedulerComponent events={eventList} />
          )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
