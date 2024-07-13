import "../styles/pages/GroupPage.scss";
import Header from "../components/Header";
import LabelWithHighlight from "../components/LabelWithHighlight";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchGroup, updateGroup } from '../redux/groupSlice';

const { kakao } = window;

const GroupPage = () => {
  const { groupId } = useParams();  // 루트 params에서 groupId가 얻어졌는지 추정
  const dispatch = useDispatch();
  const group = useSelector((state) => state.group.group);
  const [time, setTime] = useState('');
  const [span, setSpan] = useState({ start: '', end: '' });
  
  useEffect(() => {
    if (groupId) {
      dispatch(fetchGroup(groupId));
    }
  }, [dispatch, groupId]);

  useEffect(() => {
    if (group) {
      setTime(group.time);
      setSpan({ start: group.startDate, end: group.endDate });
    }
  }, [group]);

  const handleUpdate = () => {
    dispatch(updateGroup({ groupId, updateData: {time, startTime: span.start, endTime: span.end }}));
  };


  useEffect(() => {
    // Initialize the map after the script is loaded
    // const kakao = window.kakao;
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.4964, 126.9572),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
    const markerPosition = new kakao.maps.LatLng(37.4964, 126.9572); // 마커 위치
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, []);

  return (
    <>
      <Header />
      <div className="group-page-scaffold">
        <div className="group-page-left">
          <div className="group-info section">
            <div className="group-component name">
              <LabelWithHighlight
                title="GroupName"
                fontSize={25}
                fontWeight={300}
                color="#EFBC9B40"
                boxh={1}
                boxw={10}
              />
              <p>{group ? group.groupName : 'Loading... '}</p>
            </div>
            <div className="group-component member">
              <LabelWithHighlight
                title="Members"
                fontSize={25}
                fontWeight={300}
                color="#EFBC9B40"
                boxh={1}
                boxw={10}
              />
              <p>{group ? group.memberCount: 'Loading...'}</p>
            </div>
          </div>
          <div className="best-time best-time-section">
            <div className="label">
              <LabelWithHighlight
                title="Best Time"
                fontSize={25}
                fontWeight={400}
                color="#F8F6E3"
                boxh={1}
                boxw={10}
              />
            </div>
            <div className="best-time-show">
              {group && group.bestTimes.map((time, index) => (
                <p key={index}>{`${time.date} ${time.startTime} ~ ${time.endTime}`}</p>
              ))}
            </div>
          </div>
          <div className="time-span section">
            <div className="group-component time">
              <LabelWithHighlight
                title="Time"
                fontSize={25}
                fontWeight={300}
                color="#F8F6E3"
                boxh={1}
                boxw={10}
              />
              <div className="time-select">
                <input
                  type="number"
                  // value="3" // 이거는 그룹 데이터에 있는 time을 가지고 와야한다. 그리고 state 써서 관리
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  min="1"
                  max="10"
                  id="number-input"
                />
                <p>Hours</p>
              </div>
            </div>
            <div className="group-component span">
              <LabelWithHighlight
                title="Span"
                fontSize={25}
                fontWeight={300}
                color="#F8F6E3"
                boxh={1}
                boxw={10}
              />
              <div className="date-select">
                <input 
                type="date" 
                //value="2024-05-26" 
                value={span.start}
                onChange={(e) => setSpan({ ...span, start: e.target.value })}
                />
                {/* 이거는 state써서 관리..  */}
                <p> ~ </p>
                <input 
                type="date" 
                //value="2024-05-26" 
                value={span.end}
                onChange={(e) => setSpan({ ...span, end: e.target.value })}
                />
              </div>
            </div>
            <div className=" group-component edit-section">
              <p>Creator edit only!</p>
              <button onClick={handleUpdate}>edit</button>
            </div>
          </div>
        </div>
        <div className="group-page-right">
          <div id="map" />
          <div className="select-location">
            <svg
              width="20"
              height="22"
              viewBox="0 0 20 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 13.5981C-0.500003 12.4434 -0.5 9.55662 1.5 8.40192L15 0.607693C17 -0.547007 19.5 0.89637 19.5 3.20577V18.7942C19.5 21.1036 17 22.547 15 21.3923L1.5 13.5981Z"
                fill="#B5C0D0"
              />
            </svg>
            <p>숭실대학교</p>

            <svg
              width="20"
              height="22"
              viewBox="0 0 20 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.5 8.40193C20.5 9.55663 20.5 12.4434 18.5 13.5981L5 21.3923C3 22.547 0.5 21.1036 0.5 18.7942V3.20577C0.5 0.896367 3 -0.547005 5 0.607695L18.5 8.40193Z"
                fill="#B5C0D0"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default GroupPage;
