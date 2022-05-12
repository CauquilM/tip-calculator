function CustomTip(props) {
  const returnTip = (tip) => {
    props.returnTip(tip);
  };
  return (
    <div>
      <input
        dir="rtl"
        style={{
          borderBottom: "none",
          boxShadow: "none",
        }}
        placeholder="0"
        type="number"
        className="validate"
        onChange={(event) => returnTip(event.target.value)}
      />
    </div>
  );
}

export default CustomTip;
