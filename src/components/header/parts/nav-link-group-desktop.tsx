import { NavLink } from "./nav-link";

export const NavLinkGroupDesktop: React.FC = () => {
  return (
    <div className="flex items-start justify-center gap-12 px-2">
      <NavLink to="#home">Home</NavLink>
      <NavLink to="#about">Sobre</NavLink>
      <NavLink to="#services">Serviços</NavLink>
      <NavLink to="#expertise">Expertise</NavLink>
      <NavLink to="#contact">Contato</NavLink>
    </div>
  );
};
