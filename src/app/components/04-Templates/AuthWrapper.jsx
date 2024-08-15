import React from "react";

export default function AuthWrapper({ children }) {
  return (
    <div className="flex justify-center items-center w-full h-[100vh] bg-slate-100">
      <div className="shadow w-[300px] bg-white p-6 rounded flex flex-col gap-3">{children}</div>
    </div>
  );
}
