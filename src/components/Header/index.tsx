import { Container, NavBar } from "./styles";
import logo from "../../assets/imgs/Kenai.svg";
import bell from "../../assets/imgs/bell.svg";
import search from "../../assets/imgs/search.svg";
import user from "../../assets/imgs/user.svg";

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="logo Kenai" />

      <NavBar>
        <img src={search} alt="search" />
        <p>Início</p>
        <p>Minha lista</p>
        <img src={bell} alt="bell" />
        <img src={user} alt="user" />
      </NavBar>
    </Container>
  );
}
