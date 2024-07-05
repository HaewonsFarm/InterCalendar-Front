import "../styles/components/SideBar.scss";
import LabelWithHighlight from "./LabelWithHighlight";
import InterComponent from "./InterComponent";
import AddInterComponent from "./AddInterComponent";

export const SideBar = () => {
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
            <AddInterComponent />
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;