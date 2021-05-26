import React from "react";
import tw from "twin.macro";

const NavLink = tw.a`
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500
`;
const PrimaryLinkBase = tw(NavLink)`
  lg:mx-2
  px-8 py-3 rounded bg-primary-500 text-gray-100
  hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline
  border-b-0
`;
const PrimaryLink = tw(PrimaryLinkBase)`shadow-raised lg:bg-primary-800 lg:hocus:bg-primary-700`;


const LoginButton = () => {
  return (
    <PrimaryLink href="login">Log In</PrimaryLink>
  );
};

export default LoginButton;