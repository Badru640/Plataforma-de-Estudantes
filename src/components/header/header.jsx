import React from 'react';
import { SketchLogo, Student } from "@phosphor-icons/react";
import { NavBar } from "./nav-bar";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="flex items-center justify-between bg-gradient-to-r from-black via-black/90 to-black text-white h-20 w-full text-lg">
      <h1 className="text-2xl font-bold p-2 ml-8"><SketchLogo/></h1>
      <section className="flex gap-10 mr-8">
        <NavBar />
        <Link to="/users">
          <Student size={25} weight="bold" className="text-pink-500" />
        </Link>
      </section>
    </header>
  );
};

export default Header;
