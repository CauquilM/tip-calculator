function PeopleNumber(props) {
  const returnPeople = (tip) => {
    props.returnPeople(tip);
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
        min={1}
        onChange={(event) => returnPeople(event.target.value)}
      />
    </div>
  );
}

export default PeopleNumber;
