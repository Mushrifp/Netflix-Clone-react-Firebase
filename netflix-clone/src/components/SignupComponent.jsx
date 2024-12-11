import React, { useState } from "react";
import pic from "../assets/background_banner.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/Context";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignupComponent() {
  const navigate = useNavigate();

  const { user, signIn } = useAuth();

  if (user) {
    navigate("/");
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formSubmit = async (e) => {
    e.preventDefault();

    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!regex.test(email)) {
      toast.error("Enter Valid Mail!");
      return;
    }

    if (password.length < 6) {
      toast.error("Password 6 Character");
      return;
    }

    try {
      await signIn(email, password);
      toast.success("SignUp Successful!");
      navigate("/");
    } catch (error) {
      console.log(error);

      if (error.code === "auth/email-already-in-use") {
        toast.error("This email is already in use.");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <>
      <div className="relative">
        <img
          src={pic}
          alt="banner"
          className="w-screen h-screen object-cover"
        />

        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 flex items-center justify-center">
          <div className="bg-black bg-opacity-70 p-8 rounded shadow-lg w-full max-w-sm">
            <h2 className="text-3xl text-white mb-6 text-start">Sign Up</h2>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white mb-1">
                  {" "}
                  Email{" "}
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border text-black border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-1">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border text-black border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div>
                <button
                  onClick={formSubmit}
                  className="w-full mt-5 py-2 px-4 bg-red-600 text-white  rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Sign Up
                </button>
              </div>

              <div>
                <span>Already have an account ?</span>

                <Link className="px-2" to="/login">
                  Log In
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignupComponent;
