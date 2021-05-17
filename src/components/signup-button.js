import React from "react";
import tw from "twin.macro";
import {
    PrimaryLink as PrimaryLinkBase
} from "./headers/light.js";

const SignupButton = () => {
const PrimaryLink = tw(PrimaryLinkBase)`shadow-raised lg:bg-primary-800 lg:hocus:bg-primary-700`;

  return (
    <PrimaryLink>Sign Up</PrimaryLink>
  );
};

export default SignupButton;