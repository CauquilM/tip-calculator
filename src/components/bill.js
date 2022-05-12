function Bill(props) {
  const returnBill = (tip) => {
    props.returnBill(tip);
  };
  return (
    <div>
      <input
        dir="rtl"
        style={{
          borderBottom: "none",
          boxShadow: "none",
          backgroundColor: "#f3f8fb"
        }}
        placeholder="0"
        type="number"
        className="validate"
        onChange={(event) => returnBill(event.target.value)}
      />
    </div>
  );
}

export default Bill;
