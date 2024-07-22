import { LastfmLogo, Student } from "@phosphor-icons/react";
import { NavBar } from "./nav-bar";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="flex items-center justify-between bg-gradient-to-r from-black via-black/90 to-black text-white h-20 w-full text-lg">
      <Link to={"/"}>
        <h1 className="text-2xl font-bold p-2 ml-8"><LastfmLogo size={45} className='hover:text-blue-500 transition-all duration-500 ease-in-out'/></h1>
      </Link>
      <section className="flex gap-10 mr-8">
        <NavBar />
        <Link to="/users">
          <Student size={25} weight="bold" className="text-pink-500" />
        </Link>
      </section>
    </header>
  );
};

