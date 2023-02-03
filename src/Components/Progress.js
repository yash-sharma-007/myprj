import ProgressBar from "react-bootstrap/ProgressBar";

export const Progress = (props) => {
  const now = 60;
  return (
    <span style={{ width: "25%", overflowX: "hidden" }}>
      <ProgressBar
        className="m-2"
        style={{
          width: `${props.pr}%`,
          display: "inline-block",
          backgroundColor: "blue",
          float: "left",
        }}
        now={now}
        label={`${now}%`}
        visuallyHidden
      />
     </span>
  );
};
