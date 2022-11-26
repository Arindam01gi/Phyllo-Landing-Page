import React from "react";
import Head from "next/head";

function Button() {
  return (
    <div className="ml-2">
      <button
        type="button"
        className=" button2 text-white bg-blue-800 hover:bg-blue-800 font-bold text-xs p-1 text-center py-3 px-5 border-2 rounded-lg  dark:bg-blue-600 dark:hover:bg-blue-700  whitespace-nowrap "
      >
       Get a Demo
      </button>
    </div>
  );
}

export default Button;
