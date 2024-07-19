import { NavLink } from "react-router-dom";

const activeStyles = "text-blue-500 hover:text-blue-400 transition-all duration-500 ease-in-out";
const inactiveStyles = "text-white hover:text-blue-400 transition-all duration-500 ease-in-out";
export const NavBar = () => {
  return (
    <nav className="space-x-10 text-lg ">
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          `${isActive ? activeStyles : inactiveStyles}`
        }
      >
        Página Inicial
      </NavLink>
     
      
      <NavLink
        to={"/contact"}
        className={({ isActive }) =>
          `${isActive ? activeStyles : inactiveStyles}`
        }
      >
        Contactos
      </NavLink>
      
    
    </nav>
  );
};
