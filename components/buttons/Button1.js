import React from "react";
import Head from "next/head";

function Button() {
  return (
    <div className="ml-1 pt-2">
    <button
      type="button"
      className=" button1 bg-transparent font-bold text-xs p-2  py-3 px-4 border-2 rounded-lg whitespace-nowrap"
    >
      Get sandbox access
    </button>
  </div>
  );
}

export default Button;
