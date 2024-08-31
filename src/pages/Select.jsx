import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "../components/MyContext";
import "./Select.css";
import {patchSelectStation } from "../api/departure";

const StationSelector =()=>{
  const[token,setToken] = useState(getToken());
  const[station, setStation] = useState('');
  const[id, setId] = useState(null);

  useEffect(()=>{
    const updateStation = async()=>{
      try{
        const selectedStation = "가져와야함";
        const selectedId = 123; 

        const response = await patchSelectStation(selectedStation,selectedId);
        console.log("api response:", response);
        setRegion(selectedStation);
        setId(response.data.id);

      } catch(error){
        console.error("station update no: ", error);
      }
    };
    updateStation();
  }, [token]);
  return(
    <div>
      <p>Selected station : {station}</p>
      <p>Region Id : {id}</p>
    </div>
  );
};
//export default CitySelector;


const Select = () => {
  const navigate = useNavigate();
  const { selectedRegion, setSelectedRegion } = useContext(MyContext);

  const navigateToHome = () => {
    navigate("/");
  };

  const before = () => {
    navigate("/selectR");
  };

  const next = () => {
    navigate("/selectR2");
  };

  const handleRegionClick = (region) => {
    setSelectedRegion((prevState) => ({ ...prevState, departure: region }));
    next();
  };

  return (
    <div className="Select2">
      <div className="Header">
        <img src="../img/코레일.png" alt="Logo" />
        <div className="function1">
          <button className="HB" onClick={before}>
            이전
          </button>
          <h1>{selectedRegion.departureState} 내 출발역 선택</h1>
          <div />
        </div>
      </div>
      <div className="Main">
        <div className="function2">
          <div>
            <h5>출발역</h5>
            <h3>-</h3>
          </div>
          <h2> > </h2>
          <div>
            <h5>도착역</h5>
            <h3>-</h3>
          </div>
        </div>
        <div className="function3">
          <div className="base">
            <div className="Result">
              <button
                className="SearchR"
                onClick={() => handleRegionClick("상봉")}
              >
                상봉
              </button>
              <button
                className="SearchR"
                onClick={() => handleRegionClick("서빙고")}
              >
                서빙고
              </button>
              <button
                className="SearchR"
                onClick={() => handleRegionClick("옥수")}
              >
                옥수
              </button>
              <button
                className="SearchR"
                onClick={() => handleRegionClick("왕십리")}
              >
                왕십리
              </button>
              <button
                className="SearchR"
                onClick={() => handleRegionClick("청량리")}
              >
                청량리
              </button>
              <button
                className="SearchR"
                onClick={() => handleRegionClick("광운대")}
              >
                광운대
              </button>
              <button
                className="SearchR"
                onClick={() => handleRegionClick("서울")}
              >
                서울
              </button>
              <button
                className="SearchR"
                onClick={() => handleRegionClick("용산")}
              >
                용산
              </button>
              <button
                className="SearchR"
                onClick={() => handleRegionClick("노량진")}
              >
                노량진
              </button>
              <button
                className="SearchR"
                onClick={() => handleRegionClick("영등포")}
              >
                영등포
              </button>
              <button
                className="SearchR"
                onClick={() => handleRegionClick("신도림")}
              >
                신도림
              </button>
              <button
                className="SearchR"
                onClick={() => handleRegionClick("수서")}
              >
                수서
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Select;
