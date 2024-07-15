import { useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import "../styles/pages/WaitingPage.scss";
import LabelWithHighlight from "../components/LabelWithHighlight";
import { useSelector } from "react-redux";
import { BACKEND_ENDPOINT } from "../store/config/configSlice";

// const BACKEND_ENDPOINT = 'http://12.235.124.214';

const WaitingPage = () => {
  const nav = useNavigate();
  const [clicksLeft, setClicksLeft] = useState(5);
  const groupId = 'group_one';  // 실제 그룹의 ID 대체

  useEffect(() => {
    const fetchClicksLeft = async () => {
      try {
        const response = await axios.get(`${BACKEND_ENDPOINT}/api/group/${groupId}/clicks-left`);
      } catch (error) {
        console.error("Failed to fetch click left", error);
      }
    };

    fetchClicksLeft();
  }, [groupId]);

  const handleClick = async () => {
    if (clicksLeft > 0) {
      try {
        const newClicksLeft = clicksLeft - 1;
        setClicksLeft(newClicksLeft);
        await axios.post(`${BACKEND_ENDPOINT}/api/group/${groupId}/click`, {clicksLeft: newClicksLeft});

      } catch (error) {
        console.error("Failed to update click Left", error);
      }
    }
  };

  if (clicksLeft == null) {
    return <p>Loading...</p>
  }

  return clicksLeft > 0 ? (
    <>
      <div className="waiting-page-scaffold">
        <button className="back-button" onClick={() => nav(-1)}>
          <svg
            width="30"
            height="20"
            viewBox="0 0 30 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="8.73737"
              width="12.3565"
              height="3.63836"
              rx="1.81918"
              transform="rotate(-45 0 8.73737)"
              fill="black"
            />
            <rect
              x="8.7373"
              y="19.3101"
              width="12.3565"
              height="3.63836"
              rx="1.81918"
              transform="rotate(-135 8.7373 19.3101)"
              fill="black"
            />
            <rect y="8.00006" width="30" height="4" rx="2" fill="black" />
          </svg>
        </button>
        <div className="waiting-content-scaffold">
          <LabelWithHighlight
            title="Link"
            fontSize={40}
            fontWeight={400}
            color="#EFBC9B40"
            boxh={1.3}
            boxw={10}
          />
          <a href={`http://www.intercalendar.com/g/${groupId}`}>www.intercalendar.com/g/group_one</a>
          <svg
            className="user-profile-circle"
            width="149"
            height="149"
            viewBox="0 0 149 149"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleClick}
          >
            <circle
              cx="74.5"
              cy="74.5"
              r="74.5"
              fill="#8DECB4"
              fillOpacity="0.75"
            />
            <text
              x="74.5"
              y="95"
              fontSize="50"
              fontWeight="400"
              textAnchor="middle"
              fill="black"
            >
              {clicksLeft}
            </text>
          </svg>
          <p>{clicksLeft} more people/person to press the button!</p>
        </div>
      </div>
      <div className="background">
        <svg
          className="circle one"
          width="78"
          height="78"
          viewBox="0 0 78 78"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="39" cy="39" r="39" fill="#F8F6E3" />
        </svg>
        <svg
          className="circle two"
          width="155"
          height="155"
          viewBox="0 0 155 155"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="77.5" cy="77.5" r="77.5" fill="#F8F6E3" />
        </svg>
      </div>
    </>
  ) : (
    <Navigate to={`/group-page/${groupId}`} />
  );
};

export default WaitingPage;
