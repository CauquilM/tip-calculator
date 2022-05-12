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
  // const [selected, setSelected] = useState();

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
      <div className="card white" style={{ borderRadius: "20px", marginTop: "40px" }}>
        <div className="card-content" style={{ paddingBottom: "1px"}}>
          <div className="row">
            <div className="col s6" style={{ marginTop: "10px" }}>
              <fieldset style={{ border: "none" }}>
                <legend className="left-align teal-text text-darken-1">
                  Bill
                </legend>
                <Bill returnBill={toChildrenBill} />
              </fieldset>
              <fieldset style={{ border: "none" }}>
                <legend className="left-align teal-text text-darken-1">
                  Select Tip %
                </legend>
                <div className="row">
                  <div className="col s4">
                    {returnedTip === "5" ? (
                      <SelectTip
                        amount="5"
                        returnTip={toChildrenTip}
                        selected={true}
                      />
                    ) : (
                      <SelectTip
                        amount="5"
                        returnTip={toChildrenTip}
                        selected={false}
                      />
                    )}
                  </div>
                  <div className="col s4">
                    {returnedTip === "10" ? (
                      <SelectTip
                        amount="10"
                        returnTip={toChildrenTip}
                        selected={true}
                      />
                    ) : (
                      <SelectTip
                        amount="10"
                        returnTip={toChildrenTip}
                        selected={false}
                      />
                    )}
                  </div>
                  <div className="col s4">
                    {returnedTip === "15" ? (
                      <SelectTip
                        amount="15"
                        returnTip={toChildrenTip}
                        selected={true}
                      />
                    ) : (
                      <SelectTip
                        amount="15"
                        returnTip={toChildrenTip}
                        selected={false}
                      />
                    )}
                  </div>

                  <div className="col s4">
                    {returnedTip === "25" ? (
                      <SelectTip
                        amount="25"
                        returnTip={toChildrenTip}
                        selected={true}
                      />
                    ) : (
                      <SelectTip
                        amount="25"
                        returnTip={toChildrenTip}
                        selected={false}
                      />
                    )}
                  </div>
                  <div className="col s4">
                    {returnedTip === "50" ? (
                      <SelectTip
                        amount="50"
                        returnTip={toChildrenTip}
                        selected={true}
                      />
                    ) : (
                      <SelectTip
                        amount="50"
                        returnTip={toChildrenTip}
                        selected={false}
                      />
                    )}
                  </div>
                  <div className="col s4">
                    <CustomTip returnTip={toChildrenTip} />
                  </div>
                </div>
              </fieldset>
              <div>
              <fieldset style={{ border: "none" }}>
                <legend className="left-align teal-text text-darken-1">
                  Number of People
                </legend>
                <PeopleNumber returnPeople={toChildrenPeople} />
              </fieldset>
                
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
