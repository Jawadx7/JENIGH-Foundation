import "../../App.css";

const HoverButton = ({ text }) => {
  return (
    <button className="btn .btn_primary">
      {text} <span className="btn_span"></span>
    </button>
  );
};

export default HoverButton;
