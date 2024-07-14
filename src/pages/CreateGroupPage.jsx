// src/pages/CreateGroupPage.jsx
import { useState, useEffect } from "react";
import LabelWithHighlight from "../components/LabelWithHighlight";
import "../styles/pages/CreateGroupPage.scss";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createGroup } from "../redux/groupSlice";

// 백엔드 연결 없이 "Create ->" 버튼을 누를 경우 네트워크 요청을 완료할 수 없어
// Redux thunk 작업이 실패한다. 따라서 오류 메세지가 뜬다. 
// => 코드가 잘 작동되는지 모른다.

const CreateGroupPage = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.userInfo.userName);

  const [groupName, setGroupName] = useState("");
  // useEffect(() => {
  //   console.log(groupName);
  // }, [groupName]);
  const [ startDate, setStartDate ] = useState("");
  const [ endDate, setEndDate ] = useState("");
  const [ time, setTime ] = useState(3);
  const [ memberNum, setMemberNum ] = useState(5);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const groupData = {
      groupName,
      startDate,
      endDate,
      time,
      memberNum,
    };
    
    try {
      const result = await dispatch(createGroup(groupData)).unwrap();
      if (result.status === 200) {
        nav("/waiting-room");
      } else {
        alert(result.msg || "Failed to create group");
      }
    } catch (error) {
      alert(error.message || "Failed to create group");
    }
  };


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
        <form className="group-content-scaffold" onSubmit={handleSubmit}>
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
                placeholder="Enter group name"
                className="group-name"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
                required
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
                <input 
                type="date" 
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required
                />
                <p> ~ </p>
                <input 
                type="date" 
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                required
                />
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
                  value={time}
                  min="1"
                  max="10"
                  onChange={(e) => setTime(e.target.value)}
                  id="number-input"
                  required
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
                value={memberNum}
                min="2"
                max="20"
                onChange={(e) => setMemberNum(e.target.value)}
                id="number-input"
                required
              />
            </div>
          </div>
        <button type="submit" className="create-group-button">
            <p>{"Create ->"}</p>
        </button>
        {/* <button className="create-group-button">
          <p>{"Create →"}</p>
        </button> */}
        { /*
        <Link className="create-group-button" to="/waiting-room">
          <p>{"Create →"}</p>
        </Link>
        */}
        </form>
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
