import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Calendar from "../components/Calendar";
import SchedulerComponent from "../components/Scheduler";
import { fetchEvents, createSchedule } from "../redux/calendarSlice";
import { fetchGroups } from "../redux/groupSlice";
import "../styles/pages/MainPage.scss";
// import todayAppointments from '../demo-data/today-appointment';
// ^ 백엔드 대신

const MainPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // 스토어의 상태 받아오기
  const { events, loading, error } = useSelector((state) => state.calendar);
  // 토글 버튼 만드는 데 들어가는 State
  const { groups } = useSelector((state) => state.group);
  const [showCalendar, setShowCalendar] = useState(true);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [scheduleData, setScheduleData] = useState({
    date: "",
    description: "",
    startTime: "",
    endTime: "",
  });

  // 컴포넌트가 마운트 될 때 이벤트를 받아옴.
  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  useEffect(() => {
    if (selectedGroup) {
      dispatch(fetchEvents(selectedGroup.id));
    }
  }, [dispatch, selectedGroup]);

  const toggleView = () => {
    setShowCalendar((prevShowCalendar) => !prevShowCalendar);
  };

  const handleChange = (e) => {
    setScheduleData({
      ...scheduleData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedGroup) {
      await dispatch(createSchedule({ id: selectedGroup.id, scheduleData }));
      dispatch(fetchEvents(selectedGroup.id));
    }
  };

  const handleEventClick = (eventId) => {
    navigate(`/crud-new-item/${eventId}`); // 클릭 시 ItemPage로 이동해야 되는데 안됨.
  };

  const eventList = Array.isArray(events) && events.length > 0 ? events : [];
  // && events.length > 0 ? events : todayAppointments`
  // ^ 백엔드 대신

  return (
    <div className="scaffold">
      <SideBar setSelectedGroup={setSelectedGroup} />
      <div className="main-body">
        <Header />
        <div className="main-container">
          <div className="button-container">
            <button className="toggle-button" onClick={toggleView}>
              {showCalendar ? "Show Scheduler" : "Show Calendar"}
            </button>
          </div>
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          <div className="main-calendar">
            {showCalendar ? (
              <Calendar events={eventList} onEventClick={handleEventClick} />
            ) : (
              <SchedulerComponent
                events={eventList}
                onEventClick={handleEventClick}
              />
            )}
          </div>
          {selectedGroup && (
            <div className="schedule-form">
              <h2>Create Schedule for {selectedGroup.groupName}</h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="date"
                  name="date"
                  value={scheduleData.date}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="description"
                  value={scheduleData.description}
                  onChange={handleChange}
                  placeholder="Description"
                  required
                />
                <input
                  type="time"
                  name="startTime"
                  value={scheduleData.startTime}
                  onChange={handleChange}
                  required
                />
                <input
                  type="time"
                  name="endTime"
                  value={scheduleData.endTime}
                  onChange={handleChange}
                  required
                />
                <button type="submit">Create Schedule</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
