import { Menu as Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { useState } from "react";
import ListMobile from "./ListMobile";

const Navbar = () => {
  const [ativo, setAtivo] = useState(false);
  const toggleIcon = () => {
    setAtivo(!ativo);
  };

  return (
    <div id="home">
      <div className="bg-white shadow-md h-[68px] w-full fixed flex justify-center">
        <nav className="flex justify-between py-5 w-screen max-w-[1184px] px-4">
          <a className="flex gap-1 items-end">
            <img src={logo} alt="" className="w-8 h-7" />
            <span className="text-base font-bold">Aurum Web</span>
          </a>

          <button onClick={toggleIcon}>
            {ativo ? (
              <X className="w-8 h-7 lg:hidden" />
            ) : (
              <Menu className="w-8 h-7 lg:hidden" />
            )}
          </button>
          <div className="hidden lg:block">
            <section className="flex items-center gap-10">
              <ul className="gap-2 flex text-sm md:gap-8">
                <a
                  href="#home"
                  className="transition-all hover:scale-105 hover:font-medium"
                >
                  <li>Home</li>
                </a>
                <a
                  href="#section-pontos"
                  className="transition-all hover:scale-105 hover:font-medium"
                >
                  <li>Destaques</li>
                </a>
                <div>
                  <a
                    href="#section-destaques"
                    className="transition-all duration-300 hover:scale-105 hover:font-medium"
                  >
                    <li>Contato</li>
                  </a>
                </div>
                <div>
                  <a
                    href="#section-feedbacks"
                    className="transition-all duration-300 hover:scale-105 hover:font-medium"
                  >
                    <li>Feedback</li>
                  </a>
                </div>
                <a
                  href="#section-duvidas"
                  className="transition-all duration-300 hover:scale-105 hover:font-medium"
                >
                  <li>Dúvidas</li>
                </a>
              </ul>
              <div className="flex gap-3">
                <button className="rounded-md border-solid bg-black text-white transition border-[1px] border-black bg-gray-300 px-3 py-1 hover:opacity-70  hover:scale-105">
                  Entrar em contato
                </button>
              </div>
            </section>
            {/* List actived menu */}
          </div>
        </nav>
      </div>
      <div>
        {ativo ? (
          <ListMobile />
        ) : (
          <div className="hidden">
            <ListMobile />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
