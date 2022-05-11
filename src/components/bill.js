import { useState } from "react";
import dollar from "../images/icon-dollar.svg"

function Bill() {
  const [bill, setBill] = useState("0");
  return (
    <div>

      {/* <input
        dir="rtl"
        id="funkystyling"
        style={{ borderTop: "1px solid", borderRight: "1px solid", borderLeft: "1px solid" }}
        type="text"
        className="validate"
        onChange={(event) => setBill(event.target.value)}
      />
      <img src={dollar} alt=""></img> */}
    </div>
  );
}

export default Bill;
