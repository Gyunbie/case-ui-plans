import React from "react";
import SinglePlan from "../components/SinglePlan";
import { PLAN_OPTIONS } from "../helpers/constants";

function Home() {
  return (
    <div className="plans">
      <div className="plans__information">
        <h1 className="plans__information__heading">
          Simple, transparent pricing
        </h1>
        <p className="plans__information__description">
          No contracts. No surprise fees
        </p>
      </div>

      <div id="plans" className="plans__section">
        {PLAN_OPTIONS.map((plan) => {
          return <SinglePlan plan={plan} />;
        })}
      </div>
    </div>
  );
}

export default Home;
