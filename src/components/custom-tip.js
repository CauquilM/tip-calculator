function CustomTip(props) {
  const returnTip = (tip) => {
    props.returnTip(tip);
  };
  return (
    <div>
      <input
        dir="rtl"
        min={0}
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
