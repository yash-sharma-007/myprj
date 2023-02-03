import { ProgressBlock } from "./ProgressBlock";
import { useState } from "react";
import { Buttons } from "./Buttons";
import { createContext } from "react";
import "../App.css";
import { Link } from "react-router-dom";

export const AppContext = createContext();
export const Main = () => {
  const [qNumber, setqNumber] = useState(1);
   const [check] = useState([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]);
  const [status] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);      
  const Questions = [
    "I have ambitious aims of making a difference.",
    "My leadership journey has progressed as I anticipated.",
    "I have spent fewer than 4 years in full time service or ministry.",
    "My plans are likely to succeed.",
    "I’m beginning to believe the journey of service will be much harder than I anticipated.",
    "I question whether I can remain effective in my role long-term.",
    "It is my job to be faithful; it is God’s job to bring about outcomes.",
    "When I face a challenge, I spend meaningful time praying for guidance.",
    "Knowing that Jesus promised trials, I strive to keep the “light and momentary” nature of trials I face in perspective, looking toward a promised future.",
    "Though I have faced many challenges, God has been faithful.",
    "I question whether I can remain effective in my role long-term.",
  ];
  const NextPage = () => {
    if (check[qNumber-1] === true) {
      setqNumber(qNumber + 1);
    }
  };
  const PrevPage = () => {
    setqNumber(qNumber - 1);
  };

  return (
    <div style={{ display:'flex',flexWrap:'wrap' ,justifyContent:'center' , padding: "80px", backgroundColor: "skyblue" }}>
      <AppContext.Provider value={{ qNumber, setqNumber, check, status }}>
        <div className="Main">
          <ProgressBlock />
          <div
            style={{
              margin: "70px 0px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "60%",
                height: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h3> {qNumber}/20 </h3>
              <h4> {Questions[qNumber]} </h4>
            </div>



          </div>
          <Buttons />
          <div className="bt2">
            <Link
              onClick={PrevPage}
              style={{
                
                float: "left",
                margin: "0px 0px 100px 100px",
                backgroundColor: "red",
                borderRadius:'10px',
                padding:'5px',
                border: "skyblue",
                textDecoration: "none",
                color: "black",
              }}
              to={qNumber <= 1 ? "/start" : "/"}
            >
              <h6>PREV</h6>
            </Link>

            <button
              onClick={NextPage}
              style={{
                
                float: "right",
                margin: "0px 100px 100px 0px",
                backgroundColor: "red",
                borderRadius:'10px',
                padding:'5px',
                border: "skyblue",
              }}
            >
              {" "}
              <h6> NEXT </h6>{" "}
            </button>
          </div>
        </div>
      </AppContext.Provider>
    </div>
  );
};
