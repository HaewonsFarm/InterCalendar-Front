import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Demo from "../components/Calendar";

import "../styles/pages/MainPage.scss";

const MainPage = () => {
  return (
    <>
      <div className="scaffold">
        <SideBar />
        <div className="main-body">
          <Header />
          <div className="main-calendar">
          <Demo />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;