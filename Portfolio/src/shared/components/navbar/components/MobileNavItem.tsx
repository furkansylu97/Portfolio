import { memo } from "react";
import { NavLink } from "react-router-dom";
import type { NavItemType } from "../data/navData";

interface Props {
  item: NavItemType;
  onNavigate: () => void;
}

const MobileNavItem = memo(({ item, onNavigate }: Props) => {
  if (!item.to) return null;

  return (
    <li className="py-2">
      <NavLink
        to={item.to}
        onClick={onNavigate}
        className={({ isActive }) =>
          `
          block font-medium transition-colors duration-300
          ${isActive && item.to !== "/" ? "text-cyan-500" : "text-white"}
          `
        }
      >
        {item.label}
      </NavLink>
    </li>
  );
});

export default MobileNavItem;