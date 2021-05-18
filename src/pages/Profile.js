import React, {useState, useEffect} from "react";
import {Auth} from 'aws-amplify'
import tw from "twin.macro";
import {PrimaryButton as PrimaryButtonBase} from "../components/misc/Buttons.js"
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { usePlaidLink } from 'react-plaid-link';
import axios from "axios";



const PrimaryButton = tw(PrimaryButtonBase)`mt-8 text-sm sm:text-base px-6 py-5 sm:px-10 sm:py-5 bg-primary-800 inline-block hocus:bg-primary-700`;

const Profile = (e) => {
  const [authenticated, setAuthenticated] = useState(false)
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [linkToken, setLinkToken] = useState("");
  
  useEffect(() => {
    if (authenticated && linkToken === "") {
      handleLink()
      return;
    }
    async function isAuthenticated() {
      try {
        const currentSession = await Auth.currentSession()
        console.log(currentSession)
        setfirstName(currentSession.idToken.payload.given_name)
        setlastName(currentSession.idToken.payload.family_name)
        setEmail(currentSession.idToken.payload.email)
        setAuthenticated(true)
      } catch (error) {
        console.log(error)
      }
    }
    isAuthenticated()
  }, [authenticated])

  const handleLink = () => {
    axios.get(`https://localhost:8000/get-link-token?email=${email}`)
    .then((res) => {
      setLinkToken(res.data['link-token'])
    })
    .catch((e) => console.log(e))
  }


  const config = {
    token: linkToken,
    onSuccess: (public_token, metadata) => {
      const postBody = {
        "public_token": public_token,
        "accounts": metadata.accounts,
        "institution": metadata.institution,
        "link_session_id": metadata.link_session_id,
        "email": email,
      };
      axios.post('https://localhost:8000/public-token', postBody)
      .then(() => {
        console.log("sent public token")
      })
    },
    onLoad: () => {},
    onExit: (err, metadata) => {},
    onEvent: (eventName, metadata) => {},
  };
  const { open, ready } = usePlaidLink(config);
  
  return firstName ? (
    <AnimationRevealPage>
           <span><h2>{firstName} {lastName}</h2></span>
        <PrimaryButton onClick={open} disabled={!ready}as="b"> Connect Bank </PrimaryButton>
    </AnimationRevealPage>
  )
  :
  (
    <h1>loading</h1>
  )
};

export default Profile;