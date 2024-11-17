import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "../components/MyContext";
import "./Rail.css";

const Rail = () => {
  const navigate = useNavigate();
  const { selectedRegion, setSelectedRegion } = useContext(MyContext);

  const time1Ref = useRef();
  const time2Ref = useRef();
  const priceRef = useRef();
  const priceInf = useRef();

  const before = () => {
    navigate("/ticket");
  };

  const next2 = () => {
    navigate("/price");
  };

  const next = () => {
    navigate("/Recommendselect");
  };

  const handleButtonClick = (carPriceText) => {
    const time1Text = time1Ref.current?.innerText || "";
    const time2Text = time2Ref.current?.innerText || "";
    const priceText = carPriceText;

    setSelectedRegion((prevState) => ({
      ...prevState,
      carDetails: {
        time1: time1Text,
        time2: time2Text,
        carPrice: priceText,
      },
      selectedCarPrice: priceText,
    }));

    next();
  };

  const handleButtonClickWithText = () => {
    const priceText = priceRef.current?.innerText || "";
    handleButtonClick(priceText);
  };

  return (
    <div className="Select2">
      <div className="Header">
        <img src="../img/코레일.png" alt="로고" />
        <div className="function1">
          <button className="HB" onClick={before}>
            이전
          </button>
          <h1>열차 시간 선택</h1>
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
            <h3>{selectedRegion.arrival || "-"}</h3>
          </div>
        </div>

        <div className="function3R">
          <div className="place">
            <h1>{selectedRegion.departure || "-"}</h1>
            <h1>></h1>
            <h1>{selectedRegion.arrival || "-"}</h1>
          </div>
          <div className="R">
            <div className="data">
              <div className="RB">
                <div className="RD">
                  <div className="RD2">
                    <div className="RD3">
                      <h2 ref={time1Ref} style={{ color: "#FF2F2F" }}>
                        05:12
                      </h2>
                      <h2>서울</h2>
                    </div>
                    <h1 style={{ color: "#FF2F2F" }}> ></h1>
                    <div className="RD3">
                      <h2 ref={time2Ref} style={{ color: "#FF2F2F" }}>
                        07:49
                      </h2>
                      <h2>부산</h2>
                    </div>
                  </div>
                  <div className="RD4">
                    <button className="RD5" onClick={next2}>
                      운임요금
                    </button>
                    <button className="RD5" onClick={handleButtonClickWithText}>
                      <h2 ref={priceRef}>59,800원</h2>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="data">
              <div className="RB">
                <div className="RD">
                  <div className="RD2">
                    <div className="RD3">
                      <h2 ref={time1Ref} style={{ color: "#FF2F2F" }}>
                        05:27
                      </h2>
                      <h2>서울</h2>
                    </div>
                    <h1 style={{ color: "#FF2F2F" }}> ></h1>
                    <div className="RD3">
                      <h2 ref={time2Ref} style={{ color: "#FF2F2F" }}>
                        08:15
                      </h2>
                      <h2>부산</h2>
                    </div>
                  </div>
                  <div className="RD4">
                    <button className="RD5" onClick={next2}>
                      운임요금
                    </button>
                    <button className="RD5" onClick={handleButtonClickWithText}>
                      <h2 ref={priceRef}>59,800원</h2>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="data">
              <div className="RB">
                <div className="RD">
                  <div className="RD2">
                    <div className="RD3">
                      <h2 ref={time1Ref} style={{ color: "#FF2F2F" }}>
                        05:57
                      </h2>
                      <h2>서울</h2>
                    </div>
                    <h1 style={{ color: "#FF2F2F" }}> ></h1>
                    <div className="RD3">
                      <h2 ref={time2Ref} style={{ color: "#FF2F2F" }}>
                        08:42
                      </h2>
                      <h2>부산</h2>
                    </div>
                  </div>
                  <div className="RD4">
                    <button className="RD5" onClick={next2}>
                      운임요금
                    </button>
                    <button className="RD5" onClick={handleButtonClickWithText}>
                      <h2 ref={priceRef}>59,800원</h2>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="data">
              <div className="RB">
                <div className="RD">
                  <div className="RD2">
                    <div className="RD3">
                      <h2 ref={time1Ref} style={{ color: "#FF2F2F" }}>
                        06:32
                      </h2>
                      <h2>서울</h2>
                    </div>
                    <h1 style={{ color: "#FF2F2F" }}> ></h1>
                    <div className="RD3">
                      <h2 ref={time2Ref} style={{ color: "#FF2F2F" }}>
                        09:21
                      </h2>
                      <h2>부산</h2>
                    </div>
                  </div>
                  <div className="RD4">
                    <button className="RD5" onClick={next2}>
                      운임요금
                    </button>
                    <button className="RD5" onClick={handleButtonClickWithText}>
                      <h2 ref={priceRef}>59,800원</h2>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="data">
              <div className="RB">
                <div className="RD">
                  <div className="RD2">
                    <div className="RD3">
                      <h2 ref={time1Ref} style={{ color: "#FF2F2F" }}>
                        06:56
                      </h2>
                      <h2>서울</h2>
                    </div>
                    <h1 style={{ color: "#FF2F2F" }}> ></h1>
                    <div className="RD3">
                      <h2 ref={time2Ref} style={{ color: "#FF2F2F" }}>
                        09:38
                      </h2>
                      <h2>부산</h2>
                    </div>
                  </div>
                  <div className="RD4">
                    <button className="RD5" onClick={next2}>
                      운임요금
                    </button>
                    <button className="RD5" onClick={handleButtonClickWithText}>
                      <h2 ref={priceRef}>59,800원</h2>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="data">
              <div className="RB">
                <div className="RD">
                  <div className="RD2">
                    <div className="RD3">
                      <h2 ref={time1Ref} style={{ color: "#FF2F2F" }}>
                        07:27
                      </h2>
                      <h2>서울</h2>
                    </div>
                    <h1 style={{ color: "#FF2F2F" }}> ></h1>
                    <div className="RD3">
                      <h2 ref={time2Ref} style={{ color: "#FF2F2F" }}>
                        10:09
                      </h2>
                      <h2>부산</h2>
                    </div>
                  </div>
                  <div className="RD4">
                    <button className="RD5" onClick={next2}>
                      운임요금
                    </button>
                    <button className="RD5" onClick={handleButtonClickWithText}>
                      <h2 ref={priceRef}>59,800원</h2>
                    </button>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="data">
              <div className="RB">
                <div className="RD">
                  <div className="RD2">
                    <div className="RD3">
                      <h2 ref={time1Ref} style={{ color: "#FF2F2F" }}>
                        07:49
                      </h2>
                      <h2>서울</h2>
                    </div>
                    <h1 style={{ color: "#FF2F2F" }}> ></h1>
                    <div className="RD3">
                      <h2 ref={time2Ref} style={{ color: "#FF2F2F" }}>
                        10:19
                      </h2>
                      <h2>부산</h2>
                    </div>
                  </div>
                  <div className="RD4">
                    <button className="RD5" onClick={next2}>
                      운임요금
                    </button>
                    <button className="RD5" onClick={handleButtonClickWithText}>
                      <h2 ref={priceRef}>59,800원</h2>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="data">
              <div className="RB">
                <div className="RD">
                  <div className="RD2">
                    <div className="RD3">
                      <h2 ref={time1Ref} style={{ color: "#FF2F2F" }}>
                        07:57
                      </h2>
                      <h2>서울</h2>
                    </div>
                    <h1 style={{ color: "#FF2F2F" }}> ></h1>
                    <div className="RD3">
                      <h2 ref={time2Ref} style={{ color: "#FF2F2F" }}>
                        10:45
                      </h2>
                      <h2>부산</h2>
                    </div>
                  </div>
                  <div className="RD4">
                    <button className="RD5" onClick={next2}>
                      운임요금
                    </button>
                    <button className="RD5" onClick={handleButtonClickWithText}>
                      <h2 ref={priceRef}>59,800원</h2>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="data">
              <div className="RB">
                <div className="RD">
                  <div className="RD2">
                    <div className="RD3">
                      <h2 ref={time1Ref} style={{ color: "#FF2F2F" }}>
                        08:11
                      </h2>
                      <h2>서울</h2>
                    </div>
                    <h1 style={{ color: "#FF2F2F" }}> ></h1>
                    <div className="RD3">
                      <h2 ref={time2Ref} style={{ color: "#FF2F2F" }}>
                        11:32
                      </h2>
                      <h2>부산</h2>
                    </div>
                  </div>
                  <div className="RD4">
                    <button className="RD5" onClick={next2}>
                      운임요금
                    </button>
                    <button className="RD5" onClick={handleButtonClickWithText}>
                      <h2 ref={priceRef}>59,800원</h2>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="data">
              <div className="RB">
                <div className="RD">
                  <div className="RD2">
                    <div className="RD3">
                      <h2 ref={time1Ref} style={{ color: "#FF2F2F" }}>
                        08:57
                      </h2>
                      <h2>서울</h2>
                    </div>
                    <h1 style={{ color: "#FF2F2F" }}> ></h1>
                    <div className="RD3">
                      <h2 ref={time2Ref} style={{ color: "#FF2F2F" }}>
                        11:15
                      </h2>
                      <h2>부산</h2>
                    </div>
                  </div>
                  <div className="RD4">
                    <button className="RD5" onClick={next2}>
                      운임요금
                    </button>
                    <button className="RD5" onClick={handleButtonClickWithText}>
                      <h2 ref={priceRef}>59,800원</h2>
                    </button>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="data">
              <div className="RB">
                <div className="RD">
                  <div className="RD2">
                    <div className="RD3">
                      <h2 ref={time1Ref} style={{ color: "#FF2F2F" }}>
                        09:32
                      </h2>
                      <h2>서울</h2>
                    </div>
                    <h1 style={{ color: "#FF2F2F" }}> ></h1>
                    <div className="RD3">
                      <h2 ref={time2Ref} style={{ color: "#FF2F2F" }}>
                        12:48
                      </h2>
                      <h2>부산</h2>
                    </div>
                  </div>
                  <div className="RD4">
                    <button className="RD5" onClick={next2}>
                      운임요금
                    </button>
                    <button className="RD5" onClick={handleButtonClickWithText}>
                      <h2 ref={priceRef}>59,800원</h2>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="data">
              <div className="RB">
                <div className="RD">
                  <div className="RD2">
                    <div className="RD3">
                      <h2 ref={time1Ref} style={{ color: "#FF2F2F" }}>
                        09:57
                      </h2>
                      <h2>서울</h2>
                    </div>
                    <h1 style={{ color: "#FF2F2F" }}> ></h1>
                    <div className="RD3">
                      <h2 ref={time2Ref} style={{ color: "#FF2F2F" }}>
                        12:05
                      </h2>
                      <h2>부산</h2>
                    </div>
                  </div>
                  <div className="RD4">
                    <button className="RD5" onClick={next2}>
                      운임요금
                    </button>
                    <button className="RD5" onClick={handleButtonClickWithText}>
                      <h2 ref={priceRef}>59,800원</h2>
                    </button>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="data">
              <div className="RB">
                <div className="RD">
                  <div className="RD2">
                    <div className="RD3">
                      <h2 ref={time1Ref} style={{ color: "#FF2F2F" }}>
                        10:11
                      </h2>
                      <h2>서울</h2>
                    </div>
                    <h1 style={{ color: "#FF2F2F" }}> ></h1>
                    <div className="RD3">
                      <h2 ref={time2Ref} style={{ color: "#FF2F2F" }}>
                        13:34
                      </h2>
                      <h2>부산</h2>
                    </div>
                  </div>
                  <div className="RD4">
                    <button className="RD5" onClick={next2}>
                      운임요금
                    </button>
                    <button className="RD5" onClick={handleButtonClickWithText}>
                      <h2 ref={priceRef}>59,800원</h2>
                    </button>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="data">
              <div className="RB">
                <div className="RD">
                  <div className="RD2">
                    <div className="RD3">
                      <h2 ref={time1Ref} style={{ color: "#FF2F2F" }}>
                        10:27
                      </h2>
                      <h2>서울</h2>
                    </div>
                    <h1 style={{ color: "#FF2F2F" }}> ></h1>
                    <div className="RD3">
                      <h2 ref={time2Ref} style={{ color: "#FF2F2F" }}>
                        13:13
                      </h2>
                      <h2>부산</h2>
                    </div>
                  </div>
                  <div className="RD4">
                    <button className="RD5" onClick={next2}>
                      운임요금
                    </button>
                    <button className="RD5" onClick={handleButtonClickWithText}>
                      <h2 ref={priceRef}>59,800원</h2>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="data">
              <div className="RB">
                <div className="RD">
                  <div className="RD2">
                    <div className="RD3">
                      <h2 ref={time1Ref} style={{ color: "#FF2F2F" }}>
                        10:27
                      </h2>
                      <h2>서울</h2>
                    </div>
                    <h1 style={{ color: "#FF2F2F" }}> ></h1>
                    <div className="RD3">
                      <h2 ref={time2Ref} style={{ color: "#FF2F2F" }}>
                        13:13
                      </h2>
                      <h2>부산</h2>
                    </div>
                  </div>
                  <div className="RD4">
                    <button className="RD5" onClick={next2}>
                      운임요금
                    </button>
                    <button className="RD5" onClick={handleButtonClickWithText}>
                      <h2 ref={priceRef}>59,800원</h2>
                    </button>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="data">
              <div className="RB">
                <div className="RD">
                  <div className="RD2">
                    <div className="RD3">
                      <h2 ref={time1Ref} style={{ color: "#FF2F2F" }}>
                        10:57
                      </h2>
                      <h2>서울</h2>
                    </div>
                    <h1 style={{ color: "#FF2F2F" }}> ></h1>
                    <div className="RD3">
                      <h2 ref={time2Ref} style={{ color: "#FF2F2F" }}>
                        13:41
                      </h2>
                      <h2>부산</h2>
                    </div>
                  </div>
                  <div className="RD4">
                    <button className="RD5" onClick={next2}>
                      운임요금
                    </button>
                    <button className="RD5" onClick={handleButtonClickWithText}>
                      <h2 ref={priceRef}>59,800원</h2>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="data">
              <div className="RB">
                <div className="RD">
                  <div className="RD2">
                    <div className="RD3">
                      <h2 ref={time1Ref} style={{ color: "#FF2F2F" }}>
                        11:57
                      </h2>
                      <h2>서울</h2>
                    </div>
                    <h1 style={{ color: "#FF2F2F" }}> ></h1>
                    <div className="RD3">
                      <h2 ref={time2Ref} style={{ color: "#FF2F2F" }}>
                        14:41
                      </h2>
                      <h2>부산</h2>
                    </div>
                  </div>
                  <div className="RD4">
                    <button className="RD5" onClick={next2}>
                      운임요금
                    </button>
                    <button className="RD5" onClick={handleButtonClickWithText}>
                      <h2 ref={priceRef}>59,800원</h2>
                    </button>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="data">
              <div className="RB">
                <div className="RD">
                  <div className="RD2">
                    <div className="RD3">
                      <h2 ref={time1Ref} style={{ color: "#FF2F2F" }}>
                        12:24
                      </h2>
                      <h2>서울</h2>
                    </div>
                    <h1 style={{ color: "#FF2F2F" }}> ></h1>
                    <div className="RD3">
                      <h2 ref={time2Ref} style={{ color: "#FF2F2F" }}>
                        15:02
                      </h2>
                      <h2>부산</h2>
                    </div>
                  </div>
                  <div className="RD4">
                    <button className="RD5" onClick={next2}>
                      운임요금
                    </button>
                    <button className="RD5" onClick={handleButtonClickWithText}>
                      <h2 ref={priceRef}>59,800원</h2>
                    </button>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="data">
              <div className="RB">
                <div className="RD">
                  <div className="RD2">
                    <div className="RD3">
                      <h2 ref={time1Ref} style={{ color: "#FF2F2F" }}>
                        13:07
                      </h2>
                      <h2>서울</h2>
                    </div>
                    <h1 style={{ color: "#FF2F2F" }}> ></h1>
                    <div className="RD3">
                      <h2 ref={time2Ref} style={{ color: "#FF2F2F" }}>
                        16:23
                      </h2>
                      <h2>부산</h2>
                    </div>
                  </div>
                  <div className="RD4">
                    <button className="RD5" onClick={next2}>
                      운임요금
                    </button>
                    <button className="RD5" onClick={handleButtonClickWithText}>
                      <h2 ref={priceRef}>59,800원</h2>
                    </button>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="data">
              <div className="RB">
                <div className="RD">
                  <div className="RD2">
                    <div className="RD3">
                      <h2 ref={time1Ref} style={{ color: "#FF2F2F" }}>
                        13:17
                      </h2>
                      <h2>서울</h2>
                    </div>
                    <h1 style={{ color: "#FF2F2F" }}> ></h1>
                    <div className="RD3">
                      <h2 ref={time2Ref} style={{ color: "#FF2F2F" }}>
                        15:58
                      </h2>
                      <h2>부산</h2>
                    </div>
                  </div>
                  <div className="RD4">
                    <button className="RD5" onClick={next2}>
                      운임요금
                    </button>
                    <button className="RD5" onClick={handleButtonClickWithText}>
                      <h2 ref={priceRef}>59,800원</h2>
                    </button>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="data">
              <div className="RB">
                <div className="RD">
                  <div className="RD2">
                    <div className="RD3">
                      <h2 ref={time1Ref} style={{ color: "#FF2F2F" }}>
                        13:48
                      </h2>
                      <h2>서울</h2>
                    </div>
                    <h1 style={{ color: "#FF2F2F" }}> ></h1>
                    <div className="RD3">
                      <h2 ref={time2Ref} style={{ color: "#FF2F2F" }}>
                        16:24
                      </h2>
                      <h2>부산</h2>
                    </div>
                  </div>
                  <div className="RD4">
                    <button className="RD5" onClick={next2}>
                      운임요금
                    </button>
                    <button className="RD5" onClick={handleButtonClickWithText}>
                      <h2 ref={priceRef}>59,800원</h2>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="data">
              <div className="RB">
                <div className="RD">
                  <div className="RD2">
                    <div className="RD3">
                      <h2 ref={time1Ref} style={{ color: "#FF2F2F" }}>
                        13:57
                      </h2>
                      <h2>서울</h2>
                    </div>
                    <h1 style={{ color: "#FF2F2F" }}> ></h1>
                    <div className="RD3">
                      <h2 ref={time2Ref} style={{ color: "#FF2F2F" }}>
                        16:34
                      </h2>
                      <h2>부산</h2>
                    </div>
                  </div>
                  <div className="RD4">
                    <button className="RD5" onClick={next2}>
                      운임요금
                    </button>
                    <button className="RD5" onClick={handleButtonClickWithText}>
                      <h2 ref={priceRef}>59,800원</h2>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="data">
              <div className="RB">
                <div className="RD">
                  <div className="RD2">
                    <div className="RD3">
                      <h2 ref={time1Ref} style={{ color: "#FF2F2F" }}>
                        14:18
                      </h2>
                      <h2>서울</h2>
                    </div>
                    <h1 style={{ color: "#FF2F2F" }}> ></h1>
                    <div className="RD3">
                      <h2 ref={time2Ref} style={{ color: "#FF2F2F" }}>
                        16:49
                      </h2>
                      <h2>부산</h2>
                    </div>
                  </div>
                  <div className="RD4">
                    <button className="RD5" onClick={next2}>
                      운임요금
                    </button>
                    <button className="RD5" onClick={handleButtonClickWithText}>
                      <h2 ref={priceRef}>59,800원</h2>
                    </button>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="data">
              <div className="RB">
                <div className="RD">
                  <div className="RD2">
                    <div className="RD3">
                      <h2 ref={time1Ref} style={{ color: "#FF2F2F" }}>
                        14:57
                      </h2>
                      <h2>서울</h2>
                    </div>
                    <h1 style={{ color: "#FF2F2F" }}> ></h1>
                    <div className="RD3">
                      <h2 ref={time2Ref} style={{ color: "#FF2F2F" }}>
                        17:39
                      </h2>
                      <h2>부산</h2>
                    </div>
                  </div>
                  <div className="RD4">
                    <button className="RD5" onClick={next2}>
                      운임요금
                    </button>
                    <button className="RD5" onClick={handleButtonClickWithText}>
                      <h2 ref={priceRef}>59,800원</h2>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="data">
              <div className="RB">
                <div className="RD">
                  <div className="RD2">
                    <div className="RD3">
                      <h2 ref={time1Ref} style={{ color: "#FF2F2F" }}>
                        15:39
                      </h2>
                      <h2>서울</h2>
                    </div>
                    <h1 style={{ color: "#FF2F2F" }}> ></h1>
                    <div className="RD3">
                      <h2 ref={time2Ref} style={{ color: "#FF2F2F" }}>
                        18:11
                      </h2>
                      <h2>부산</h2>
                    </div>
                  </div>
                  <div className="RD4">
                    <button className="RD5" onClick={next2}>
                      운임요금
                    </button>
                    <button className="RD5" onClick={handleButtonClickWithText}>
                      <h2 ref={priceRef}>59,800원</h2>
                    </button>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="data">
              <div className="RB">
                <div className="RD">
                  <div className="RD2">
                    <div className="RD3">
                      <h2 ref={time1Ref} style={{ color: "#FF2F2F" }}>
                        15:57
                      </h2>
                      <h2>서울</h2>
                    </div>
                    <h1 style={{ color: "#FF2F2F" }}> ></h1>
                    <div className="RD3">
                      <h2 ref={time2Ref} style={{ color: "#FF2F2F" }}>
                        18:41
                      </h2>
                      <h2>부산</h2>
                    </div>
                  </div>
                  <div className="RD4">
                    <button className="RD5" onClick={next2}>
                      운임요금
                    </button>
                    <button className="RD5" onClick={handleButtonClickWithText}>
                      <h2 ref={priceRef}>59,800원</h2>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="data">
              <div className="RB">
                <div className="RD">
                  <div className="RD2">
                    <div className="RD3">
                      <h2 ref={time1Ref} style={{ color: "#FF2F2F" }}>
                        16:02
                      </h2>
                      <h2>서울</h2>
                    </div>
                    <h1 style={{ color: "#FF2F2F" }}> ></h1>
                    <div className="RD3">
                      <h2 ref={time2Ref} style={{ color: "#FF2F2F" }}>
                        19:20
                      </h2>
                      <h2>부산</h2>
                    </div>
                  </div>
                  <div className="RD4">
                    <button className="RD5" onClick={next2}>
                      운임요금
                    </button>
                    <button className="RD5" onClick={handleButtonClickWithText}>
                      <h2 ref={priceRef}>59,800원</h2>
                    </button>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="data">
              <div className="RB">
                <div className="RD">
                  <div className="RD2">
                    <div className="RD3">
                      <h2 ref={time1Ref} style={{ color: "#FF2F2F" }}>
                        16:28
                      </h2>
                      <h2>서울</h2>
                    </div>
                    <h1 style={{ color: "#FF2F2F" }}> ></h1>
                    <div className="RD3">
                      <h2 ref={time2Ref} style={{ color: "#FF2F2F" }}>
                        18:58
                      </h2>
                      <h2>부산</h2>
                    </div>
                  </div>
                  <div className="RD4">
                    <button className="RD5" onClick={next2}>
                      운임요금
                    </button>
                    <button className="RD5" onClick={handleButtonClickWithText}>
                      <h2 ref={priceRef}>59,800원</h2>
                    </button>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="data">
              <div className="RB">
                <div className="RD">
                  <div className="RD2">
                    <div className="RD3">
                      <h2 ref={time1Ref} style={{ color: "#FF2F2F" }}>
                        16:57
                      </h2>
                      <h2>서울</h2>
                    </div>
                    <h1 style={{ color: "#FF2F2F" }}> ></h1>
                    <div className="RD3">
                      <h2 ref={time2Ref} style={{ color: "#FF2F2F" }}>
                        19:40
                      </h2>
                      <h2>부산</h2>
                    </div>
                  </div>
                  <div className="RD4">
                    <button className="RD5" onClick={next2}>
                      운임요금
                    </button>
                    <button className="RD5" onClick={handleButtonClickWithText}>
                      <h2 ref={priceRef}>59,800원</h2>
                    </button>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="data">
              <div className="RB">
                <div className="RD">
                  <div className="RD2">
                    <div className="RD3">
                      <h2 ref={time1Ref} style={{ color: "#FF2F2F" }}>
                        17:12
                      </h2>
                      <h2>서울</h2>
                    </div>
                    <h1 style={{ color: "#FF2F2F" }}> ></h1>
                    <div className="RD3">
                      <h2 ref={time2Ref} style={{ color: "#FF2F2F" }}>
                        20:15
                      </h2>
                      <h2>부산</h2>
                    </div>
                  </div>
                  <div className="RD4">
                    <button className="RD5" onClick={next2}>
                      운임요금
                    </button>
                    <button className="RD5" onClick={handleButtonClickWithText}>
                      <h2 ref={priceRef}>59,800원</h2>
                    </button>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="data">
              <div className="RB">
                <div className="RD">
                  <div className="RD2">
                    <div className="RD3">
                      <h2 ref={time1Ref} style={{ color: "#FF2F2F" }}>
                        17:22
                      </h2>
                      <h2>서울</h2>
                    </div>
                    <h1 style={{ color: "#FF2F2F" }}> ></h1>
                    <div className="RD3">
                      <h2 ref={time2Ref} style={{ color: "#FF2F2F" }}>
                        20:11
                      </h2>
                      <h2>부산</h2>
                    </div>
                  </div>
                  <div className="RD4">
                    <button className="RD5" onClick={next2}>
                      운임요금
                    </button>
                    <button className="RD5" onClick={handleButtonClickWithText}>
                      <h2 ref={priceRef}>59,800원</h2>
                    </button>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="data">
              <div className="RB">
                <div className="RD">
                  <div className="RD2">
                    <div className="RD3">
                      <h2 ref={time1Ref} style={{ color: "#FF2F2F" }}>
                        17:57
                      </h2>
                      <h2>서울</h2>
                    </div>
                    <h1 style={{ color: "#FF2F2F" }}> ></h1>
                    <div className="RD3">
                      <h2 ref={time2Ref} style={{ color: "#FF2F2F" }}>
                        20:35
                      </h2>
                      <h2>부산</h2>
                    </div>
                  </div>
                  <div className="RD4">
                    <button className="RD5" onClick={next2}>
                      운임요금
                    </button>
                    <button className="RD5" onClick={handleButtonClickWithText}>
                      <h2 ref={priceRef}>59,800원</h2>
                    </button>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="data">
              <div className="RB">
                <div className="RD">
                  <div className="RD2">
                    <div className="RD3">
                      <h2 ref={time1Ref} style={{ color: "#FF2F2F" }}>
                        18:12
                      </h2>
                      <h2>서울</h2>
                    </div>
                    <h1 style={{ color: "#FF2F2F" }}> ></h1>
                    <div className="RD3">
                      <h2 ref={time2Ref} style={{ color: "#FF2F2F" }}>
                        20:54
                      </h2>
                      <h2>부산</h2>
                    </div>
                  </div>
                  <div className="RD4">
                    <button className="RD5" onClick={next2}>
                      운임요금
                    </button>
                    <button className="RD5" onClick={handleButtonClickWithText}>
                      <h2 ref={priceRef}>59,800원</h2>
                    </button>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="data">
              <div className="RB">
                <div className="RD">
                  <div className="RD2">
                    <div className="RD3">
                      <h2 ref={time1Ref} style={{ color: "#FF2F2F" }}>
                        18:23
                      </h2>
                      <h2>서울</h2>
                    </div>
                    <h1 style={{ color: "#FF2F2F" }}> ></h1>
                    <div className="RD3">
                      <h2 ref={time2Ref} style={{ color: "#FF2F2F" }}>
                        21:13
                      </h2>
                      <h2>부산</h2>
                    </div>
                  </div>
                  <div className="RD4">
                    <button className="RD5" onClick={next2}>
                      운임요금
                    </button>
                    <button className="RD5" onClick={handleButtonClickWithText}>
                      <h2 ref={priceRef}>59,800원</h2>
                    </button>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="data">
              <div className="RB">
                <div className="RD">
                  <div className="RD2">
                    <div className="RD3">
                      <h2 ref={time1Ref} style={{ color: "#FF2F2F" }}>
                        18:40
                      </h2>
                      <h2>서울</h2>
                    </div>
                    <h1 style={{ color: "#FF2F2F" }}> ></h1>
                    <div className="RD3">
                      <h2 ref={time2Ref} style={{ color: "#FF2F2F" }}>
                        22:00
                      </h2>
                      <h2>부산</h2>
                    </div>
                  </div>
                  <div className="RD4">
                    <button className="RD5" onClick={next2}>
                      운임요금
                    </button>
                    <button className="RD5" onClick={handleButtonClickWithText}>
                      <h2 ref={priceRef}>59,800원</h2>
                    </button>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="data">
              <div className="RB">
                <div className="RD">
                  <div className="RD2">
                    <div className="RD3">
                      <h2 ref={time1Ref} style={{ color: "#FF2F2F" }}>
                        18:52
                      </h2>
                      <h2>서울</h2>
                    </div>
                    <h1 style={{ color: "#FF2F2F" }}> ></h1>
                    <div className="RD3">
                      <h2 ref={time2Ref} style={{ color: "#FF2F2F" }}>
                        22:13
                      </h2>
                      <h2>부산</h2>
                    </div>
                  </div>
                  <div className="RD4">
                    <button className="RD5" onClick={next2}>
                      운임요금
                    </button>
                    <button className="RD5" onClick={handleButtonClickWithText}>
                      <h2 ref={priceRef}>59,800원</h2>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="data">
              <div className="RB">
                <div className="RD">
                  <div className="RD2">
                    <div className="RD3">
                      <h2 ref={time1Ref} style={{ color: "#FF2F2F" }}>
                        18:57
                      </h2>
                      <h2>서울</h2>
                    </div>
                    <h1 style={{ color: "#FF2F2F" }}> ></h1>
                    <div className="RD3">
                      <h2 ref={time2Ref} style={{ color: "#FF2F2F" }}>
                        21:38
                      </h2>
                      <h2>부산</h2>
                    </div>
                  </div>
                  <div className="RD4">
                    <button className="RD5" onClick={next2}>
                      운임요금
                    </button>
                    <button className="RD5" onClick={handleButtonClickWithText}>
                      <h2 ref={priceRef}>59,800원</h2>
                    </button>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="data">
              <div className="RB">
                <div className="RD">
                  <div className="RD2">
                    <div className="RD3">
                      <h2 ref={time1Ref} style={{ color: "#FF2F2F" }}>
                        19:34
                      </h2>
                      <h2>서울</h2>
                    </div>
                    <h1 style={{ color: "#FF2F2F" }}> ></h1>
                    <div className="RD3">
                      <h2 ref={time2Ref} style={{ color: "#FF2F2F" }}>
                        22:09
                      </h2>
                      <h2>부산</h2>
                    </div>
                  </div>
                  <div className="RD4">
                    <button className="RD5" onClick={next2}>
                      운임요금
                    </button>
                    <button className="RD5" onClick={handleButtonClickWithText}>
                      <h2 ref={priceRef}>59,800원</h2>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="data">
              <div className="RB">
                <div className="RD">
                  <div className="RD2">
                    <div className="RD3">
                      <h2 ref={time1Ref} style={{ color: "#FF2F2F" }}>
                        19:57
                      </h2>
                      <h2>서울</h2>
                    </div>
                    <h1 style={{ color: "#FF2F2F" }}> ></h1>
                    <div className="RD3">
                      <h2 ref={time2Ref} style={{ color: "#FF2F2F" }}>
                        22:37
                      </h2>
                      <h2>부산</h2>
                    </div>
                  </div>
                  <div className="RD4">
                    <button className="RD5" onClick={next2}>
                      운임요금
                    </button>
                    <button className="RD5" onClick={handleButtonClickWithText}>
                      <h2 ref={priceRef}>59,800원</h2>
                    </button>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="data">
              <div className="RB">
                <div className="RD">
                  <div className="RD2">
                    <div className="RD3">
                      <h2 ref={time1Ref} style={{ color: "#FF2F2F" }}>
                        20:27
                      </h2>
                      <h2>서울</h2>
                    </div>
                    <h1 style={{ color: "#FF2F2F" }}> ></h1>
                    <div className="RD3">
                      <h2 ref={time2Ref} style={{ color: "#FF2F2F" }}>
                        23:00
                      </h2>
                      <h2>부산</h2>
                    </div>
                  </div>
                  <div className="RD4">
                    <button className="RD5" onClick={next2}>
                      운임요금
                    </button>
                    <button className="RD5" onClick={handleButtonClickWithText}>
                      <h2 ref={priceRef}>59,800원</h2>
                    </button>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="data">
              <div className="RB">
                <div className="RD">
                  <div className="RD2">
                    <div className="RD3">
                      <h2 ref={time1Ref} style={{ color: "#FF2F2F" }}>
                        20:48
                      </h2>
                      <h2>서울</h2>
                    </div>
                    <h1 style={{ color: "#FF2F2F" }}> ></h1>
                    <div className="RD3">
                      <h2 ref={time2Ref} style={{ color: "#FF2F2F" }}>
                        23:57
                      </h2>
                      <h2>부산</h2>
                    </div>
                  </div>
                  <div className="RD4">
                    <button className="RD5" onClick={next2}>
                      운임요금
                    </button>
                    <button className="RD5" onClick={handleButtonClickWithText}>
                      <h2 ref={priceRef}>59,800원</h2>
                    </button>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="data">
              <div className="RB">
                <div className="RD">
                  <div className="RD2">
                    <div className="RD3">
                      <h2 ref={time1Ref} style={{ color: "#FF2F2F" }}>
                        20:57
                      </h2>
                      <h2>서울</h2>
                    </div>
                    <h1 style={{ color: "#FF2F2F" }}> ></h1>
                    <div className="RD3">
                      <h2 ref={time2Ref} style={{ color: "#FF2F2F" }}>
                        23:45
                      </h2>
                      <h2>부산</h2>
                    </div>
                  </div>
                  <div className="RD4">
                    <button className="RD5" onClick={next2}>
                      운임요금
                    </button>
                    <button className="RD5" onClick={handleButtonClickWithText}>
                      <h2 ref={priceRef}>59,800원</h2>
                    </button>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="data">
              <div className="RB">
                <div className="RD">
                  <div className="RD2">
                    <div className="RD3">
                      <h2 ref={time1Ref} style={{ color: "#FF2F2F" }}>
                        21:27
                      </h2>
                      <h2>서울</h2>
                    </div>
                    <h1 style={{ color: "#FF2F2F" }}> ></h1>
                    <div className="RD3">
                      <h2 ref={time2Ref} style={{ color: "#FF2F2F" }}>
                        00:40
                      </h2>
                      <h2>부산</h2>
                    </div>
                  </div>
                  <div className="RD4">
                    <button className="RD5" onClick={next2}>
                      운임요금
                    </button>
                    <button className="RD5" onClick={handleButtonClickWithText}>
                      <h2 ref={priceRef}>59,800원</h2>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="data">
              <div className="RB">
                <div className="RD">
                  <div className="RD2">
                    <div className="RD3">
                      <h2 ref={time1Ref} style={{ color: "#FF2F2F" }}>
                        21:37
                      </h2>
                      <h2>서울</h2>
                    </div>
                    <h1 style={{ color: "#FF2F2F" }}> ></h1>
                    <div className="RD3">
                      <h2 ref={time2Ref} style={{ color: "#FF2F2F" }}>
                        00:47
                      </h2>
                      <h2>부산</h2>
                    </div>
                  </div>
                  <div className="RD4">
                    <button className="RD5" onClick={next2}>
                      운임요금
                    </button>
                    <button className="RD5" onClick={handleButtonClickWithText}>
                      <h2 ref={priceRef}>59,800원</h2>
                    </button>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="data">
              <div className="RB">
                <div className="RD">
                  <div className="RD2">
                    <div className="RD3">
                      <h2 ref={time1Ref} style={{ color: "#FF2F2F" }}>
                        21:57
                      </h2>
                      <h2>서울</h2>
                    </div>
                    <h1 style={{ color: "#FF2F2F" }}> ></h1>
                    <div className="RD3">
                      <h2 ref={time2Ref} style={{ color: "#FF2F2F" }}>
                        00:42
                      </h2>
                      <h2>부산</h2>
                    </div>
                  </div>
                  <div className="RD4">
                    <button className="RD5" onClick={next2}>
                      운임요금
                    </button>
                    <button className="RD5" onClick={handleButtonClickWithText}>
                      <h2 ref={priceRef}>59,800원</h2>
                    </button>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="data">
              <div className="RB">
                <div className="RD">
                  <div className="RD2">
                    <div className="RD3">
                      <h2 ref={time1Ref} style={{ color: "#FF2F2F" }}>
                        22:57
                      </h2>
                      <h2>서울</h2>
                    </div>
                    <h1 style={{ color: "#FF2F2F" }}> ></h1>
                    <div className="RD3">
                      <h2 ref={time2Ref} style={{ color: "#FF2F2F" }}>
                        00:42
                      </h2>
                      <h2>부산</h2>
                    </div>
                  </div>
                  <div className="RD4">
                    <button className="RD5" onClick={next2}>
                      운임요금
                    </button>
                    <button className="RD5" onClick={handleButtonClickWithText}>
                      <h2 ref={priceRef}>59,800원</h2>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="data">
              <div className="RB">
                <div className="RD">
                  <div className="RD2">
                    <div className="RD3">
                      <h2 ref={time1Ref} style={{ color: "#FF2F2F" }}>
                        21:57
                      </h2>
                      <h2>서울</h2>
                    </div>
                    <h1 style={{ color: "#FF2F2F" }}> ></h1>
                    <div className="RD3">
                      <h2 ref={time2Ref} style={{ color: "#FF2F2F" }}>
                        00:42
                      </h2>
                      <h2>부산</h2>
                    </div>
                  </div>
                  <div className="RD4">
                    <button className="RD5" onClick={next2}>
                      운임요금
                    </button>
                    <button className="RD5" onClick={handleButtonClickWithText}>
                      <h2 ref={priceRef}>59,800원</h2>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="data">
              <div className="RB">
                <div className="RD">
                  <div className="RD2">
                    <div className="RD3">
                      <h2 ref={time1Ref} style={{ color: "#FF2F2F" }}>
                        21:57
                      </h2>
                      <h2>서울</h2>
                    </div>
                    <h1 style={{ color: "#FF2F2F" }}> ></h1>
                    <div className="RD3">
                      <h2 ref={time2Ref} style={{ color: "#FF2F2F" }}>
                        00:42
                      </h2>
                      <h2>부산</h2>
                    </div>
                  </div>
                  <div className="RD4">
                    <button className="RD5" onClick={next2}>
                      운임요금
                    </button>
                    <button className="RD5" onClick={handleButtonClickWithText}>
                      <h2 ref={priceRef}>59,800원</h2>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rail;
