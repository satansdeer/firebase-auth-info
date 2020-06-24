import React, { useContext } from "react";
import { AuthPage } from "./AuthPage";
import "./App.css";
import { UserContext } from "./UserContext";

function App() {
  const currentUser = useContext(UserContext);

  return (
    <>
      {currentUser && (
        <>
          <img
            src={currentUser.photoURL}
            width="100"
            height="100"
            alt="avatar"
          />
          <p>{currentUser.displayName}</p>
          <p>{currentUser.email}</p>
        </>
      )}
      <AuthPage />
    </>
  );
}

export default App;
