import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Modal from "react-modal";
import { BrowserRouter as Router } from "react-router-dom";
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

Modal.setAppElement("#root");

ReactDOM.render(
  <Router>
      <App />
  </Router>,
  document.getElementById("root")
);
