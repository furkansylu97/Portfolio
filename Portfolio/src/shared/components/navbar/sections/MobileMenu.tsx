import { useEffect, useRef } from "react";
import { navData } from "../data/navData";
import MobileNavItem from "../components/MobileNavItem";

interface Props {
  open: boolean;
  onClose: () => void;
}

const MobileMenu = ({ open, onClose }: Props) => {
  const scrollY = useRef(0);

  useEffect(() => {
    if (!open) return;

    scrollY.current = window.scrollY;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY.current}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";

      window.scrollTo(0, scrollY.current);
    };
  }, [open]);

  return (
    <>
      <div
        onClick={onClose}
        className={`
          fixed inset-0 bg-black/40 z-40 lg:hidden
          transition-opacity duration-300
          ${open ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      />

      <nav
        aria-label="Mobil Menü"
        className={`
          fixed top-0 left-0 h-screen w-[80%] max-w-xs
          bg-cyan-950 z-50 lg:hidden
          transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <ul className="flex flex-col px-6 py-6 gap-3 text-white">
          {navData.map((item) => (
            <MobileNavItem key={item.label} item={item} onNavigate={onClose} />
          ))}
        </ul>
      </nav>
    </>
  );
};

export default MobileMenu;
