import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "../components/MyContext";
import "./Select.css";
import { patchArriveCity, patchArriveStation } from "../api/arrive";

const ArriveSelectCity =()=>{
  const[token,setToken] = useState(getToken());
  const[region, setArriveCity] = useState('');
  const[id, setId] = useState(null);

  useEffect(()=>{
    const updateArriveCity = async()=>{
      try{
        const selectedArriveCity = "가져와야함";
        const selectedId = 123; 

        const response = await patchArriveStation(selectedArriveCity,selectedId);
        console.log("api response:", response);
        setRegion(selectedArriveCity);
        setId(response.data.id);

      } catch(error){
        console.error("station update no: ", error);
      }
    };
    updateArriveCity();
  }, [token]);

  return(
    <div>
      <p>Selected departure : {region}</p>
      <p>Region Id : {id}</p>
    </div>
  );
};
//export default CitySelector;

const Select2 = () => {
  const navigate = useNavigate();
  const { selectedRegion, setSelectedRegion } = useContext(MyContext);

  const navigateToHome = () => {
    navigate("/");
  };

  const next = () => {
    navigate("/Calenderpick");
  };

  const before = () => {
    navigate("/selectR2");
  };

  const handleRegionClick = (region) => {
    setSelectedRegion((prevState) => ({ ...prevState, arrival: region }));
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
          <h1>{selectedRegion.arrivalState} 내 도착역 선택</h1>
          <div />
        </div>
      </div>
      <div className="Main">
        <div className="function2">
          <div>
            <h5>출발역</h5>
            <h3>{selectedRegion.departure || "-"}</h3>
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
                onClick={() => handleRegionClick("화명")}
              >
                화명
              </button>
              <button
                className="SearchR"
                onClick={() => handleRegionClick("구포")}
              >
                구포
              </button>
              <button
                className="SearchR"
                onClick={() => handleRegionClick("사상")}
              >
                사상
              </button>
              <button
                className="SearchR"
                onClick={() => handleRegionClick("부산")}
              >
                부산
              </button>
              <button
                className="SearchR"
                onClick={() => handleRegionClick("부전")}
              >
                부전
              </button>
              <button
                className="SearchR"
                onClick={() => handleRegionClick("동래")}
              >
                동래
              </button>
              <button
                className="SearchR"
                onClick={() => handleRegionClick("센텀")}
              >
                센텀
              </button>
              <button
                className="SearchR"
                onClick={() => handleRegionClick("신해운대")}
              >
                신해운대
              </button>
              <button
                className="SearchR"
                onClick={() => handleRegionClick("송정")}
              >
                송정
              </button>
              <button
                className="SearchR"
                onClick={() => handleRegionClick("기장")}
              >
                기장
              </button>
              <button
                className="SearchR"
                onClick={() => handleRegionClick("좌천")}
              >
                좌천
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Select2;
