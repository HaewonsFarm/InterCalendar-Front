import { useState, useEffect } from "react";
import LabelWithHighlight from "../components/LabelWithHighlight";
import "../styles/pages/CreateGroupPage.scss";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const CreateGroupPage = () => {
  const nav = useNavigate();
  const userName = useSelector((state) => state.userInfo.userName);
  const [groupName, setGroupName] = useState("Enter Group Name");
  // useEffect(() => {
  //   console.log(groupName);
  // }, [groupName]);

  return (
    <div className="create-group-page">
      <div className="create-group-page-scaffold">
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
        <div className="group-content-scaffold">
          <div>
            <svg
              className="group-name-circle"
              width="149"
              height="149"
              viewBox="0 0 149 149"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="74.5"
                cy="74.5"
                r="74.5"
                fill="#EFBC9B"
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
                {groupName[0]}
              </text>
            </svg>
          </div>
          <div className="group-content">
            <div className="group-content-left">
              <LabelWithHighlight
                title="GroupName"
                fontSize={25}
                fontWeight={300}
                color="#EFBC9B40"
                boxh={1}
                boxw={10}
              />
              <input
                type="text"
                placeholder={groupName}
                className="group-name"
                onChange={(e) => setGroupName(e.target.value)}
              />
              <LabelWithHighlight
                title="Creator"
                fontSize={25}
                fontWeight={300}
                color="#EFBC9B40"
                boxh={1}
                boxw={10}
              />
              <p className="username">{userName}</p>
            </div>
            <div className="group-content-right">
              <LabelWithHighlight
                title="Span"
                fontSize={25}
                fontWeight={300}
                color="#EFBC9B40"
                boxh={1}
                boxw={10}
              />
              <div className="date-select">
                <input type="date" />
                <p> ~ </p>
                <input type="date" />
              </div>

              <LabelWithHighlight
                title="Time"
                fontSize={25}
                fontWeight={300}
                color="#EFBC9B40"
                boxh={1}
                boxw={10}
              />
              <div className="time-select">
                <input
                  type="number"
                  placeholder="3"
                  min="1"
                  max="10"
                  id="number-input"
                />
                <p>Hours</p>
              </div>
              <LabelWithHighlight
                title="Member Num"
                fontSize={25}
                fontWeight={300}
                color="#EFBC9B40"
                boxh={1}
                boxw={12}
              />
              <input
                type="number"
                placeholder="5"
                min="2"
                max="20"
                id="number-input"
              />
            </div>
          </div>
        </div>
        {/* <button className="create-group-button">
          <p>{"Create →"}</p>
        </button> */}
        <Link className="create-group-button" to="/waiting-room">
          <p>{"Create →"}</p>
        </Link>
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
    </div>
  );
};

export default CreateGroupPage;