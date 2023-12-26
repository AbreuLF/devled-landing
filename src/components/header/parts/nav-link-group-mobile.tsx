import { NavLink } from "./nav-link";

export const NavLinkGroupMobile: React.FC = () => {
  return (
    <li className="">
      <ul>
        <NavLink to="#home">Home</NavLink>
      </ul>
      <ul>
        <NavLink to="#about">Sobre</NavLink>
      </ul>
      <ul>
        <NavLink to="#services">Serviços</NavLink>
      </ul>
      <ul>
        <NavLink to="#expertise">Expertise</NavLink>
      </ul>
      <ul>
        <NavLink to="#contact">Contato</NavLink>
      </ul>
    </li>
  );
};
