import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGroups } from '../redux/groupSlice';
import "../styles/components/SideBar.scss";
import LabelWithHighlight from "./LabelWithHighlight";
import AddInterComponent from "./AddInterComponent";

export const SideBar = ({ setSelectedGroup }) => {
  const dispatch = useDispatch();
  const { groups, loading, error } = useSelector((state) => state.group);

  useEffect(() => {
    dispatch(fetchGroups());
  }, [dispatch]);

  return (
    <>
    <div className="sidebar">
      <div className="sidebar-scaffold">
        <LabelWithHighlight
          title="My Inters"
          color="#D7D7D7"
          boxh={0.1}
          boxw={10}
          fontSize={25}
          transform={0}
        />
        <div className="sidebar-inters">
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          {groups.map(group => (
            <button 
              key={group.id} 
              className="group-button" 
              onClick={() => setSelectedGroup(group)}>
              {group.groupName}
            </button>
          ))}
          <AddInterComponent />
        </div>
      </div>
    </div>
    </>
  );
};

export default SideBar;
