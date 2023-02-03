import "../App.css";
import { AppContext } from "./Main";
import { useContext } from "react";

export const Buttons = () => {
  const { qNumber, setqNumber, check, status } = useContext(AppContext);
  const change = (ID) => {

    for (let i = 0; i < check.length; i++) {
      if (i === qNumber - 1) {
        check[i]=true;
        status[i] = ID;
      }
    }
     
  for (let i = 0; i < check.length; i++) {
    console.log(check[i]);
  }
  
   
    setqNumber(qNumber + 1);
  };
  return (
    <div
      className="box"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "100px 0px 0px 0px",
        zIndex: 1,
        overflow: "hidden",
      }}
    >
      <div className="slider">
        <button
          onClick={() => change(1)}
          id="pt-1"
          style={{
            backgroundColor: status[qNumber - 2] === 1 ? "green" : "black",
          }}
          className="point"
        >
          .
        </button>
        <button
          onClick={() => change(2)}
          id="pt-2"
          style={{
            backgroundColor: status[qNumber - 2] === 2 ? "green" : "black",
          }}
          className="point "
        >
          .
        </button>
        <button
          onClick={() => change(3)}
          id="pt-3"
          style={{
            backgroundColor: status[qNumber - 2] === 3 ? "green" : "black",
          }}
          className="point "
        >
          .
        </button>
        <button
          onClick={() => change(4)}
          id="pt-4"
          style={{
            backgroundColor: status[qNumber - 2] === 4 ? "green" : "black",
          }}
          className="point "
        >
          .
        </button>
        <button
          onClick={() => change(5)}
          id="pt-5"
          style={{
            backgroundColor: status[qNumber - 2] === 5 ? "green" : "black",
          }}
          className="point "
        >
          .
        </button>
      </div>

      <div className="Ans">
          <h5>Strongly Disagree</h5>
          <h5>Disagree</h5>
          <h5>Neutral</h5>
          <h5>Agree</h5>
          <h5>Strongly Agree</h5>
      </div>
    </div>
  );
};
