import "../styles/components/LabelWithHighlight.scss";

const LabelWithHighlight = ({
  title,
  color = "#F8F6E3",
  boxw,
  boxh,
  fontSize = 32,
  fontWeight = 400,
  transform = 15,
}) => {
  return (
    <>
      <div className="label-with-highlight">
        <h1
          style={{
            fontSize: fontSize + "px",
            fontWeight: fontWeight,
          }}
        >
          {title}
        </h1>
        <div
          className="highlight"
          style={{
            backgroundColor: color,
            height: boxh + "rem",
            width: boxw + "rem",
            transform: transform ? `translate(0px, -${transform}px)` : "none",
          }}
        ></div>
      </div>
    </>
  );
};

export default LabelWithHighlight;