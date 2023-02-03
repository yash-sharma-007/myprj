import { Progress } from "./Progress";
import { useContext } from "react";
import { AppContext } from "./Main";

export const ProgressBlock = () => {
  const { qNumber } = useContext(AppContext);
  return (
    <div
      style={{
        display: "flex",
        flexdirection: "column",
        justifyContent: "center",
        
      }}
    >
      <span style={{ margin: "0px 60px 0px 0px" , width:'100px' }}>
        {" "}
        {qNumber < 6 ? <Progress pr={qNumber * 20} /> : <Progress pr={100} />}
        <h3> IDEALISTIC </h3>
      </span>

      <span style={{ margin: "0px 60px 0px 60px" , width:'100px' }}>
        {" "}
        {qNumber > 5 && qNumber < 11 ? (
          <Progress pr={(qNumber - 5) * 20} />
        ) : qNumber < 6 ? (
          <Progress pr={0} />
        ) : (
          <Progress pr={100} />
        )}{" "}
        <h3> DISILLUSIONED </h3>{" "}
      </span>

      <span style={{ margin: "0px 60px 0px 60px" , width:'100px' }}>
        {" "}
        {qNumber > 10 && qNumber < 16 ? (
          <Progress pr={(qNumber - 10) * 20} />
        ) : qNumber < 11 ? (
          <Progress pr={0} />
        ) : (
          <Progress pr={100} />
        )}{" "}
        <h3> DISILLUSIONED </h3>{" "}
      </span>

      <span style={{ margin: "0px 60px 0px 60px" , width:'100px' }}>
        {" "}
        {qNumber > 15 && qNumber < 21 ? (
          <Progress pr={(qNumber - 15) * 20} />
        ) : qNumber < 16 ? (
          <Progress pr={0} />
        ) : (
          <Progress pr={100} />
        )}{" "}
        <h3> DISILLUSIONED </h3>{" "}
      </span>
    </div>
  );
};
