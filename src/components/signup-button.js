import React from "react";
import tw from "twin.macro";
import {
    PrimaryLink as PrimaryLinkBase
} from "./headers/light.js";

const SignupButton = () => {
const PrimaryLink = tw(PrimaryLinkBase)`shadow-raised lg:bg-primary-800 lg:hocus:bg-primary-700`;

  return (
    <PrimaryLink href="signup" onClick={() => console.log('hi')}>Sign Up</PrimaryLink>
  );
};

export default SignupButton;