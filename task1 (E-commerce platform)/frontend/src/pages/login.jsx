import React, { useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (currentState === "Login") {
      console.log("Login Submitted");
    } else {
      console.log("Sign Up Submitted");
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-[#3A2D28]"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="font-medium text-3xl">
          {currentState}
        </p>
        <hr className="border-none h-[1.5px] w-8 bg-[#C9A227]" />
      </div>

      {currentState === "Sign Up" && (
        <input
          type="text"
          placeholder="Full Name"
          className="w-full px-3 py-3 border border-[#E8D8B5] rounded outline-none"
          required
        />
      )}

      <input
        type="email"
        placeholder="Email Address"
        className="w-full px-3 py-3 border border-[#E8D8B5] rounded outline-none"
        required
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full px-3 py-3 border border-[#E8D8B5] rounded outline-none"
        required
      />

      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer text-[#8B7355]">
          Forgot Password?
        </p>

        {currentState === "Login" ? (
          <p
            onClick={() => setCurrentState("Sign Up")}
            className="cursor-pointer text-[#7A1E2C]"
          >
            Create Account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Login")}
            className="cursor-pointer text-[#7A1E2C]"
          >
            Login Here
          </p>
        )}
      </div>

      <button
        type="submit"
        className="
          bg-[#7A1E2C]
          text-white
          font-light
          px-8
          py-3
          mt-4
          rounded
          hover:bg-[#611626]
          transition
        "
      >
        {currentState === "Login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;