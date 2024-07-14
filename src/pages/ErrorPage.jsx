import { useEffect } from "react";
import axios from "axios";
import "../styles/pages/ErrorPage.scss";
import LabelWithHighlight from "../components/LabelWithHighlight";

const BACKEND_ENDPOINT = 'http://12.235.124.214'  // 필요할 경우 조정

const ErrorPage = () => {
  useEffect(() => {
    const logError = async () => {
       try {
        await axios.post(`${BACKEND_ENDPOINT}/api/log`, {
          message: "404 - Page not found",
          timestamp: new Date().toISOString(),
        });
      } catch (error) {
        console.error("Failed to log error", error);
      }
    };
    logError();
  }, []);

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
