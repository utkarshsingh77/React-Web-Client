import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import tw from "twin.macro";

import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { usePlaidLink } from 'react-plaid-link';



const PrimaryButton = tw(PrimaryButtonBase)`mt-8 text-sm sm:text-base px-6 py-5 sm:px-10 sm:py-5 bg-primary-800 inline-block hocus:bg-primary-700`;

const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;
  const config = {
    token: "link-development-1ac2b953-74bd-4bcf-8a39-96bc208655d2",
    onSuccess: (public_token, metadata) => {},
    onLoad: () => {},
    onExit: (err, metadata) => {},
    onEvent: (eventName, metadata) => {},
  };
  const { open, ready, error } = usePlaidLink(config);

  return (
    <AnimationRevealPage>
      <img
            src={picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        <div className="col-md text-center text-md-left">
          <h2>{name}</h2>
          <p className="lead text-muted">{email}</p>
        </div>
      <div className="row">
        <pre className="col-12 text-light bg-dark p-4">
          {JSON.stringify(user, null, 2)}
        </pre>
        <h1>phone: {user.phone}</h1>
        <PrimaryButton onClick={() => open()} disabled={!ready}as="b"> Connect Bank </PrimaryButton>
        </div>
    </AnimationRevealPage>
  );
};

export default Profile;