"use client";
import { removeLocalStorage } from "@/utils/localStorage";
import { signOut } from "next-auth/react";
import Link from "next/link";
export type UserProps = {
  user?: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
};
const Navbar = ({ session }: { session: UserProps | null }) => {
  const handleLogout=()=>{
    signOut()
    removeLocalStorage("accessToken")
    // console.log("logOut")
  }
  const accessToken=localStorage.getItem("accessToken");
  console.log(accessToken)
  return (
    <div className="navbar bg-base-100  border-b  w-[90%] mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/support">Support</Link>
            </li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl">
          NextAuth
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/support">Support</Link>
          </li>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {session?.user || accessToken ? (
          <button onClick={handleLogout} className="btn btn-error btn-outline text-white rounded-full px-5">
            Logout
          </button>
        ) : (
          <Link
            href="/login"
            className="btn btn-accent btn-outline text-white rounded-full px-5"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
