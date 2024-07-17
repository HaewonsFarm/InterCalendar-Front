import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../styles/pages/ItemPage.scss";
import { useState, useEffect } from "react";
import { createItem, updateItem, fetchItem, deleteItem } from '../redux/itemSlice';

const ItemPage = () => {
  const nav = useNavigate();
  const { id } = useParams(); // 있으면 사용자 item 수정, 없으면 사용자 item 새로 만들기
  const dispatch = useDispatch();
  const item = useSelector((state) => state.item.item);

  const [formData, setFormData] = useState({
    role: '',
    startDate: '',
    endDate: '',
    startTime: '',
    endTime: '',
  });

  useEffect(() => {
    if (id) {
      dispatch(fetchItem(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (item) {
      setFormData({
        role: item.role,
        startDate: item.startDate,
        endDate: item.endDate,
        startTime: item.startTime,
        endTime: item.endTime,
      });
    }
  }, [item]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      dispatch(updateItem({ id, ...formData }));
    } else {
      dispatch(createItem(formData));
    }
    nav(-1);
  }

  const handleDelete = () => {
    dispatch(deleteItem(id));
    nav(-1);
  };

  const getDayOfWeek = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  };

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
        <form onSubmit={handleSubmit}>
          <div className="item-crud-content">
            <div className="label-with-highlight">
              <input 
                type="text" 
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                placeholder="Fixed Occupation" 
              />
              <div className="highlight" />
            </div>
            <div className="date-info">
              <div className="date">{formData.startDate}</div>
              <div className="day-of-week-box">
                <p>{getDayOfWeek(formData.startDate)}</p>   {/* <- 날짜의 요일을 표시 */}
              </div>
            </div>

            <div className="select-time">
              <input 
                type="time" 
                name="startTime"
                value={formData.startTime}
                onChange={handleInputChange}
              />
              <p> ~ </p>
              <input 
                type="time" 
                name="endTime"
                value={formData.endTime}
                onChange={handleInputChange}
              />
            </div>

            <div className="button-scaffold">
              {id ? (
                <>
                  <button type="submit">Update</button>
                  <button type="button" onClick={handleDelete}>Delete</button>
                </>
              ) : (
                <button type="submit">Save</button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ItemPage;
