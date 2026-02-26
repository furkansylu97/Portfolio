import { NavLink } from "react-router-dom";
import type { NavItemType } from "../data/navData";

interface Props {
  item: NavItemType;
}

const NavItem = ({ item }: Props) => {
  if (!item.to) return null;

  return (
    <li className="relative">
      <NavLink
        to={item.to}
        className={({ isActive }) =>
          `
          whitespace-nowrap
          transition-all duration-300
          hover:text-cyan-500 hover:scale-[1.02]
          ${isActive && item.to !== "/" ? "text-cyan-500" : "text-white"}
          `
        }
      >
        {item.label}
      </NavLink>
    </li>
  );
};

export default NavItem;