function Bill(props) {
  const returnBill = (tip) => {
    props.returnBill(tip);
  };
  return (
    <div className="input-field">
      <span className="icon">
        <i className="material-icons prefix" style={{ color: "#a3babb" }}>
          attach_money
        </i>
      </span>
      <input
        dir="rtl"
        style={{
          borderBottom: "none",
          boxShadow: "none",
          backgroundColor: "#f3f8fb",
        }}
        lang="en"
        id="bill"
        placeholder="0"
        min={0}
        type="number"
        className="validate"
        onChange={(event) => returnBill(event.target.value)}
      />
    </div>
  );
}

export default Bill;
