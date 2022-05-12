/* eslint-disable jsx-a11y/anchor-is-valid */
function SelectTip(props) {
  const returnTip = () => {
    props.returnTip(props.amount);
  };
  return (
    <div>
      <a
        className="waves-effect waves-light btn"
        onClick={returnTip}
        style={{
          backgroundColor: props.selected ? "#a0e7df" : "#00474a",
          color: props.selected ? "black" : "white",
          borderRadius: "5px",
          marginTop: "10px",
          marginBottom: "10px",
          fontSize: "1.2em",
        }}
      >
        {props.amount}%
      </a>
    </div>
  );
}

export default SelectTip;
