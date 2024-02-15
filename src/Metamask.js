import React, { useState } from "react";

const Metamask = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [isSignedIn, setIsSignedIn] = useState(false);

  const connectWallet = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          accountChanged([result[0]]);
          setIsSignedIn(true);
        });
    } else {
      setErrorMessage("Install Metamask");
    }
  };

  const signOut = () => {
    // Clear any user-related data and reset states
    setDefaultAccount(null);
    setUserBalance(null);
    setIsSignedIn(false);
  };

  const accountChanged = (accountName) => {
    setDefaultAccount(accountName);
  };

  return (
    <div className="">
      {isSignedIn ? (
        <div>
         
          <button
            onClick={signOut}
            className="flex px-10 justify-center rounded-md bg-red-500 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <button
          onClick={connectWallet}
          className="flex px-10 justify-center rounded-md bg-indigo-600 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Sign In
        </button>
      )}

      {errorMessage}
    </div>
  );
};

export default Metamask;
