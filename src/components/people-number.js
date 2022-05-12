function PeopleNumber(props) {
  const returnPeople = (tip) => {
    props.returnPeople(tip);
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
        min={1}
        onChange={(event) => returnPeople(event.target.value)}
      />
    </div>
  );
}

export default PeopleNumber;
