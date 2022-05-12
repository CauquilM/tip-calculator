function Bill(props) {
  const returnBill = (tip) => {
    props.returnBill(tip);
  };
  return (
    <div>
      <input
        dir="rtl"
        style={{
          borderTop: "1px solid",
          borderRight: "1px solid",
          borderLeft: "1px solid",
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
