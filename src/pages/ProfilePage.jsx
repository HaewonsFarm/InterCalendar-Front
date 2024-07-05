import LabelWithHighlight from "../components/LabelWithHighlight";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "../styles/pages/ProfilePage.scss";

const ProfilePage = () => {
  const userName = useSelector((state) => state.userInfo.userName);
  const userNameFirst = useSelector((state) => state.userInfo.userNameFirst);
  const groupNum = useSelector((state) => state.userInfo.groupNum);
  const nav = useNavigate();
  return (
    <div className="profile-page">
      <div className="profile-page-scaffold">
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
        <div className="profile-content-scaffold">
          <div>
            <svg
              className="user-profile-circle"
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
                {userNameFirst}
              </text>
            </svg>
          </div>
          <div className="profile-content">
            <LabelWithHighlight
              title="UserName"
              fontSize={25}
              fontWeight={300}
              color="#EFBC9B40"
              boxh={1}
              boxw={10}
            />
            <p className="username">{userName}</p>
            <LabelWithHighlight
              title="Groups"
              fontSize={25}
              fontWeight={300}
              color="#EFBC9B40"
              boxh={1}
              boxw={10}
            />
            <p className="group-num">{groupNum}</p>
          </div>
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
    </div>
  );
};

export default ProfilePage;