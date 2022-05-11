import Bill from "./bill";

function MainCard() {
  return (
    <div className="col s8 offset-s2">
      <div className="card white">
        <div className="card-content white-text">
          <Bill />
        </div>
      </div>
    </div>
  );
}

export default MainCard;
