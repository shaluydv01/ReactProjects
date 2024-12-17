import React from "react";
import { FcGoogle } from "react-icons/fc";
import { auth } from "./components/Firebase";
import { GoogleAuthProvider, signInwithPopup } from "firebase/auth";

const Login = () => {
  const googleClick = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);

    console.log(result);
  };

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center align-items-center">
          <FcGoogle style={{ width: "48px", height: "48px" }} />
        </div>
      </div>
    </>
  );
};

export default Login;
