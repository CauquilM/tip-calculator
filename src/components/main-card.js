import { useEffect, useState } from "react";
import Bill from "./bill";
import CustomTip from "./custom-tip";
import PeopleNumber from "./people-number";
import ResultCard from "./result-card";
import SelectTip from "./select-tip";

function MainCard() {
  const [returnedBill, setReturnedBill] = useState();
  const [returnedTip, setReturnedTip] = useState();
  const [returnedPeople, setReturnedPeople] = useState();
  const [tipPerson, setTipPerson] = useState("0");
  const [totalPerson, setTotalPerson] = useState("0");

  const toChildrenBill = (bill) => {
    setReturnedBill(bill);
  };

  const toChildrenTip = (tip) => {
    setReturnedTip(tip);
  };

  const toChildrenPeople = (people) => {
    setReturnedPeople(people);
  };

  useEffect(() => {
    const result = () => {
      if (!returnedBill) {
        return;
      }
      if (!returnedTip) {
        return;
      }
      if (!returnedPeople) {
        return;
      }

      let billDivided = returnedBill / returnedPeople;
      let tipPerPerson = billDivided * (returnedTip / 100);
      let totalPerPerson = billDivided + tipPerPerson;
      setTipPerson(
        tipPerPerson.toLocaleString(undefined, { maximumFractionDigits: 2 })
      );
      setTotalPerson(
        totalPerPerson.toLocaleString(undefined, { maximumFractionDigits: 2 })
      );
    };

    result();
  }, [returnedBill, returnedPeople, returnedTip]);
  return (
    <div className="col s8 offset-s2 main-card">
      <div className="card white" style={{ borderRadius: "20px" }}>
        <div className="card-content">
          <div className="row">
            <div className="col s6" style={{ marginTop: "35px" }}>
              <Bill returnBill={toChildrenBill} />
              <div className="row" style={{ marginTop: "35px" }}>
                <div className="col s4">
                  <SelectTip amount="5" returnTip={toChildrenTip} />
                </div>
                <div className="col s4">
                  <SelectTip amount="10" returnTip={toChildrenTip} />
                </div>
                <div className="col s4">
                  <SelectTip amount="15" returnTip={toChildrenTip} />
                </div>

                <div className="col s4">
                  <SelectTip amount="25" returnTip={toChildrenTip} />
                </div>
                <div className="col s4">
                  <SelectTip amount="50" returnTip={toChildrenTip} />
                </div>
                <div className="col s4">
                  <CustomTip returnTip={toChildrenTip} />
                </div>
              </div>
              <div style={{ marginTop: "55px" }}>
                <PeopleNumber returnPeople={toChildrenPeople} />
              </div>
            </div>
            <div className="col s6">
              <ResultCard tipPerson={tipPerson} totalPerson={totalPerson} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainCard;
