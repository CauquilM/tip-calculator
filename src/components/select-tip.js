/* eslint-disable jsx-a11y/anchor-is-valid */
function SelectTip(props) {
  const returnTip = () => {
    props.returnTip(props.amount);
  };
  return (
    <div>
      <a className="waves-effect waves-light btn" onClick={returnTip}>
        {props.amount}%
      </a>
    </div>
  );
}

export default SelectTip;
