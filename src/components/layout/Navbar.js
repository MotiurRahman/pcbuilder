import Link from "next/link";
import React from "react";
import Categories from "./Categories";
import { useSession, signIn, signOut } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";
const notify = () =>
  toast("You must be signed in to view the protected content on this page.");
const Navbar = () => {
  const { data: session } = useSession();

  console.log(session?.user);
  // const session = await getServerSession(req, res, authOptions)
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>All Categories</a>
              <Categories></Categories>
            </li>
            <li>
              <Link type="btn" href="/pcbuilder">
                PC Builder
              </Link>
            </li>
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl" href="/">
          PC Builder
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li tabIndex={0}>
            <details>
              <summary>All Categories</summary>
              <Categories></Categories>
            </details>
          </li>
          <li>
            {session?.user ? (
              <Link type="btn" href="/pcbuilder">
                PC Builder
              </Link>
            ) : (
              <>
                <button type="btn" onClick={notify}>
                  PC Builder
                </button>
                <Toaster />
              </>
            )}
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {/* <Link href="/login">Login</Link> */}

        {session?.user ? (
          <>
            <img
              className="mx-2 rounded-full"
              width="50px"
              height="50px"
              src={session.user.image}
            ></img>
            <button
              onClick={() => signOut()}
              className="inline-block px-4 py-2 text-blue-600 border border-blue-600 rounded-md font-semibold shadow-md hover:bg-blue-100 hover:text-blue-700 transition duration-300 ease-in-out"
            >
              <i className="fab fa-google mr-2"></i>Logout
            </button>
          </>
        ) : (
          <button
            onClick={() =>
              signIn("google", { callbackUrl: "http://localhost:3000" })
            }
            className="inline-block px-4 py-2 text-white bg-blue-600 rounded-md font-semibold shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            <i className="fab fa-google mr-2"></i>Google Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
