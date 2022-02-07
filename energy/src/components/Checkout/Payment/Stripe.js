import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import Payment from "./payment";

const stripePromise = loadStripe(
  "pk_test_51JtI2eDJpnEFn3RgaDA2Jrhr1IuuyO5zVV3Vh0xghqnhoPbLsZujtYrnHJiCOjXBI3oA9FNjCauaAN60qTqj2a7e00jz3NuBtC"
);

export default function Stripe() {
  return (
    <Elements stripe={stripePromise}>
      <Payment />
    </Elements>
  );
}
