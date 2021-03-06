import React from "react";
import Burger from "../../components/Burger/Burger";

import Button from "../../components/UI/Button/Button";
import classes from "./CheckoutSummary.css";

const checkoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope tastes well!</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients}></Burger>
      </div>
      <Button btnType="Danger" clicked={props.checkoutCancelledHandler}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.checkoutContinuedHandler}>
        CONTINUE
      </Button>
    </div>
  );
};

export default checkoutSummary;
