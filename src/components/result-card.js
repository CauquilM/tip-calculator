/* eslint-disable jsx-a11y/anchor-is-valid */
function ResultCard(props) {
  return (
    <div
      className="card small blue-grey darken-3 section"
      style={{ borderRadius: "12px", height: "400px" }}
    >
      <div className="card-content white-text">
        <div className="row">
          <div className="col s6">
            <p className="left-align">
              Tip Amount
              <br />
              <span style={{ color: "#90a4ae" }}>/ person</span>
            </p>
          </div>
          <div className="col s6">
            <p
              style={{ fontSize: "2em", color: "#25c3ad", fontWeight: "bold" }}
            >
              ${props.tipPerson}
            </p>
          </div>
        </div>
        <div className="row section" style={{ marginTop: "35px" }}>
          <div className="col s6">
            <p className="left-align">
              Total
              <br />
              <span style={{ color: "#90a4ae" }}>/ person</span>
            </p>
          </div>
          <div className="col s6">
            <p
              style={{ fontSize: "2em", color: "#25c3ad", fontWeight: "bold" }}
            >
              ${props.totalPerson}
            </p>
          </div>
        </div>
        <a
          class="waves-effect waves-light btn"
          style={{ marginTop: "125px", color: "#00474a", borderRadius: "4px" }}
        >
          Reset
        </a>
      </div>
    </div>
  );
}

export default ResultCard;
