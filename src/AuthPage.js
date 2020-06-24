import React, { useState, useEffect } from "react";
import firebase from "firebase";
import { app } from "./base";

export const AuthPage = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  const authWithGoogle = () => {
    firebase.auth().signInWithPopup(provider);
  };

  return (
    <>
      <button onClick={authWithGoogle}>Login</button>
    </>
  );
};
