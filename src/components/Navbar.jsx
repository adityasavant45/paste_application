import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex flex-row justify-center md:flex-row md:items-center md:justify-center gap-4 p-4 bg-gray-800 text-white text-xl">
      <NavLink to="/" className={({isActive})=>` transition ${isActive?"text-orange-500":"text-gray-300"}`}>
        Home
      </NavLink>
      <NavLink to="/pastes" className={({isActive})=>` transition" ${isActive?"text-orange-500":"text-gray-300"}`}>
        Pastes
      </NavLink>
    </div>
  );
}

export default Navbar;
