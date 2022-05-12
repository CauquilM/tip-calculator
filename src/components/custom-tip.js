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
          backgroundColor: "#f3f8fb"
        }}
        placeholder="Custom"
        type="number"
        className="custom"
        onChange={(event) => returnTip(event.target.value)}
      />
    </div>
  );
}

export default CustomTip;
