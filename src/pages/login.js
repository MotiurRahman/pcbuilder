import React from "react";

const login = () => {
  return (
    <div>
      <a
        href="#"
        class="inline-block px-4 py-2 text-white bg-blue-600 rounded-md font-semibold shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
      >
        Login with Google
      </a>

      <a
        href="#"
        class="mt-4 inline-block px-4 py-2 text-blue-600 border border-blue-600 rounded-md font-semibold shadow-md hover:bg-blue-100 hover:text-blue-700 transition duration-300 ease-in-out"
      >
        Logout
      </a>
    </div>
  );
};

export default login;
