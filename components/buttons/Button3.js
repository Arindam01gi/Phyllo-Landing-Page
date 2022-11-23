import React from "react";
import Head from "next/head";

function Button() {
  return (
    <div className="ml-8 text-center pb-16">
      <button
        type="button"
        className="text-white bg-red-400 text-base rounded-lg  px-12 py-4 mr-2 mb-2 dark:bg-red-400 dark:hover:bg-red-400 p-4 m-2"
      >
        Know More
      </button>
    </div>
  );
}

export default Button;
