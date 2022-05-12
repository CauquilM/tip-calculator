function PeopleNumber(props) {
  const returnPeople = (tip) => {
    props.returnPeople(tip);
  };
  return (
    <div className="input-field">
      <span className="icon">
        <i className="material-icons prefix" style={{ color: "#a3babb" }}>
          person
        </i>
      </span>
      <input
        dir="rtl"
        style={{
          borderBottom: "none",
          boxShadow: "none",
          backgroundColor: "#f3f8fb",
        }}
        placeholder="0"
        type="number"
        className="test"
        min={1}
        onChange={(event) => returnPeople(event.target.value)}
      />
    </div>
  );
}

export default PeopleNumber;
