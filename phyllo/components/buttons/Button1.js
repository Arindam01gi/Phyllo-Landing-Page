import React from "react";
import Head from "next/head";

function Button() {
  return (
    <div className="ml-2">
      <button
        type="button"
        className="bg-transparent  text-blue-700 font-bold text-base  py-3 px-4 border-2 border-blue-700  rounded whitespace-nowrap"
      >
        Get Access Sandbox
      </button>
    </div>
  );
}

export default Button;
