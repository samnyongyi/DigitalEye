import { useNavigate } from "react-router-dom";
import { postHome } from "../api/main";



import "./Home.css";
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();

  const navigateToVoiceselect = () => {
    navigate("/select1");
  };
  const navigateToPurchase = () => {
    navigate("/selectR");
  };

  return (
    <div className="Home">
      <img src="../img/코레일.png" />
      <div className="HomeD">
        <div className="HomeT">
          <b>
            <div>
              <span style={{ color: "#9138C7" }}>쉬운</span> 예매!
            </div>
            <div>
              <span style={{ color: "#E74155" }}>안전</span>하고{" "}
              <span style={{ color: "#3D24D8" }}>편안</span>한 여행!
            </div>
          </b>
        </div>
        <div className="center">
          <button className="HomeB" onClick={navigateToPurchase}>
            일반, 빠른 구매
          </button>
          <button className="HomeB" onClick={navigateToVoiceselect}>
            음성 안내 전용
          </button>
        </div>
      </div>
      <h3 className="HomeT2">
        시각장애인 및 도움이 필요하신분들은 음성 인식 전용 서비스를 선택해주세요
      </h3>
    </div>
  );
};

export default Home;
