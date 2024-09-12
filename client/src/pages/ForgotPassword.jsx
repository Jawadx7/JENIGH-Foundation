import { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  // const handleEmailSubmit = () => {};

  return (
    <div className="p-2 md:w-1/2 w-full mx-auto h-[100vh] flex align-center justify-center flex-col">
      <h1 className="text-5xl font-[700]">
        Enter Your Email to Reset Password
      </h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mt-5 p-2 border-2 border-slate-950"
      />
    </div>
  );
};
export default ForgotPassword;
