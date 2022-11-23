import React from "react";
import Head from "next/head";

function Button() {
  return (
    <div className="ml-8">
      <button
        type="button"
        className="text-white bg-blue-800 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 "
      >
       Get a Demo
      </button>
    </div>
  );
}

export default Button;
