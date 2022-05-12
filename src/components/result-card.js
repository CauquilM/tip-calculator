function ResultCard(props) {
  return (
    <div
      className="card small blue-grey darken-1 section"
      style={{ borderRadius: "12px", height: "350px" }}
    >
      <div className="card-content white-text">
        <div className="row">
          <div className="col s6">
            <p>Tip Amount</p>
          </div>
          <div className="col s6">
            <p>{props.tipPerson}</p>
          </div>
        </div>
        <div className="row section">
          <div className="col s6">
            <p>Total</p>
          </div>
          <div className="col s6">
            <p>{props.totalPerson}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultCard;
