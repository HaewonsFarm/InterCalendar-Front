import { useParams } from "react-router-dom";
import "../styles/pages/ItemPage.scss";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ItemPage = () => {
  const nav = useNavigate();
  const { id } = useParams(); // 있으면 사용자 item 수정, 없으면 사용자 item 새로 만들기
  return (
    <div className="item-page-scaffold">
      <div className="item-crud-scaffold">
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
        <form action="">
          <div className="item-crud-content">
            <div className="label-with-highlight">
              <input type="text" placeholder="Fixed Occupation" />
              <div className="highlight" />
            </div>
            <div className="date-info">
              <div className="date">05.25</div>
              <div className="day-of-week-box">
                <p>Thu</p>
              </div>
            </div>

            <div className="select-time">
              <input type="time" id="time" />
              <p> ~ </p>
              <input type="time" id="time" />
            </div>

            <div className="button-scaffold">
              {id === undefined ? (
                <button>Save</button>
              ) : (
                <>
                  <button>Update</button>
                  <button>Delete</button>
                </>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ItemPage;