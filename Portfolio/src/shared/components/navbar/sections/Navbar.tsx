import { navData } from "../data/navData";
import NavItem from "../components/NavItem";
import { Container } from "../../container/Container";

const Navbar = () => {
  return (
    <nav className="hidden lg:block absolute top-40 left-0 w-full z-20">
      <div className="flex items-center h-16 w-full bg-cyan-950/50">
        <Container>
          <div className="flex w-full items-center justify-center text-white font-semibold">
            <ul className="flex items-center px-4 gap-10">
              {navData.map((item) => (
                <NavItem key={item.label} item={item} />
              ))}
            </ul>
          </div>
        </Container>
      </div>
    </nav>
  );
};

export default Navbar;
