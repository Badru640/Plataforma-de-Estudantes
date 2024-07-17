import { NavLink } from "react-router-dom";

const activeStyles = "text-blue-500";
const inactiveStyles = "text-white";
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
