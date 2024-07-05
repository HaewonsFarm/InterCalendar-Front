import "../styles/pages/ErrorPage.scss";
import LabelWithHighlight from "../components/LabelWithHighlight";

const ErrorPage = () => {
  return (
    <>
      <div className="error-page-scaffold">
        <div className="error-msg">
          <LabelWithHighlight
            title="404"
            color="#EFBC9B"
            fontSize={96}
            boxw={13}
            boxh={2.3}
            transform={48}
          />
          <p>The page you are requesting is not found</p>
          <br />
          <p>요청하는 페이지를 찾을 수 없습니다.</p>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;