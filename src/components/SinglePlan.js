import React from "react";
import Button from "./Button";
import { PLAN_SPECS } from "../helpers/constants";
import { ICONS } from "../helpers/icons";

function SinglePlan({ plan }) {
  const PlanIcon = ICONS[plan.name];

  return (
    <div className={`single-plan single-plan--${plan.name}`}>
      <div className="single-plan__info">
        <PlanIcon />
        <p>{plan.name}</p>
        <p
          className={`single-plan__info--best single-plan__info--${
            plan.bestValue ? "visible" : "hidden"
          }`}
        >
          Best Value
        </p>
      </div>

      <p className={`single-plan__info__description--${plan.name}`}>
        {plan.description}
      </p>

      <div className="single-plan__pricing">
        <p className="single-plan__pricing__highlight">
          {plan.price !== null ? `$${plan.price}` : "Let's talk"}
        </p>
        <p
          className={`single-plan__pricing__price ${
            plan.price === null && "single-plan__pricing__price--hidden"
          }`}
        >
          {" "}
          / month
        </p>
      </div>

      <div className="single-plan__specs">
        {/* Map specs and add the data */}
        {PLAN_SPECS.map((spec) => {
          // If there is 'special' attribute and it doesn't include the plan, don't return
          if (spec?.special && !spec?.special?.includes(plan.name[0]))
            return false;

          const isSpecIncluded = spec.included.includes(plan.name[0]);
          const iconType = isSpecIncluded ? "Check" : "Cross";
          const Icon = ICONS[iconType];

          return (
            <div className="single-plan__spec">
              <Icon />
              <p
                className={!isSpecIncluded && "single-plan__spec--not-included"}
              >
                {spec.text}
              </p>
            </div>
          );
        })}
      </div>

      <Button
        class="button"
        type={`${plan.name === "Enterprise" ? "white" : "red"}`}
      ></Button>
    </div>
  );
}

export default SinglePlan;
