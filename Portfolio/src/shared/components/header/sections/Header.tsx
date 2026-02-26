import { Link } from "react-router-dom";
import { Container } from "../../container/Container";
import HeaderInfoItem from "../components/HeaderInfoItem";
import HeaderLogo from "../../../../assets/icons/headerLogo.svg";
import Mail from "../../../../assets/icons/mail.svg";
import Phone from "../../../../assets/icons/phone.svg";
import Linkedin from "../../../../assets/icons/linkedin.svg";

export const Header = () => {
  return (
    <>
      <header>
        <div className="flex w-full bg-cyan-950 h-32 lg:h-40 lg:py-0">
          <Container className="justify-between">
            <div className="flex items-center">
              <div className="flex justify-center items-center">
                <Link to="/">
                  <img
                    src={HeaderLogo}
                    alt="Furkan Soylu"
                    className="w-16 h-16 lg:w-68 lg:h-20"
                  />
                </Link>
              </div>
            </div>
            <div className="lg:flex hidden justify-between gap-8">
              <HeaderInfoItem icon={Mail} title="Email">
                <a
                  href="mailto:furkansylu97@gmail.com"
                  className="transition-colors duration-200 hover:text-cyan-500"
                >
                  furkansylu97@gmail.com
                </a>
              </HeaderInfoItem>

              <HeaderInfoItem icon={Phone} title="Telefon">
                <a
                  href="tel:+905526584455"
                  className="transition-colors duration-200 hover:text-cyan-500"
                >
                  +90 536 963 11 73
                </a>
              </HeaderInfoItem>

              <HeaderInfoItem icon={Linkedin} title="LinkedIn">
                <a
                  href="https://www.linkedin.com/in/furkansoylu97"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200 hover:text-cyan-500"
                >
                  Profilim
                </a>
              </HeaderInfoItem>
            </div>
          </Container>
        </div>
      </header>
    </>
  );
};
