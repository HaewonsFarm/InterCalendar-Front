import { Link } from "react-router-dom";
import "../styles/components/InterComponent.scss";

const AddInterComponent = () => {
  return (
    <>
      <Link to="/create-group" className="intercomponent-scaffold add">
        <p>+ new inter</p>
      </Link>
    </>
  );
};

export default AddInterComponent;