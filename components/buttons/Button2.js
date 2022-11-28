import React from "react";
import Head from "next/head";

function Button() {
  return (
    <div className="ml-2 pt-2">
      <button
        type="button"
        className=" button2 text-white bg-blue-800 hover:bg-blue-800 font-bold text-xs text-center lg:p-1  lg:py-3 lg:px-5 p-2  py-3.5 px-10 border-2 rounded-lg  dark:bg-blue-600 dark:hover:bg-blue-700  whitespace-nowrap "
      >
        Get a Demo
      </button>
    </div>
  );
}

export default Button;
